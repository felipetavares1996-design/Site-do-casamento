/**
 * Cloudflare Worker — PagBank Payment Gateway
 * Site: Casamento Camila & Felipe
 *
 * Variáveis de ambiente necessárias (configure no Cloudflare Dashboard):
 *   PAGBANK_TOKEN  — Seu Bearer Token secreto do PagBank
 *   PAGBANK_ENV    — "sandbox" para testes | "production" para cobranças reais
 */

const PAGBANK_URLS = {
    sandbox:    "https://sandbox.api.pagseguro.com",
    production: "https://api.pagseguro.com"
};

// Headers CORS para permitir chamadas do seu site hospedado no Cloudflare Pages
const corsHeaders = {
    "Access-Control-Allow-Origin":  "*", // Troque pelo seu domínio em produção
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
};

export default {
    async fetch(request, env) {
        // Responde ao preflight CORS
        if (request.method === "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        const url = new URL(request.url);

        if (request.method === "POST" && url.pathname === "/pay-card") {
            return handleCardPayment(request, env);
        }

        return new Response(JSON.stringify({ error: true, message: "Rota não encontrada." }), {
            status: 404,
            headers: { "Content-Type": "application/json", ...corsHeaders }
        });
    }
};

async function handleCardPayment(request, env) {
    try {
        const body = await request.json();
        const { encryptedCard, holderName, amount, installments, giftTitle } = body;

        // Validações básicas
        if (!encryptedCard || !holderName || !amount || !installments) {
            return jsonError("Dados incompletos para processar o pagamento.", 400);
        }
        if (amount < 100) {
            return jsonError("Valor mínimo para cartão é R$ 1,00.", 400);
        }

        const baseUrl = PAGBANK_ENV(env) === "production"
            ? PAGBANK_URLS.production
            : PAGBANK_URLS.sandbox;

        // Monta o payload de cobrança conforme a API do PagBank
        const orderPayload = {
            reference_id: `casamento-${Date.now()}`,
            customer: {
                name: holderName,
                email: "convidado@casamento.com", // Pode coletar e-mail do usuário futuramente
                tax_id: "00000000000"              // CPF do convidado — pode coletar no form futuramente
            },
            items: [
                {
                    name: giftTitle ? giftTitle.substring(0, 60) : "Presente de Casamento",
                    quantity: 1,
                    unit_amount: amount
                }
            ],
            charges: [
                {
                    reference_id: `charge-${Date.now()}`,
                    description: "Lista de Presentes — Camila & Felipe",
                    amount: {
                        value: amount,
                        currency: "BRL"
                    },
                    payment_method: {
                        type: "CREDIT_CARD",
                        installments: installments,
                        capture: true,
                        card: {
                            encrypted: encryptedCard,
                            security_code: null, // já está no encryptedCard
                            holder: {
                                name: holderName
                            },
                            store: false
                        }
                    }
                }
            ]
        };

        const pagbankResponse = await fetch(`${baseUrl}/orders`, {
            method: "POST",
            headers: {
                "Content-Type":  "application/json",
                "Authorization": `Bearer ${env.PAGBANK_TOKEN}`,
                "x-api-version": "4.0",
                "Accept":        "application/json"
            },
            body: JSON.stringify(orderPayload)
        });

        const pagbankData = await pagbankResponse.json();

        // Verifica se a cobrança foi aprovada
        if (!pagbankResponse.ok) {
            console.error("PagBank error:", JSON.stringify(pagbankData));
            const errorDetail = pagbankData.error_messages?.[0]?.description
                || pagbankData.description
                || "Pagamento recusado pelo banco.";
            return jsonError(errorDetail, 402);
        }

        const charge = pagbankData.charges?.[0];
        const status = charge?.status;

        if (status === "PAID" || status === "AUTHORIZED") {
            return new Response(JSON.stringify({
                success: true,
                orderId: pagbankData.id,
                status
            }), {
                status: 200,
                headers: { "Content-Type": "application/json", ...corsHeaders }
            });
        } else {
            // Cartão recusado
            const declineReason = charge?.payment_response?.message || "Cartão recusado. Tente outro cartão.";
            return jsonError(declineReason, 402);
        }

    } catch (err) {
        console.error("Worker error:", err.message);
        return jsonError("Erro interno. Tente novamente em instantes.", 500);
    }
}

function PAGBANK_ENV(env) {
    return env.PAGBANK_ENV || "sandbox";
}

function jsonError(message, status = 400) {
    return new Response(JSON.stringify({ error: true, message }), {
        status,
        headers: { "Content-Type": "application/json", ...corsHeaders }
    });
}
