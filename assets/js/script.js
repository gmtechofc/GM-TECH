document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. LÓGICA DO MENU MOBILE ---
    const menuIcon = document.querySelector('.mobile-menu-icon');
    const navMenu = document.querySelector('.nav-menu');

    if(menuIcon) {
        menuIcon.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuIcon.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // --- 2. RENDERIZAÇÃO DINÂMICA DE PRODUTOS ---
    const listaProdutos = document.getElementById('lista-produtos');
    
    if (listaProdutos && typeof produtosLista !== 'undefined') {
        produtosLista.forEach(produto => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            
            // Lógica de Imagem (Link ou Arquivo Local)
            let imgSrc;
            if (!produto.img) {
                imgSrc = 'https://placehold.co/300x350/111/gold?text=GM+TECH';
            } else if (produto.img.startsWith('http')) {
                imgSrc = produto.img;
            } else {
                imgSrc = `assets/img/${produto.img}`;
            }

            // Renderização sem as bolinhas de cores
            card.innerHTML = `
                <div class="product-image">
                    <img src="${imgSrc}" alt="${produto.nome}" loading="lazy">
                </div>
                <h3>${produto.nome}</h3>
                <p style="font-size:0.85rem; color:#aaa; margin: 10px 0;">Todas as cores disponíveis</p>
                <p class="price">${produto.preco}</p>
                <button class="btn-buy" onclick="abrirModal('${produto.nome}', '${produto.preco}')">
                    <i class="fas fa-shopping-bag"></i> Comprar
                </button>
            `;
            listaProdutos.appendChild(card);
        });
    }

    // --- 3. LÓGICA DO MODAL DE COMPRA ---
    const modal = document.getElementById('compraModal');
    const closeModal = document.querySelector('.close-modal');
    const formCompra = document.getElementById('form-compra');
    let produtoAtual = '';
    let precoAtual = '';

    window.abrirModal = (nome, preco) => {
        produtoAtual = nome;
        precoAtual = preco;
        const displayProd = document.getElementById('produto-selecionado');
        if(displayProd) displayProd.innerText = `${nome} - ${preco}`;
        if(modal) modal.style.display = 'flex';
    };

    if(closeModal) {
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // --- 4. ENVIO PARA WHATSAPP ---
    if(formCompra) {
        formCompra.addEventListener('submit', (e) => {
            e.preventDefault(); 

            const nome = document.getElementById('cliente-nome').value;
            const endereco = document.getElementById('cliente-endereco').value;
            const cor = document.getElementById('cliente-cor').value;
            const pagamento = document.getElementById('cliente-pagamento').value;

            const telefoneLoja = "5511941583429"; 

            const mensagem = `*NOVO PEDIDO PELO SITE!* 🚀\n\n` +
                `📱 *Produto:* ${produtoAtual}\n` +
                `💲 *Valor:* ${precoAtual}\n` +
                `🎨 *Cor Preferida:* ${cor}\n` +
                `💳 *Pagamento:* ${pagamento}\n\n` +
                `👤 *Cliente:* ${nome}\n` +
                `📍 *Endereço:* ${endereco}\n\n` +
                `Aguardo a confirmação!`;

            const urlFinal = `https://api.whatsapp.com/send?phone=${telefoneLoja}&text=${encodeURIComponent(mensagem)}`;

            window.open(urlFinal, '_blank');
            modal.style.display = 'none';
            formCompra.reset();
        });
    }
});

// --- 5. FILTRO DE BUSCA ---
function filtrarProdutos() {
    const input = document.getElementById('inputBusca').value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const nomeProduto = card.querySelector('h3').innerText.toLowerCase();
        if (nomeProduto.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}