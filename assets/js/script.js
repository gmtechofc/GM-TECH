// CONFIGURAÇÃO REAL DA LOJA
const numeroWhatsApp = "5511941583429";

// Função para formatar preço em Real
const formatarMoeda = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// --- FUNÇÃO 1: CARREGAR DESTAQUES NA HOME ---
function carregarDestaquesHome() {
    const container = document.getElementById('destaques-home');
    
    // Verificação de segurança
    if (!container) return; 

    // Limpa o container
    container.innerHTML = ''; 

    // Pega os 3 primeiros iPhones do seu database.js
    const destaques = produtosGM.slice(0, 3);

    destaques.forEach(produto => {
        const card = document.createElement('article');
        card.classList.add('product-card');

        card.innerHTML = `
            <div class="product-img">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="product-data">
                <h3 class="product-title">${produto.nome}</h3>
                <span class="product-price">${formatarMoeda(produto.preco)}</span>
                <a href="produto.html?id=${produto.id}" class="button button-sm">Ver Detalhes</a>
            </div>
        `;
        container.appendChild(card);
    });
    console.log("Destaques carregados com sucesso!");
}

// --- FUNÇÃO 2: CARREGAR TODOS OS PRODUTOS (PÁGINA PRODUTOS.HTML) ---
function carregarCatalogo() {
    const container = document.getElementById('lista-produtos');
    if (!container) return;

    container.innerHTML = ''; 

    produtosGM.forEach(produto => {
        const card = document.createElement('article');
        card.classList.add('product-card');

        card.innerHTML = `
            <div class="product-img">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="product-data">
                <h3 class="product-title">${produto.nome}</h3>
                <span class="product-price">${formatarMoeda(produto.preco)}</span>
                <a href="produto.html?id=${produto.id}" class="button button-sm">Ver Detalhes</a>
            </div>
        `;
        container.appendChild(card);
    });
}

// --- FUNÇÃO 3: DETALHES DO PRODUTO (PÁGINA PRODUTO.HTML) ---
function carregarDetalhesProduto() {
    const container = document.getElementById('detalhe-produto');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');

    const produto = produtosGM.find(p => p.id == produtoId);

    if (!produto) {
        container.innerHTML = '<h2>Produto não encontrado.</h2><a href="produtos.html">Voltar para a loja</a>';
        return;
    }

    container.innerHTML = `
        <div class="product-detail-container">
            <div class="detail-img">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="detail-data">
                <h1 class="detail-title">${produto.nome}</h1>
                <span class="detail-price">${formatarMoeda(produto.preco)}</span>
                <div class="detail-specs">
                    <p><strong>Condição:</strong> ${produto.condicao}</p>
                    <p><strong>Cores:</strong> ${produto.cores.join(', ')}</p>
                </div>
                <p class="detail-description">${produto.descricao}</p>
                <button onclick="finalizarCompraWhatsApp(${produto.id})" class="button">
                    <i class="ri-whatsapp-line"></i> Finalizar no WhatsApp
                </button>
            </div>
        </div>
    `;
}

// --- FUNÇÃO 4: WHATSAPP ---
function finalizarCompraWhatsApp(id) {
    const produto = produtosGM.find(p => p.id == id);
    if (!produto) return;

    const texto = `Olá GM TECH! Vi no site o *${produto.nome}* por *${formatarMoeda(produto.preco)}* e tenho interesse!`;
    const textoCodificado = encodeURIComponent(texto);
    window.open(`https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`, '_blank');
}

// --- MENU MOBILE ---
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if(navToggle) navToggle.addEventListener('click', () => navMenu.classList.add('show-menu'));
if(navClose) navClose.addEventListener('click', () => navMenu.classList.remove('show-menu'));