document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. SUPER MAPA DE CORES DA APPLE (Hex Codes) ---
    // Mapeei as cores oficiais da Apple para códigos de cor
    const mapaCores = {
        // Cores Padrão
        "branco": "#f9f9f9", "white": "#f9f9f9",
        "preto": "#1f2020", "black": "#1f2020",
        "azul": "#215E7C", "blue": "#215E7C",
        "verde": "#AEE1CD", "green": "#AEE1CD",
        "amarelo": "#ffe681", "yellow": "#ffe681",
        "rosa": "#fae0d8", "pink": "#fae0d8",
        "vermelho": "#BA0C2E", "red": "#BA0C2E", "product-red": "#BA0C2E",
        "roxo": "#e5ddea", "purple": "#e5ddea",

        // Cores Específicas (Pro / Max)
        "grafite": "#4c4b49", "graphite": "#4c4b49",
        "dourado": "#F9E5C9", "gold": "#F9E5C9",
        "prateado": "#e3e4e5", "silver": "#e3e4e5",
        
        // Linhas 12/13/14
        "azul-pacífico": "#2d4e5e",
        "azul-sierra": "#9abbd1",
        "azul-alpino": "#586e79",
        "meia-noite": "#191f26", // Midnight
        "estelar": "#f5f0e6",   // Starlight
        "roxo-profundo": "#4d4157", // Deep Purple (14 Pro)

        // Linha 15/16 (Titânio)
        "titânio-natural": "#b9b8b2", "natural": "#b9b8b2",
        "titânio-azul": "#2f3844",
        "titânio-branco": "#f2f1ed",
        "titânio-preto": "#181819",
        "titânio-deserto": "#cba587", "desert": "#cba587",
        
        // Linha 16 / Futuro
        "ultramarino": "#5d60f0",
        "verde-acinzentado": "#9eb2a4", "teal": "#008080"
    };

    // --- 2. MENU MOBILE ---
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if(menuIcon) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuIcon.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // --- 3. RENDERIZAR PRODUTOS E BOLINHAS ---
    const listaProdutos = document.getElementById('lista-produtos');
    
    if (listaProdutos && typeof produtosLista !== 'undefined') {
        produtosLista.forEach((produto, index) => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            // Imagem Inicial
            let imgInicial = produto.img ? produto.img : 'https://placehold.co/300x350/111/gold?text=GM+TECH';
            if (!imgInicial.startsWith('http')) imgInicial = `assets/img/${imgInicial}`;

            // Gerar Bolinhas
            let coresHTML = '';
            if (produto.cores) {
                const coresArray = produto.cores.split(',').map(c => c.trim());
                if (coresArray.length > 0) {
                    coresHTML = `<div class="color-selector">`;
                    coresArray.forEach(corNome => {
                        // Tenta achar o HEX da cor
                        let key = corNome.toLowerCase().replace(/ /g, '-');
                        let hex = mapaCores[key];
                        
                        // Fallback: se não achar exato, tenta achar parcial (ex: "Verde" acha dentro de "Verde-Lima")
                        if (!hex) {
                            const foundKey = Object.keys(mapaCores).find(k => k.includes(key) || key.includes(k));
                            hex = foundKey ? mapaCores[foundKey] : "#ccc";
                        }

                        // Cria a bolinha com evento ONCLICK
                        coresHTML += `
                            <span class="color-dot" 
                                  style="background-color: ${hex};" 
                                  title="${corNome}"
                                  onclick="mudarCorProduto(${index}, '${corNome}', '${imgInicial}', this)">
                            </span>`;
                    });
                    coresHTML += `</div>`;
                }
            }

            card.innerHTML = `
                <div class="product-image">
                    <img id="img-prod-${index}" src="${imgInicial}" alt="${produto.nome}" loading="lazy">
                </div>
                <h3>${produto.nome}</h3>
                ${coresHTML}
                <p class="price">${produto.preco}</p>
                <button class="btn-buy" onclick="abrirModal('${produto.nome}', '${produto.preco}')">
                    <i class="fas fa-shopping-bag"></i> Comprar
                </button>
            `;
            listaProdutos.appendChild(card);
        });
    }

    // --- 4. MODAL E WHATSAPP ---
    const modal = document.getElementById('compraModal');
    const closeModal = document.querySelector('.close-modal');
    const formCompra = document.getElementById('form-compra');
    let produtoAtual = '';
    let precoAtual = '';
    
    // Variável para armazenar a cor clicada pelo usuário antes de abrir o modal
    window.corSelecionadaTemp = '';

    window.abrirModal = (nome, preco) => {
        produtoAtual = nome;
        precoAtual = preco;
        document.getElementById('produto-selecionado').innerText = `${nome} - ${preco}`;
        
        // Se o usuário clicou numa bolinha, já preenche o input
        const inputCor = document.getElementById('cliente-cor');
        if(window.corSelecionadaTemp) {
            inputCor.value = window.corSelecionadaTemp;
        } else {
            inputCor.value = ''; // Limpa se não escolheu
        }

        if(modal) modal.style.display = 'flex';
    };

    if(closeModal) closeModal.addEventListener('click', () => modal.style.display = 'none');
    window.addEventListener('click', (e) => { if(e.target == modal) modal.style.display = 'none'; });

    if(formCompra) {
        formCompra.addEventListener('submit', (e) => {
            e.preventDefault(); 
            const nome = document.getElementById('cliente-nome').value;
            const endereco = document.getElementById('cliente-endereco').value;
            const cor = document.getElementById('cliente-cor').value;
            const pagamento = document.getElementById('cliente-pagamento').value;
            const telefoneLoja = "5511941583429"; 

            const mensagem = `*NOVO PEDIDO SITE GM TECH* 🚀\n\n` +
                `📱 *${produtoAtual}*\n` +
                `💲 ${precoAtual}\n` +
                `🎨 *Cor:* ${cor}\n` +
                `💳 *Pagamento:* ${pagamento}\n\n` +
                `👤 *Cliente:* ${nome}\n` +
                `📍 *Endereço:* ${endereco}`;

            const urlFinal = `https://api.whatsapp.com/send?phone=${telefoneLoja}&text=${encodeURIComponent(mensagem)}`;
            window.open(urlFinal, '_blank');
            modal.style.display = 'none';
            formCompra.reset();
            window.corSelecionadaTemp = ''; // Reseta
        });
    }
});

// --- 5. FUNÇÃO DE TROCAR COR (Fora do DOMContentLoaded para acesso global) ---
function mudarCorProduto(index, corNome, imgPadrao, elemento) {
    // 1. Muda visual da bolinha
    const pai = elemento.parentElement;
    const dots = pai.querySelectorAll('.color-dot');
    dots.forEach(d => d.classList.remove('selected'));
    elemento.classList.add('selected');

    // 2. Salva a cor para o modal
    window.corSelecionadaTemp = corNome;

    // 3. Tenta trocar a imagem
    const produto = produtosLista[index];
    const imgTag = document.getElementById(`img-prod-${index}`);
    
    // Verifica se existe imagem específica para essa cor nos dados
    if (produto.imagensPorCor && produto.imagensPorCor[corNome]) {
        let novaSrc = produto.imagensPorCor[corNome];
        // Se for local, adiciona o caminho
        if (!novaSrc.startsWith('http')) novaSrc = `assets/img/${novaSrc}`;
        
        imgTag.style.opacity = 0.5; // Efeito visual de troca
        setTimeout(() => {
            imgTag.src = novaSrc;
            imgTag.style.opacity = 1;
        }, 200);
    } else {
        // Se não tiver imagem específica, volta para a padrão (ou mantém a atual se preferir)
        // Opcional: manter a imagem padrão se não houver foto da cor específica
        imgTag.src = imgPadrao; 
    }
}

// Filtro de Busca
function filtrarProdutos() {
    const input = document.getElementById('inputBusca').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const nome = card.querySelector('h3').innerText.toLowerCase();
        card.style.display = nome.includes(input) ? "block" : "none";
    });
}