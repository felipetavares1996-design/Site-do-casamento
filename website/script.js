// Gift List Data
const gifts = [
    { title: "Vale Futebol para o noivo jogar quando quiser", image: "meme-brasil.avif" },
    { title: "Remedinho para a ressaca dos noivos depois do casamento", image: "Ressaca.webp" },
    { title: "Ajuda para a noiva não entrar nervosa na cerimônia", image: "noiva com raiva.jpg" },
    { title: "Só para não dizer que não dei nada", image: "mão de vaca.webp" },
    { title: "Abafador para a Camila não escutar o Felipe jogando FIFA", image: "fone de ouvido.jpg" },
    { title: "Taxa para o buquê CAIR na mão da sua namorada", image: "buque 1.jpg" },
    { title: "Travesseiro para não brigarem por um só", image: "travesseiro.jpg" },
    { title: "Primeiro lugar na fila do buffet", image: "gordinho.jpg" },
    { title: "Ajuda para a Camila comprar um despertador para o Felipe", image: "despertador.jpg" },
    { title: "Ajuda de custo para pagar o DJ que vai tocar as nossas músicas de axé", image: "axe.jpg" },
    { title: "Ajuda de custo para ajudar no tratamento da rinite do Felipe", image: "rinite.webp" },
    { title: "Ajuda para o Felipe comprar um óculos novo e largar o Juliet", image: "julietteana.webp" },
    { title: "Ajuda de custo para o Felipe levar a Camila ao estádio do Corinthians", image: "estadio.jpg" },
    { title: "Ajuda de custo para a Camila iniciar o tratamento contra amnésia", image: "esquecida.jpg" },
    { title: "Ajuda de custo para comprar a tag de iPhone para a Camila parar de perder o celular", image: "air tag.jpg" },
    { title: "Adicionar música na playlist do DJ", image: "dj marqiinhos.jpg" },
    { title: "Ajuda de custo para o Felipe tomar várias cachaças PITU na Lua de Mel", image: "pituveio.png" },
    { title: "Sentar próximo à mesa de doces", image: "meme casamento.jpg" },
    { title: "Ajuda de custo para pagar o OPEN BAR", image: "bar.jpg" },
    { title: "Forma para a Camila fazer o bolo do casamento", image: "boloengracado.webp" },
    { title: "Taxa para o buquê NÃO cair na mão da sua namorada", image: "chute boque.jpg" },
    { title: "Taças de vinho para noites românticas", image: "vinho.jpg" },
    { title: "Curso de Culinária para a Camila deixar de explorar o Felipe", image: "cozinha fogo.webp" },
    { title: "Shampoo antiqueda para a noiva evitar de cair cabelo no ralo (Assinado: Felipe - SOS)", image: "cabelonoralo.webp" },
    { title: "Cobertor para a noiva sempre coberta de razão", image: "monaiza.webp" },
    { title: "Robô para ajudar o Felipe a limpar a casa", image: "aspirador.jpeg" },
    { title: "Ajuda de custo para pagar a ração da Pandora depois do casamento", image: "cachorro.jpg" },
    { title: "Ajuda para termos uma churrasqueira na nova casa", image: "ta_pegando_fogo_bicho_capa.jpg" },
    { title: "Ajuda para a Camila comprar energético e ficar acordada a festa toda", image: "saborr.jpg" },
    { title: "Ajude o Felipe a pagar o buquê do casamento", image: "buquedindin.jpg" },
    { title: "Ajuda de custo porque estamos precisando de ajuda", image: "sem dinheiro.gif" },
    { title: "Ajuda de custo para comprarmos 1 edredom para o Felipe não ficar sem", image: "frio.jpg" },
    { title: "Garanta seu almoço na nossa futura casa nova", image: "almocon.jpg" },
    { title: "Seguro-acidente para a hora do buquê", image: "anao.jpg" },
    { title: "Ajude o casal a pagar a terapia depois do estresse do casamento", image: "terapia.jpg" },
    { title: "Saco de cimento para a reforma da futura casa", image: "cimento.jpg" },
    { title: "Rolo de macarrão para a noiva", image: "rolo.jpg" },
    { title: "Capacete contra o rolo de macarrão para o Felipe", image: "capacete.jpg" },
    { title: "Curso para saber cuidar de criança (Estamos planejando um BABY)", image: "baba.jpg" },
    { title: "Presença confirmada para o primeiro churrasco na casa nova", image: "churras.jpg" },
    { title: "Ajuda para pagar um hotel pet para a Pandora na nossa lua de mel", image: "pet.jpg" },
    { title: "Ajude o casal a pagar o vestido da noiva. Como sempre, a Camila só escolhe coisa cara", image: "vestido.jpg" },
    { title: "Ajude o Felipe a não perder mais cabelos por preocupação", image: "minoxidil.webp" },
    { title: "Ajuda de custo para a Camila parar de brigar no UNO", image: "uno meme.jpg" },
    { title: "Camisa do time do coração para a alegria do noivo", image: "camisa.webp" },
    { title: "Vaquinha para ajudar os noivos quebrados depois do casamento", image: "veios.webp" },
    { title: "Cota - Amigos para sempre", image: "certficado.jpg" },
    { title: "Ajude o Felipe a pagar as alianças do casamento", image: "alianca.jpg" },
    { title: "Mais ajuda para o Felipe pagar as alianças do casamento", image: "alianca doce.jpg" },
    { title: "Se Deus tocar no seu coração, ajude", image: "jesus.jpg" },
    { title: "Deus te iluminou e você resolveu dar um bom presente", image: "iluminadao.webp" },
    { title: "Coral para cantar “ALELUIA” na entrada do noivo", image: "coral.png" },
    { title: "Coral para cantar “ALELUIA” na entrada da noiva", image: "coralm.webp" },
    { title: "Ajuda para pagar a maquiagem da noiva", image: "noiva-chorando-min1.jpg" },
    { title: "Ajuda para mudarmos para uma casa maior", image: "casanova.webp" },
    { title: "Ajuda de custo para pagarmos uma faxineira uma vez ao mês para o Felipe descansar", image: "veia.webp" },
    { title: "Ajuda para comprarmos uma Lava & Seca (S.O.S. Felipe)", image: "dora.jpg" },
    { title: "Academia para os noivos entrarem em forma depois da lua de mel", image: "academia.jpg" },
    { title: "Aposte que a noiva e o noivo não vão para a academia depois do casamento", image: "comendo.jpg" },
    { title: "Ajuda na aposentadoria dos noivos", image: "veiadindin.jpg" },
    { title: "Ajuda para pagarmos o financiamento do casamento", image: "lagrimas.jpg" },
    { title: "Ajuda de custo para a lua de mel dos noivos", image: "lua de mel.jpg" },
    { title: "Ajude a pagar a fatura do cartão de crédito", image: "Serasa-Limpa-Nome-Reproducao.jpg" },
    { title: "Adote um boleto atrasado", image: "boleto.jpg" },
    { title: "Seja o nosso padrinho/madrinha (FAVORITO)", image: "padrinho.webp" },
    { title: "1 ano de corte de cabelo para o noivo", image: "ronaldo.jpeg" },
    { title: "Seja o nosso PARENTE FAVORITO (S2)", image: "grande familia.jpg" },
    { title: "Dei o MELHOR PRESENTE", image: "oscar.jpg" }
];

document.addEventListener('DOMContentLoaded', () => {
    // Hero Slideshow
    const heroImages = [
        "./galeria/WhatsApp Image 2026-03-14 at 15.42.06.jpeg",
        "./galeria/WhatsApp Image 2026-03-14 at 15.42.06 (1).jpeg",
        "./galeria/WhatsApp Image 2026-03-14 at 15.42.07.jpeg",
        "./galeria/WhatsApp Image 2026-03-14 at 15.44.39.jpeg",
        "./galeria/WhatsApp Image 2026-03-14 at 15.47.24.jpeg"
    ];
    let currentHeroImageIndex = 0;
    const heroImgEl = document.getElementById('couple-photo');
    heroImgEl.style.transition = "opacity 0.5s ease-in-out";

    setInterval(() => {
        heroImgEl.style.opacity = 0; // fade out
        setTimeout(() => {
            currentHeroImageIndex = (currentHeroImageIndex + 1) % heroImages.length;
            heroImgEl.src = heroImages[currentHeroImageIndex];
            heroImgEl.style.opacity = 1; // fade in
        }, 500);
    }, 3000);

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const pricesString = ["300,00", "200,00", "300,00", "150,00", "300,00", "300,00", "150,00", "350,00", "150,00", "200,00", "350,00", "800,00", "200,00", "500,00", "500,00", "300,00", "269,69", "250,00", "300,00", "200,00", "400,00", "500,00", "500,00", "300,00", "250,00", "500,00", "300,00", "400,00", "550,00", "300,00", "850,00", "400,00", "350,00", "350,00", "350,00", "700,00", "500,00", "250,00", "700,00", "500,00", "750,00", "1000,00", "800,00", "450,00", "450,00", "600,00", "999,99", "1000,00", "500,00", "500,00", "1500,00", "1500,00", "1500,00", "700,00", "700,00", "800,00", "3500,00", "2000,00", "400,00", "1000,00", "1000,00", "1500,00", "1000,00", "1000,00", "3000,00", "1000,00", "3000,00", "4000,00"];

    // Populate gifts
    const giftsGrid = document.getElementById('gifts-grid');
    
    gifts.forEach((gift, index) => {
        let mediaHtml = '';
        if (gift.image) {
            mediaHtml = `<div class="gift-image-container"><img src="./${gift.image}" alt="${gift.title}" class="gift-image"></div>`;
        }

        const price = pricesString[index] || "0,00";

        // create card
        const card = document.createElement('div');
        card.className = 'gift-card';
        card.style.animationDelay = `${(index % 10) * 0.1}s`; // Stagger animation slightly
        
        card.innerHTML = `
            ${mediaHtml}
            <h3 class="gift-title">${gift.title}</h3>
            <p class="gift-price">R$ ${price}</p>
            <button class="gift-btn" onclick="openPaymentModal('${gift.title}', '${price}')">Presentear</button>
        `;
        
        giftsGrid.appendChild(card);
    });

    // Modal Logic
    const modal = document.getElementById('payment-modal');
    const closeBtn = document.getElementById('close-modal');
    
    // Close modal when clicking X
    closeBtn.onclick = function() {
        closePaymentModal();
    }
    
    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            closePaymentModal();
        }
    }
});

let currentGiftPriceValue = 0;

// Function to open modal (must be outside DOMContentLoaded to be globally accessible by onclick)
function openPaymentModal(title, priceStr) {
    const modal = document.getElementById('payment-modal');
    const giftNameEl = document.getElementById('modal-gift-name');
    const giftPriceEl = document.getElementById('modal-gift-price');
    
    giftNameEl.textContent = title;
    giftPriceEl.textContent = `R$ ${priceStr}`;
    
    // Parse the price to a float for installments
    currentGiftPriceValue = parseFloat(priceStr.replace('.', '').replace(',', '.'));
    
    showOptionsPanel();
    modal.classList.add('show');
}

function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    modal.classList.remove('show');
}

// Navigation Functions
function showOptionsPanel() {
    document.getElementById('payment-options-panel').style.display = 'block';
    document.getElementById('pix-panel').style.display = 'none';
    document.getElementById('card-panel').style.display = 'none';
    
    const successPanel = document.getElementById('success-panel');
    if(successPanel) successPanel.style.display = 'none';
    
    const successVideo = document.getElementById('success-video');
    if (successVideo) {
        successVideo.pause();
        successVideo.currentTime = 0;
    }
}

function showPixPanel() {
    document.getElementById('payment-options-panel').style.display = 'none';
    document.getElementById('pix-panel').style.display = 'block';
}

function showCardPanel() {
    document.getElementById('payment-options-panel').style.display = 'none';
    document.getElementById('card-panel').style.display = 'block';
    
    // Format card number with spaces as user types
    const cardNumberInput = document.getElementById('card-number');
    cardNumberInput.oninput = function() {
        let val = this.value.replace(/\D/g, '').substring(0, 16);
        this.value = val.replace(/(.{4})/g, '$1 ').trim();
    };

    // Format expiry as MM/AA
    const cardExpiryInput = document.getElementById('card-expiry');
    cardExpiryInput.oninput = function() {
        let val = this.value.replace(/\D/g, '').substring(0, 4);
        if (val.length >= 3) val = val.substring(0,2) + '/' + val.substring(2);
        this.value = val;
    };

    // CVV numeric only
    const cardCvvInput = document.getElementById('card-cvv');
    cardCvvInput.oninput = function() {
        this.value = this.value.replace(/\D/g, '').substring(0, 4);
    };

    // CPF Masking
    const cardTaxIdInput = document.getElementById('card-taxid');
    cardTaxIdInput.oninput = function() {
        let val = this.value.replace(/\D/g, '').substring(0, 11);
        if (val.length > 9) val = val.substring(0,3) + '.' + val.substring(3,6) + '.' + val.substring(6,9) + '-' + val.substring(9);
        else if (val.length > 6) val = val.substring(0,3) + '.' + val.substring(3,6) + '.' + val.substring(6);
        else if (val.length > 3) val = val.substring(0,3) + '.' + val.substring(3);
        this.value = val;
    };

    // Generate Installment Options
    const select = document.getElementById('installments-select');
    select.innerHTML = '';
    const maxInstallments = 10;
    for (let i = 1; i <= maxInstallments; i++) {
        const option = document.createElement('option');
        option.value = i;
        const portionValue = (currentGiftPriceValue / i).toFixed(2).replace('.', ',');
        option.textContent = i === 1
            ? `1x de R$ ${portionValue} (Sem juros)`
            : `${i}x de R$ ${portionValue} (Sem juros)`;
        select.appendChild(option);
    }
}

function copyPixKey() {
    const pixKey = "56.997.401.0001-12";
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave PIX copiada com sucesso: ' + pixKey);
    }).catch(() => {
        alert('Erro ao copiar a chave. Selecione o texto e copie manualmente.');
    });
}

// ─────────────────────────────────────────────
//  PAGBANK — Processamento Real de Cartão
// ─────────────────────────────────────────────

// IMPORTANTE: substitua estas constantes pelas suas credenciais PagBank
const PAGBANK_PUBLIC_KEY = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAj6ZtX3rpwqHxI8aUPOixB6wD1jkFlning0RLW26M5tPdBId5PFA6ZGtMBkWUk7GHGEtKWsQyCJ3Vm5I/A8NzoTLi2wEutladtUw8UWTMfE7PEkbjuMwDkDC1gvxbYlbkHaGKxoWcw+waaZzirWvdxwH0HhCywGabEp4fvDRO8CzQZkh0k+tI56a2/87O+OQxHvT2wvSHyZHf8RvXYFJtkuvUK4dezgPweH+lZRjbE8XWLFs5CfQ0EsDwnyI1mt9d6eQpfbZQC3eGGzl9I4DPIqZJY0PVuaAL9LYveKL3siQoFBiBwnjpyAcDlyNDiA47hcEDh1f7oI6v6HgQb71k7QIDAQAB"; // Painel PagBank > Credenciais
const WORKER_URL = "https://casamento-pagbank.felipetavares1996.workers.dev"; // URL do seu Worker

async function processCardPayment(event) {
    if (event) event.preventDefault();

    const submitBtn = document.getElementById('card-submit-btn');
    const errorMsg  = document.getElementById('card-error-msg');
    errorMsg.style.display = 'none';

    // Lê os valores dos inputs
    const holderName  = document.getElementById('card-holder').value.trim().toUpperCase();
    const holderTaxId = document.getElementById('card-taxid').value.replace(/\D/g, '');
    const rawNumber   = document.getElementById('card-number').value.replace(/\s/g, '');
    const expiryRaw   = document.getElementById('card-expiry').value; // MM/AA
    const cvv         = document.getElementById('card-cvv').value.trim();
    const installments = parseInt(document.getElementById('installments-select').value, 10);

    // Valida o formato da validade
    const expiryParts = expiryRaw.split('/');
    if (expiryParts.length !== 2) {
        showCardError('Validade inválida. Use o formato MM/AA.');
        return;
    }
    const expMonth = expiryParts[0];
    const expYear  = '20' + expiryParts[1]; // ex: "26" → "2026"

    // Trava o botão para evitar duplo clique
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processando...';

    try {
        // 1️⃣ Usa o SDK do PagBank para criptografar o cartão no navegador
        if (typeof PagSeguro === 'undefined') {
            throw new Error('SDK do PagBank não carregou. Verifique sua conexão e tente novamente.');
        }

        const encryptResult = PagSeguro.encryptCard({
            publicKey: PAGBANK_PUBLIC_KEY,
            holder:    holderName,
            number:    rawNumber,
            expMonth:  expMonth,
            expYear:   expYear,
            securityCode: cvv
        });

        if (encryptResult.errors && encryptResult.errors.length > 0) {
            throw new Error('Dados do cartão inválidos: ' + encryptResult.errors.map(e => e.message).join(', '));
        }

        const encryptedCard = encryptResult.encryptedCard;

        // 2️⃣ Envia o token criptografado para o Cloudflare Worker (nunca os dados brutos)
        const amountInCents = Math.round(currentGiftPriceValue * 100); // PagBank usa centavos

        const response = await fetch(`${WORKER_URL}/pay-card`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                encryptedCard,
                holderName,
                holderTaxId,
                amount: amountInCents,
                installments,
                giftTitle: document.getElementById('modal-gift-name').textContent
            })
        });

        const result = await response.json();

        if (!response.ok || result.error) {
            throw new Error(result.message || 'Erro ao processar o pagamento. Tente novamente.');
        }

        // 3️⃣ Sucesso!
        showSuccessPanel();

    } catch (err) {
        console.error('Erro no pagamento:', err);
        showCardError(err.message || 'Erro inesperado. Tente novamente.');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Finalizar Pagamento';
    }
}

function showCardError(message) {
    const errorMsg = document.getElementById('card-error-msg');
    errorMsg.textContent = '⚠️ ' + message;
    errorMsg.style.display = 'block';
}

function showSuccessPanel() {
    document.getElementById('payment-options-panel').style.display = 'none';
    document.getElementById('pix-panel').style.display = 'none';
    document.getElementById('card-panel').style.display = 'none';

    const successPanel = document.getElementById('success-panel');
    successPanel.style.display = 'block';

    const successVideo = document.getElementById('success-video');
    if (successVideo) successVideo.play();
}

// Mantém a função antiga para o PIX (simulada até integrar PIX do PagBank)
function processPayment(event) {
    if (event) event.preventDefault();
    showSuccessPanel();
}
