const produtosLista = [
    // --- iPhone 11 (Exemplo Completo com Fotos) ---
    { 
        nome: "iPhone 11 128GB", 
        preco: "R$ 1.690,00", 
        cores: "Branco, Preto, Verde, Roxo, Amarelo, Vermelho", 
        img: "https://photos5.appleinsider.com/price_guide/iphone-11-header.png", // Padrão
        imagensPorCor: {
            "Branco": "https://buscaparaguai.com.br/original/uploads/1706219250-16581333-corrigido.jpg?v=1766324140",
            "Preto": "https://buscaparaguai.com.br/original/uploads/1706210818-16573930-corrigido.jpg?v=1765928243",
            "Verde": "https://leoscherer.com.br/wp-content/uploads/2022/06/iPhone-11-VERDE.png",
            "Roxo": "https://dcdn-us.mitiendanube.com/stores/003/052/983/products/design-sem-nome-111-37bb39921aad4ae5c016851025554807-1024-1024.webp",
            "Amarelo": "https://leoscherer.com.br/wp-content/uploads/2023/10/iPhone-11-AMARELO.png",
            "Vermelho": "https://leoscherer.com.br/wp-content/uploads/2022/06/iPhone-11-RED.png"
        }
    },
    { 
        nome: "iPhone 11 Pro Max 256GB", 
        preco: "R$ 1.890,00", 
        cores: "Grafite, Prateado, Verde, Dourado", 
        img: "https://store.icaiu.com.br/wp-content/uploads/2021/12/Foto-iphone-11-pro-max.png",
        imagensPorCor: {
            "Grafite": "https://leoscherer.com.br/wp-content/uploads/2022/11/iPhone-11-Pro-Max-SPACE-GRAY.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-11-pro-max-prateado.png",
            "Verde": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-11-pro-max-verde-meia-noite.png",
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-11-pro-dourado.png"
        }
    },

    // --- iPhone 12 ---
    { 
        nome: "iPhone 12 128GB", 
        preco: "R$ 1.790,00", 
        cores: "Branco, Preto, Azul, Verde, Roxo, Vermelho", 
        img: "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Family_stripe/AMZ_FamilyStripe_iPhone_12._CB640925209_.png",
        imagensPorCor: {
            "Branco": "https://buscaparaguai.com.br/original/uploads/1706219250-16581333-corrigido.jpg?v=1766324140",
            "Preto": "https://buscaparaguai.com.br/original/uploads/1706210818-16573930-corrigido.jpg?v=1765928243",
            "Azul": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-azul.png",
            "Verde": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-verde.png",
            "Roxo": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-roxo.png",
            "Vermelho": "https://leoscherer.com.br/wp-content/uploads/2022/06/iPhone-12-RED.png"
        }
    },
    { 
        nome: "iPhone 12 Pro 128GB", 
        preco: "R$ 2.390,00", 
        cores: "Grafite, Prateado, Dourado, Azul-Pacífico", 
        img: "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17710-zero.png?context=bWFzdGVyfGltYWdlc3w2MjM4OXxpbWFnZS9wbmd8YUdVMUwyZzVOUzg1T0RJMU5qSXdOVFUzT0RVMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnpjeE1GOTZaWEp2TG5CdVp3fDllNzg0NWZiZDE0MzM5MTIzMzA3NzhlOGQ3MDBiY2U3YTkxOTBkMDJkZmRhNTlhZGJjNTJmMmU4Y2MwNzU4MTQ",
        imagensPorCor: {
            "Grafite": "https://leoscherer.com.br/wp-content/uploads/2022/10/iPhone-12-Pro-GRAFITE.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-prateado.png",     
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-dourado.png",
            "Azul-Pacífico": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-azul-pacifico.png"
        }
    },
    { 
        nome: "iPhone 12 Pro Max 128GB", 
        preco: "R$ 2.690,00", 
        cores: "Grafite, Prateado, Dourado, Azul-Pacífico", 
        img: "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17710-zero.png?context=bWFzdGVyfGltYWdlc3w2MjM4OXxpbWFnZS9wbmd8YUdVMUwyZzVOUzg1T0RJMU5qSXdOVFUzT0RVMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnpjeE1GOTZaWEp2TG5CdVp3fDllNzg0NWZiZDE0MzM5MTIzMzA3NzhlOGQ3MDBiY2U3YTkxOTBkMDJkZmRhNTlhZGJjNTJmMmU4Y2MwNzU4MTQ",
        imagensPorCor: {
            "Grafite": "https://leoscherer.com.br/wp-content/uploads/2022/10/iPhone-12-Pro-GRAFITE.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-prateado.png",     
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-dourado.png",
            "Azul-Pacífico": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-azul-pacifico.png"
        }
    },
    { 
        nome: "iPhone 12 Pro Max 256GB", 
        preco: "R$ 3.090,00", 
        cores: "Grafite, Prateado, Dourado, Azul-Pacífico", 
        img: "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17710-zero.png?context=bWFzdGVyfGltYWdlc3w2MjM4OXxpbWFnZS9wbmd8YUdVMUwyZzVOUzg1T0RJMU5qSXdOVFUzT0RVMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnpjeE1GOTZaWEp2TG5CdVp3fDllNzg0NWZiZDE0MzM5MTIzMzA3NzhlOGQ3MDBiY2U3YTkxOTBkMDJkZmRhNTlhZGJjNTJmMmU4Y2MwNzU4MTQ",
        imagensPorCor: {
            "Grafite": "https://leoscherer.com.br/wp-content/uploads/2022/10/iPhone-12-Pro-GRAFITE.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-prateado.png",     
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-dourado.png",
            "Azul-Pacífico": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-12-pro-max-azul-pacifico.png"
        }
    },

    // --- iPhone 13 ---
    { 
        nome: "iPhone 13 128GB", 
        preco: "R$ 2.290,00", 
        cores: "Meia-noite, Estelar, Azul, Rosa, Verde, Vermelho", 
        img: "https://planoscelular.claro.com.br/medias/18246-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2NjE0OXxpbWFnZS9wbmd8YURsbUwyZzJNeTg1TXpJd056YzBOVE16TVRVd0x6RTRNalEyWHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfGNkZTFmN2I2YTYyMTFiYmMyMzc3MGM3ZTFiNTI2MWM0ZjQzZGVkNDg3ZmRlZTNhNzgzNmIxNmNjMWEzOTQzOGY",
        imagensPorCor: {
            "Rosa": "https://buscaparaguai.com.br/original/uploads/1706222370-16630754-corrigido.jpg?v=1766596813",
            "Azul": "https://www.buscaparaguai.com.br/original/uploads/1706210839-16573946-corrigido.jpg?v=1766695900",
            "Verde": "https://planoscelular.claro.com.br/medias/18327-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2NzAzOXxpbWFnZS9wbmd8YURNMEwyZzFOeTg1TXpRek56RXpNalEzTWpZeUx6RTRNekkzWHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfGE4YjlhOTRiYmMyNGRmYjFlMmEwYjRiZjM3NDIwMjFmODA1ZDA2ODQxMDk3NzIxNTBlZmIxMmMxZGI3MWMzNDM",
            "Meia-noite": "https://microimport.com.br/wp-content/uploads/iphone-13-128gb-seminovo-com-garantia-de-3-meses.webp",
            "Estelar": "https://buscaparaguai.com.br/original/uploads/1706210846-16573950-corrigido.jpg?v=1766191066",
            "Vermelho": "https://leoscherer.com.br/wp-content/uploads/2023/02/iPhone-13-RED.png"
        }
    },
    { 
        nome: "iPhone 13 Pro 128GB", 
        preco: "R$ 2.990,00", 
        cores: "Grafite, Dourado, Prateado, Azul-Sierra, Verde", 
        img: "https://store.icaiu.com.br/wp-content/uploads/2022/06/foto-PNG-iphone-13-pro.png",
        imagensPorCor: {
            "Grafite": "https://buscaparaguai.com.br/original/uploads/1705987892-16649869-corrigido.jpg?v=1766324560",
            "Dourado": "https://buscaparaguai.com.br/original/uploads/1705987885-16649867-corrigido.jpg",
            "Prateado": "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18118-zero.png?context=bWFzdGVyfGltYWdlc3w1NDcxNnxpbWFnZS9wbmd8YURoaEwyZzJZaTg1TnpjeU16azBNVEU1TVRrNEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RFeE9GOTZaWEp2TG5CdVp3fDQ2MjQ5MWM0OWJkNzk3YjI4ZjU1YjNmNDU0MGU2NzgwODU5MjkzMmM0ODY0NTNjOWM5MTA4MGYyNTJlYTdjYWM",
            "Azul-Sierra": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-13-pro-max-azul-sierra.png",
            "Verde": "https://m.media-amazon.com/images/G/32/apple/NPI/Mar_22/Family_Stripe/AMZ_FamilyStripe_iphone_13_pro_max._CB623946980_.png"
        }
    },
    { 
        nome: "iPhone 13 Pro 256GB", 
        preco: "R$ 3.190,00", 
        cores: "Grafite, Dourado, Prateado, Azul-Sierra, Verde", 
        img: "https://store.icaiu.com.br/wp-content/uploads/2022/06/foto-PNG-iphone-13-pro.png",
        imagensPorCor: {
            "Grafite": "https://buscaparaguai.com.br/original/uploads/1705987892-16649869-corrigido.jpg?v=1766324560",
            "Dourado": "https://buscaparaguai.com.br/original/uploads/1705987885-16649867-corrigido.jpg",
            "Prateado": "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18118-zero.png?context=bWFzdGVyfGltYWdlc3w1NDcxNnxpbWFnZS9wbmd8YURoaEwyZzJZaTg1TnpjeU16azBNVEU1TVRrNEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RFeE9GOTZaWEp2TG5CdVp3fDQ2MjQ5MWM0OWJkNzk3YjI4ZjU1YjNmNDU0MGU2NzgwODU5MjkzMmM0ODY0NTNjOWM5MTA4MGYyNTJlYTdjYWM",
            "Azul-Sierra": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-13-pro-max-azul-sierra.png",
            "Verde": "https://m.media-amazon.com/images/G/32/apple/NPI/Mar_22/Family_Stripe/AMZ_FamilyStripe_iphone_13_pro_max._CB623946980_.png"
        }
    },
    { 
        nome: "iPhone 13 Pro Max 128GB", 
        preco: "R$ 3.190,00", 
        cores: "Grafite, Dourado, Prateado, Azul-Sierra, Verde", 
        img: "https://store.icaiu.com.br/wp-content/uploads/2022/06/foto-PNG-iphone-13-pro.png",
        imagensPorCor: {
            "Grafite": "https://buscaparaguai.com.br/original/uploads/1705987892-16649869-corrigido.jpg?v=1766324560",
            "Dourado": "https://buscaparaguai.com.br/original/uploads/1705987885-16649867-corrigido.jpg",
            "Prateado": "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18118-zero.png?context=bWFzdGVyfGltYWdlc3w1NDcxNnxpbWFnZS9wbmd8YURoaEwyZzJZaTg1TnpjeU16azBNVEU1TVRrNEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RFeE9GOTZaWEp2TG5CdVp3fDQ2MjQ5MWM0OWJkNzk3YjI4ZjU1YjNmNDU0MGU2NzgwODU5MjkzMmM0ODY0NTNjOWM5MTA4MGYyNTJlYTdjYWM",
            "Azul-Sierra": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-13-pro-max-azul-sierra.png",
            "Verde": "https://m.media-amazon.com/images/G/32/apple/NPI/Mar_22/Family_Stripe/AMZ_FamilyStripe_iphone_13_pro_max._CB623946980_.png"
        }
    },
    { 
        nome: "iPhone 13 Pro Max 256GB", 
        preco: "R$ 3.490,00", 
        cores: "Grafite, Dourado, Prateado, Azul-Sierra, Verde", 
        img: "https://store.icaiu.com.br/wp-content/uploads/2022/06/foto-PNG-iphone-13-pro.png",
        imagensPorCor: {
            "Grafite": "https://buscaparaguai.com.br/original/uploads/1705987892-16649869-corrigido.jpg?v=1766324560",
            "Dourado": "https://buscaparaguai.com.br/original/uploads/1705987885-16649867-corrigido.jpg",
            "Prateado": "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-18118-zero.png?context=bWFzdGVyfGltYWdlc3w1NDcxNnxpbWFnZS9wbmd8YURoaEwyZzJZaTg1TnpjeU16azBNVEU1TVRrNEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4T0RFeE9GOTZaWEp2TG5CdVp3fDQ2MjQ5MWM0OWJkNzk3YjI4ZjU1YjNmNDU0MGU2NzgwODU5MjkzMmM0ODY0NTNjOWM5MTA4MGYyNTJlYTdjYWM",
            "Azul-Sierra": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-13-pro-max-azul-sierra.png",
            "Verde": "https://m.media-amazon.com/images/G/32/apple/NPI/Mar_22/Family_Stripe/AMZ_FamilyStripe_iphone_13_pro_max._CB623946980_.png"
        }
    },

    // --- iPhone 14 ---
    { 
        nome: "iPhone 14 128GB", 
        preco: "R$ 2.590,00", 
        cores: "Meia-noite, Roxo, Estelar, Azul, Vermelho, Amarelo", 
        img: "https://planoscelular.claro.com.br/medias/18422-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2MzgwN3xpbWFnZS9wbmd8YURZeEwyZ3hNaTg1TWpZNE1qVTBOamN3T0RjNEx6RTROREl5WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfGMzMDIzNWY5ZGVhODhlOTFlNzczZjcxZmE4NWQ4OGM4NGY1N2YyMTU5NDI3NDgxN2JiYWNjZDNmYjAwZGQ3NDA",
        imagensPorCor: {
            "Meia-noite": "https://planoscelular.claro.com.br/medias/18556-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2MDU2M3xpbWFnZS9wbmd8YURNNUwyaGlZeTg1TlRVeU5UWTJOVEUzTnprd0x6RTROVFUyWHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfGRkZjU2M2RhNTZjYTQ3ZGY1N2IyYWFkYjQwYmY0NzY5MGRmZWZjZmE0MjAyMzYyOWI3ZmYyMmFlNWNhN2ZlMmE",
            "Roxo": "https://planoscelular.claro.com.br/medias/18422-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2MzgwN3xpbWFnZS9wbmd8YURZeEwyZ3hNaTg1TWpZNE1qVTBOamN3T0RjNEx6RTROREl5WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfGMzMDIzNWY5ZGVhODhlOTFlNzczZjcxZmE4NWQ4OGM4NGY1N2YyMTU5NDI3NDgxN2JiYWNjZDNmYjAwZGQ3NDA",    
            "Estelar": "https://planoscelular.claro.com.br/medias/18557-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w1OTgwNXxpbWFnZS9wbmd8YURKakwyZ3pPUzg1TlRVeU56QTJPRE13TXpZMkx6RTROVFUzWHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDc0NjJkOGRiZTgzZWM4ZmUxNTFkM2RjMjhhNmI1YzI1NGJmYTA1Yzk3OTI4NWY5YTAxZjg4NmZiYTkzMjMwMzU",
            "Azul": "https://images.kabum.com.br/produtos/fotos/sync_mirakl/578789/xlarge/Iphone-14-Apple-128GB-Azul-Tela-De-6-1-5g-E-C-mera-De-12mp_1742567434.png",
            "Vermelho": "https://planoscelular.claro.com.br/medias/18414-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w1NzczN3xpbWFnZS9wbmd8YUdGaEwyZ3lNaTg1TWpZNE5qWXdOams1TVRZMkx6RTROREUwWHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfGI5YTkzMTU2MDIzYzYwMzQ5YjViNjUxOGI5NTYzZGU3OGRiOTVkZTBjZmQ1NTBjM2NkYTI0NWU4Y2Q1ODI0YTI",
            "Amarelo": "https://dcdn-us.mitiendanube.com/stores/003/272/638/products/1-front-back-amarelo-11-734a9b71fa99b8dfe616959344386462-480-0.webp"
        }
    },
    { 
        nome: "iPhone 14 Pro 128GB", 
        preco: "R$ 3.490,00", 
        cores: "Roxo-Profundo, Dourado, Prateado, Preto-Espacial", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
        imagensPorCor: {
            "Roxo-Profundo": "https://planoscelular.claro.com.br/medias/18391-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2OTc0NHxpbWFnZS9wbmd8YUdOa0wyaG1aaTg1TWpZM09UWTBNREU0TnpFNEx6RTRNemt4WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDRiNzQ3YzFiMmFmMDgxM2U0MGE2N2M0YTk3NzU3NjRhYmViYmMwZDk4ZTVmMGEzODg5MGMzNzEyZWY2MGJhMzQ",
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-prateado.png",
            "Preto-Espacial": "https://gcdnb.pbrd.co/images/sdtk2rnUNXyV.png?o=1"
        }
    },
    { 
        nome: "iPhone 14 Pro 512GB", 
        preco: "R$ 3.790,00", 
        cores: "Roxo-Profundo, Dourado, Prateado, Preto-Espacial", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
        imagensPorCor: {
            "Roxo-Profundo": "https://planoscelular.claro.com.br/medias/18391-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2OTc0NHxpbWFnZS9wbmd8YUdOa0wyaG1aaTg1TWpZM09UWTBNREU0TnpFNEx6RTRNemt4WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDRiNzQ3YzFiMmFmMDgxM2U0MGE2N2M0YTk3NzU3NjRhYmViYmMwZDk4ZTVmMGEzODg5MGMzNzEyZWY2MGJhMzQ",
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-prateado.png",
            "Preto-Espacial": "https://gcdnb.pbrd.co/images/sdtk2rnUNXyV.png?o=1"
        }
    },
    { 
        nome: "iPhone 14 Pro Max 128GB", 
        preco: "R$ 4.990,00", 
        cores: "Roxo-Profundo, Dourado, Prateado, Preto-Espacial", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
        imagensPorCor: {
            "Roxo-Profundo": "https://planoscelular.claro.com.br/medias/18391-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2OTc0NHxpbWFnZS9wbmd8YUdOa0wyaG1aaTg1TWpZM09UWTBNREU0TnpFNEx6RTRNemt4WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDRiNzQ3YzFiMmFmMDgxM2U0MGE2N2M0YTk3NzU3NjRhYmViYmMwZDk4ZTVmMGEzODg5MGMzNzEyZWY2MGJhMzQ",
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-prateado.png",
            "Preto-Espacial": "https://gcdnb.pbrd.co/images/sdtk2rnUNXyV.png?o=1"
        }
    },
    { 
        nome: "iPhone 14 Pro Max 256GB", 
        preco: "R$ 4.290,00", 
        cores: "Roxo-Profundo, Dourado, Prateado, Preto-Espacial", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
        imagensPorCor: {
            "Roxo-Profundo": "https://planoscelular.claro.com.br/medias/18391-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2OTc0NHxpbWFnZS9wbmd8YUdOa0wyaG1aaTg1TWpZM09UWTBNREU0TnpFNEx6RTRNemt4WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDRiNzQ3YzFiMmFmMDgxM2U0MGE2N2M0YTk3NzU3NjRhYmViYmMwZDk4ZTVmMGEzODg5MGMzNzEyZWY2MGJhMzQ",
            "Dourado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png",
            "Prateado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-prateado.png",
            "Preto-Espacial": "https://gcdnb.pbrd.co/images/sdtk2rnUNXyV.png?o=1"
        }
    },

    // --- iPhone 15 ---
    { 
        nome: "iPhone 15 128GB", 
        preco: "R$ 3.390,00", 
        cores: "Preto, Azul, Verde, Amarelo, Rosa", 
        img: "https://meuimportadors.com/wp-content/uploads/2023/10/iPhone-15-Azul-768x768-1.png",
        imagensPorCor: {
            "Preto": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-preto.png",
            "Azul": "https://meuimportadors.com/wp-content/uploads/2023/10/iPhone-15-Azul-768x768-1.png",
            "Verde": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-verde.png",
            "Amarelo": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-amarelo.png",
            "Rosa": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-rosa.png"
        }
    },
    { 
        nome: "iPhone 15 Pro 128GB", 
        preco: "R$ 4.390,00", 
        cores: "Titânio-Natural, Titânio-Azul, Titânio-Branco, Titânio-Preto", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-max-tecnoblog-titanio-azul.png",
        imagensPorCor: {
            "Titânio-Natural": "https://leoscherer.com.br/wp-content/uploads/2024/10/iPhone-15-Pro-Titanio-Natural.png",
            "Titânio-Azul": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-titanio-azul.png",
            "Titânio-Branco": "https://gcdnb.pbrd.co/images/TvaWa45a44Bj.png?o=1",
            "Titânio-Preto": "https://gcdnb.pbrd.co/images/7EhC6T074Du9.png?o=1"
        }
    },
    { 
        nome: "iPhone 15 Pro 256GB", 
        preco: "R$ 4.690,00", 
        cores: "Titânio-Natural, Titânio-Azul, Titânio-Branco, Titânio-Preto", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-max-tecnoblog-titanio-azul.png",
        imagensPorCor: {
            "Titânio-Natural": "https://leoscherer.com.br/wp-content/uploads/2024/10/iPhone-15-Pro-Titanio-Natural.png",
            "Titânio-Azul": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-titanio-azul.png",
            "Titânio-Branco": "https://gcdnb.pbrd.co/images/TvaWa45a44Bj.png?o=1",
            "Titânio-Preto": "https://gcdnb.pbrd.co/images/7EhC6T074Du9.png?o=1"
        }
    },
    { 
        nome: "iPhone 15 Pro Max 256GB", 
        preco: "R$ 5.390,00", 
        cores: "Titânio-Natural, Titânio-Azul, Titânio-Branco, Titânio-Preto", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-max-tecnoblog-titanio-azul.png",
        imagensPorCor: {
            "Titânio-Natural": "https://leoscherer.com.br/wp-content/uploads/2024/10/iPhone-15-Pro-Titanio-Natural.png",
            "Titânio-Azul": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-titanio-azul.png",
            "Titânio-Branco": "https://gcdnb.pbrd.co/images/TvaWa45a44Bj.png?o=1",
            "Titânio-Preto": "https://gcdnb.pbrd.co/images/7EhC6T074Du9.png?o=1"
        }
    },
    { 
        nome: "iPhone 15 Pro Max 512GB", 
        preco: "R$ 5.590,00", 
        cores: "Titânio-Natural, Titânio-Azul, Titânio-Branco, Titânio-Preto", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-max-tecnoblog-titanio-azul.png",
        imagensPorCor: {
            "Titânio-Natural": "https://leoscherer.com.br/wp-content/uploads/2024/10/iPhone-15-Pro-Titanio-Natural.png",
            "Titânio-Azul": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-titanio-azul.png",
            "Titânio-Branco": "https://gcdnb.pbrd.co/images/TvaWa45a44Bj.png?o=1",
            "Titânio-Preto": "https://gcdnb.pbrd.co/images/7EhC6T074Du9.png?o=1"
        }
    },

    // --- LACRADOS / NOVOS ---
    { 
        nome: "iPhone 16 128GB", 
        preco: "R$ 4.990,00", 
        cores: "Ultramarino, Verde-Acinzentado, Rosa, Branco, Preto", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-preto-1.png",
        imagensPorCor: {
            "Ultramarino": "https://gcdnb.pbrd.co/images/MxODgcmxUswR.png?o=1",
            "Verde-Acinzentado": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-verde-acinzentado.png",
            "Rosa": "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-19009-zero.png?context=bWFzdGVyfGltYWdlc3w4NTM2OXxpbWFnZS9wbmd8YUdZNUwyaGlOUzh4TURJeU1UTXhPRFF3TmpFM05DOHpNREJYZURNd01FaGZjSEp2WkhWamRFTmhjbVJmTVRrd01EbGZlbVZ5Ynk1d2JtY3wwZmEwYzY3Njk0OGU3YmI5NGUzN2JhZTJmZWQ5OTFiMmRmMmQxZTQ2MDc3OTVjMDk3YTVkZmViOTMxMzU3NGFm",
            "Branco": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-branco.png",
            "Preto": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-preto-1.png"
        }
    },
    { 
        nome: "iPhone 16 Pro 256GB", 
        preco: "R$ 5.590,00", 
        cores: "Titânio-Deserto, Titânio-Natural, Titânio-Branco, Titânio-Preto", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-branco-700x700.png",
        imagensPorCor: {
            "Titânio-Deserto": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-deserto.png",
            "Titânio-Natural": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-natural.png",
            "Titânio-Branco": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-branco-700x700.png",
            "Titânio-Preto": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-preto.png"
        }
    },
    { 
        nome: "iPhone 16 Pro Max 256GB ", 
        preco: "R$ 5.890,00", 
        cores: "Titânio-Deserto, Titânio-Natural, Titânio-Branco, Titânio-Preto", 
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-branco-700x700.png",
        imagensPorCor: {
            "Titânio-Deserto": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-deserto.png",
            "Titânio-Natural": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-natural.png",
            "Titânio-Branco": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-branco-700x700.png",
            "Titânio-Preto": "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-preto.png"
        }
    },
    // --- iPhone 17 ---
    { 
        nome: "iPhone 17 256GB", 
        preco: "R$ 6.890,00", 
        cores: "Lavanda, Sálvia, Azul-Névoa, Branco, Preto",
        img: "https://m.media-amazon.com/images/G/32/apple/iPhone/iPhone17/AMZ_Family-Stripe_iPhone_17._CB800727272_.png",
        imagensPorCor: {
            "Lavanda": "https://m.media-amazon.com/images/G/32/apple/iPhone/iPhone17/AMZ_Family-Stripe_iPhone_17._CB800727272_.png",
            "Sálvia": "https://existore.com.br/wp-content/uploads/2025/09/01-iphone-17-6-3-inch-sage.webp",
            "Azul-Névoa": "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-azul-nevoa.png",
            "Branco": "https://reidocelular.com.br/wp-content/uploads/2025/12/Iphone-17-3.png",
            "Preto": "https://boutique.santander.pt/fotos/produtos/SB_930/iphone_17_black_2_up_screen_usen_42187163368c3f82868460.png"
        }
    },
    { 
        nome: "iPhone 17 Pro 256GB", 
        preco: "R$ 9.290,00", 
        cores: "Laranja-Cósmico, Azul-Intenso, Prateado",
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-pro-max-laranja-cosmico.png",
        imagensPorCor: {
            "Laranja-Cósmico": "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-pro-max-laranja-cosmico.png",
            "Azul-Intenso": "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-azul-intenso.png",
            "Prateado": "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-19310-zero.png?context=bWFzdGVyfGltYWdlc3w1NDMwOHxpbWFnZS9wbmd8YUdVM0wyZzBOUzh4TURRM05ETXdOelF5TURFNU1DOHpNREJYZURNd01FaGZjSEp2WkhWamRFTmhjbVJmTVRrek1UQmZlbVZ5Ynk1d2JtY3xjNGZiOTRiYTUyZTZmODQzZDk2NjM4ZTdhNWUwYmYxNmVlMzZjMjFjNWY2ODQ0ZDM0ZTMwNGViMWMyMzg3Mjcw"
        }
    },
    { 
        nome: "iPhone 17 Pro Max 256GB", 
        preco: "R$ 9.790,00", 
        cores: "Laranja-Cósmico, Azul-Intenso, Prateado",
        img: "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-pro-max-laranja-cosmico.png",
        imagensPorCor: {
            "Laranja-Cósmico": "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-pro-max-laranja-cosmico.png",
            "Azul-Intenso": "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-azul-intenso.png",
            "Prateado": "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-19310-zero.png?context=bWFzdGVyfGltYWdlc3w1NDMwOHxpbWFnZS9wbmd8YUdVM0wyZzBOUzh4TURRM05ETXdOelF5TURFNU1DOHpNREJYZURNd01FaGZjSEp2WkhWamRFTmhjbVJmTVRrek1UQmZlbVZ5Ynk1d2JtY3xjNGZiOTRiYTUyZTZmODQzZDk2NjM4ZTdhNWUwYmYxNmVlMzZjMjFjNWY2ODQ0ZDM0ZTMwNGViMWMyMzg3Mjcw"
        }
    },

    // --- Outros ---
    { 
        nome: "MacBook Air M1", 
        preco: "R$ 4.990,00", 
        img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-macbook-air-m1-chip-with-8-core-cpu-and-7-core-gpu-mac-os-laptop-model.png",
    },
    { 
        nome: "MacBook Air M4 256GB 16 RAM", 
        preco: "R$ 6.990,00", 
        img: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/mba-13inch-15inch.png",
    },
    { 
        nome: "PS5 Digital", 
        preco: "R$ 3.590,00", 
        img: "https://images.digital.allugator.com/products/ps5-disk-1.png",
    },
    { 
        nome: "iPad 11 128GB", 
        preco: "R$ 2.890,00", 
        img: "https://kitus.com.br/wp-content/uploads/2025/10/15383192437-ipad-11-a16-128gb-prata-4.png",
    }
];