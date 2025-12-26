const produtosLista = [
    // --- iPhone 11 ---
    { nome: "iPhone 11 128GB", preco: "R$ 1.690,00", cores: "Branco, Preto, Verde", img: "https://photos5.appleinsider.com/price_guide/iphone-11-header.png" },
    { nome: "iPhone 11 Pro Max 256GB", preco: "R$ 1.890,00", cores: "Grafite, Verde, Gold", img: "https://store.icaiu.com.br/wp-content/uploads/2021/12/Foto-iphone-11-pro-max.png" },

    // --- iPhone 12 ---
    { nome: "iPhone 12 128GB", preco: "R$ 1.790,00", cores: "Branco, Azul, Preto", img: "https://m.media-amazon.com/images/G/31/img21/Wireless/katariy/Apple/Family_stripe/AMZ_FamilyStripe_iPhone_12._CB640925209_.png" },
    { nome: "iPhone 12 Pro 128GB", preco: "R$ 2.390,00", cores: "Preto, Branco, Azul", img: "https://ola.tech/wp-content/uploads/iphone-12-pro-max-gold-1.webp" },
    { nome: "iPhone 12 Pro Max 128GB", preco: "R$ 2.690,00", cores: "Grafite, Branco, Azul, Gold", img: "https://planoscelular.claro.com.br/medias/300Wx300H-productCard-17710-zero.png?context=bWFzdGVyfGltYWdlc3w2MjM4OXxpbWFnZS9wbmd8YUdVMUwyZzVOUzg1T0RJMU5qSXdOVFUzT0RVMEx6TXdNRmQ0TXpBd1NGOXdjbTlrZFdOMFEyRnlaRjh4TnpjeE1GOTZaWEp2TG5CdVp3fDllNzg0NWZiZDE0MzM5MTIzMzA3NzhlOGQ3MDBiY2U3YTkxOTBkMDJkZmRhNTlhZGJjNTJmMmU4Y2MwNzU4MTQ" },
    { nome: "iPhone 12 Pro Max 256GB", preco: "R$ 3.090,00", cores: "Grafite, Branco, Azul, Gold", img: "https://compasia.com.ph/cdn/shop/files/iphone-12-pro-max-530049_800x.png?v=1737456773" },

    // --- iPhone 13 ---
    { nome: "iPhone 13 128GB", preco: "R$ 2.290,00", cores: "Azul, Preto, Branco", img: "https://planoscelular.claro.com.br/medias/18246-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2NjE0OXxpbWFnZS9wbmd8YURsbUwyZzJNeTg1TXpJd056YzBOVE16TVRVd0x6RTRNalEyWHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfGNkZTFmN2I2YTYyMTFiYmMyMzc3MGM3ZTFiNTI2MWM0ZjQzZGVkNDg3ZmRlZTNhNzgzNmIxNmNjMWEzOTQzOGY" },
    { nome: "iPhone 13 Pro 128GB", preco: "R$ 2.990,00", cores: "Branco, Azul, Grafite, Gold", img: "https://m.media-amazon.com/images/G/32/apple/NPI/Mar_22/Family_Stripe/AMZ_FamilyStripe_iphone_13_pro_max._CB623946980_.png" },
    { nome: "iPhone 13 Pro 256GB", preco: "R$ 3.190,00", cores: "Branco, Azul, Grafite, Gold", img: "https://store.icaiu.com.br/wp-content/uploads/2022/10/IPhone-13-pro-max6.png" },
    { nome: "iPhone 13 Pro Max 128GB", preco: "R$ 3.190,00", cores: "Branco, Azul, Grafite, Gold", img: "https://wefix.co.za/cdn/shop/files/iPhone-13-Pro-White_3.png?v=1707377959" },
    { nome: "iPhone 13 Pro Max 256GB", preco: "R$ 3.490,00", cores: "Branco, Azul, Grafite, Gold", img: "https://store.icaiu.com.br/wp-content/uploads/2022/06/foto-PNG-iphone-13-pro.png" },

    // --- iPhone 14 ---
    { nome: "iPhone 14 128GB", preco: "R$ 2.590,00", cores: "Branco, Preto, Azul, Rose", img: "https://wefix.co.za/cdn/shop/files/iphone-14_purple_1_2.png?v=1722949372" },
    { nome: "iPhone 14 Pro 128GB", preco: "R$ 3.490,00", cores: "Branco, Roxo, Grafite, Gold", img: "https://planoscelular.claro.com.br/medias/18373-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2NTY1NXxpbWFnZS9wbmd8YUdabEwyZzJOUzg1TWpZM05EWXlNVGMyTnprNEx6RTRNemN6WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDRkOGU5OGIxZjY0YWEzNGYyZWM2M2JlZTFhNjZiYTEwNWIwOTk0MmJlM2ExZTFiY2IzZTFjZDgzOWFmOWNlNDk" },
    { nome: "iPhone 14 Pro 512GB", preco: "R$ 3.790,00", cores: "Branco, Roxo, Grafite, Gold", img: "https://www.myg.in/images/thumbnails/300/300/detailed/101/s_ayea-6q-removebg-preview.png.png" },
    { nome: "iPhone 14 Pro Max 128GB", preco: "R$ 4.990,00", cores: "Branco, Roxo, Grafite, Gold", img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-14-pro-max-dourado-.png" },
    { nome: "iPhone 14 Pro Max 256GB", preco: "R$ 4.290,00", cores: "Branco, Roxo, Grafite, Gold", img: "https://planoscelular.claro.com.br/medias/18393-0-zero-300Wx300H-productCard?context=bWFzdGVyfGltYWdlc3w2NTY1NXxpbWFnZS9wbmd8YUdaakwyZ3hZeTg1TWpZM05Ea3dPVGM1T0Rjd0x6RTRNemt6WHpCZmVtVnliMTh6TURCWGVETXdNRWhmY0hKdlpIVmpkRU5oY21RfDJhMTE3MmU5ODg4N2Q5MWM0MGY5MjA1MWM2MTQ4ZTAzOTYzOGMyNzlhOTk4ODdlMWMzYjQyZjY5NmYxYTExNDU" },

    // --- iPhone 15 ---
    { nome: "iPhone 15 128GB", preco: "R$ 3.390,00", cores: "Verde, Preto, Azul, Rosa", img: "https://meuimportadors.com/wp-content/uploads/2023/10/iPhone-15-Azul-768x768-1.png" },
    { nome: "iPhone 15 Pro 128GB", preco: "R$ 4.390,00", cores: "Branco, Azul, Preto, Natural", img: "https://t.ctcdn.com.br/sAyu7updaGg4l4fBKQCs5yh72I4=/fit-in/600x600/filters:fill(transparent):watermark(wm/prd.png,-32p,center,1,none,15)/i798969.png" },
    { nome: "iPhone 15 Pro 256GB", preco: "R$ 4.690,00", cores: "Branco, Azul, Preto, Natural", img: "https://m.media-amazon.com/images/G/32/apple/NPI/Q3_23/Family_Stripe/Iphone/AMZ_Family_Stripe_iPhone_15_pro._CB578022713_.png" },
    { nome: "iPhone 15 Pro Max 256GB", preco: "R$ 5.390,00", cores: "Branco, Roxo, Grafite, Gold", img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-15-pro-max-tecnoblog-titanio-azul.png" },
    { nome: "iPhone 15 Pro Max 512GB", preco: "R$ 5.590,00", cores: "Branco, Roxo, Grafite, Gold", img: "https://conteudo.imguol.com.br/c/noticias/e2/2023/10/05/iphone-15-pro-transoarente-1696507867172_v2_300x420.png" },

    // --- LACRADOS / NOVOS ---
    { nome: "iPhone 16 Pro 256GB (Lacrado)", preco: "R$ 5.590,00", cores: "Branco, Preto, Natural, Desert", img: "https://ss7.vzw.com/is/image/VerizonWireless/apple-iphone-16-pro-max-desert-titanium?wid=400&hei=400&fmt=webp-alpha" },
    { nome: "iPhone 16 Pro Max 256GB (Lacrado)", preco: "R$ 5.890,00", cores: "Branco, Preto, Natural, Desert", img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-pro-max-titanio-branco-700x700.png" },
    { nome: "iPhone 16 128GB (Lacrado)", preco: "R$ 4.990,00", cores: "Verde, Preto, Azul, Rose", img: "https://files.tecnoblog.net/wp-content/uploads/2025/01/iphone-16-preto-1.png" },
    
    // --- Linha 17 (Futuro/Pré-venda) ---
    { nome: "iPhone 17 256GB", preco: "R$ 6.890,00", cores: "Lavanda, Sálvia, Azul, Branco", img: "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-azul-nevoa.png" },
    { nome: "iPhone 17 Pro 256GB", preco: "R$ 9.290,00", cores: "Laranja, Azul, Prateado", img: "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-azul-intenso-700x700.png" },
    { nome: "iPhone 17 Pro Max 256GB", preco: "R$ 9.790,00", cores: "Laranja, Azul, Prateado", img: "https://files.tecnoblog.net/wp-content/uploads/2025/09/iphone-17-pro-max-laranja-cosmico.png" },

    // --- Outros ---
    { nome: "MacBook Air M4 256GB 16GB", preco: "R$ 6.990,00", cores: "Padrão", img: "https://benchpromos.com.br/_next/image?url=https%3A%2F%2Fi.ibb.co%2FRpF3XM0k%2Fabda95ab-718a-4ca6-9849-73cebe691936.png&w=3840&q=75" },
    { nome: "MacBook Air M1 256GB 8GB", preco: "R$ 4.990,00", cores: "Padrão", img: "https://img-prd-pim.poorvika.com/cdn-cgi/image/width=500,height=500,quality=75/product/apple-macbook-air-m1-chip-with-8-core-cpu-and-7-core-gpu-mac-os-laptop-model.png" },
    { nome: "PS5 Digital", preco: "R$ 3.590,00", cores: "Branco", img: "https://images.digital.allugator.com/products/ps5-disk-1.png" },
    { nome: "iPad 11 128GB", preco: "R$ 2.890,00", cores: "Padrão", img: "https://static.wixstatic.com/media/e8b329_4e256a339ef54d258b41803a7c40bf4d~mv2.png/v1/fill/w_550,h_550,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e8b329_4e256a339ef54d258b41803a7c40bf4d~mv2.png" }
];