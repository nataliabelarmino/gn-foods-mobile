export default [
    { 
        nome: "Panificadora Imperial", 
        avaliacao: "4.0", 
        dadoQualquer: "Padaria - 0,5 km, 15-30 min",  
        categorias: [
            {
                nome: "Massas",
                produtos: [
                    {
                        nome: "Bolo Formigueiro",
                        descricao: "Bolo de trigo com granulado",
                        preco: 12.00,
                    },
                    {
                        nome: "Bolo de chocolate",
                        descricao: "Bolo com massa de chocolate e cobertura de brigadeiro",
                        preco: 18.00,
                    },
                    {
                        nome: "Empada de frango",
                        descricao: "Empada com recheio de frango com catupiry",
                        preco: 10.00,
                    },
                ]
            },
            { 
                nome: "Pães", 
                produtos: [
                    {                   
                        nome: "Pão com doce de goiaba",
                        preco: 1.00,
                    },
                    {
                        nome: "Pão Francês",
                        preco: 0.50,
                    },
                    {
                        nome: "Pão com doce de coco",
                        preco: 1.00,
                    },
                ]
            }
        ]
    },

    { 
        nome: "Vl Açaíteria",
        imagem: require ('../img/vl.png'),
        avaliacao: '5.0',
        dadoQualquer: "Sorvetes e açaís - 0,8km - 35-45min",
        categorias: [
            {
                nome: "Açaí",
                produtos: [        
                    {
                        nome: "Açaí 250ml",
                        descricao: "Açaí tradicional, granola, leite condensado, amendoim, banana, paçoca",
                        preco: 12.00
                    },
                    {
                        nome: "Açaí 500ml",
                        descricao: "Açaí tradicional, granola, leite condensado, amendoim, banana, paçoca",
                        preco: 20.00
                    }
                ]
            },
            { 
                nome: "Hamburguês Artesanais", 
                produtos: [
                    {                   
                        nome: "X-Tudo",
                        descricao: "Salada, carne, ovo, maionese, ketchup queijo mussarela, queijo cheddar",
                        preco: 24.00,
                    },
                    {
                        nome: "X-Frango",
                        descricao: "Salada, Frango, Ovo, Maionese, Ketchup, Queijo mussarela, Queijo cheddar",
                        preco: 20.00,
                    },

                    {
                        nome: "X-Salada",
                        descricao: "Alface, tomate, cebola, Picles, Frango, Ovo, Maionese, Ketchup, Queijo mussarela, Queijo cheddar",
                        preco: 20.00,
                    },

                    {
                        nome: "X-Bacon",
                        descricao: "Salada, Carne, Ovo, Bacon, Maionese, Ketchup, Queijo mussarela, Queijo cheddar",
                        preco: 20.00,
                    },
                    
                ]
            }
        ]
    },

    {
        nome: "Dimas Pizza", 
        avaliacao: "5.0", 
        dadoQualquer: "Pizzas - 1,0 km, 35-50 min",  
        categorias: [
            {
                nome: "Massas",
                produtos: [
                    {
                        nome: "Bolo Formigueiro",
                        descricao: "Bolo de trigo com granulado",
                        preco: 12.00,
                    },
                    {
                        nome: "Bolo de chocolate",
                        descricao: "Bolo com massa de chocolate e cobertura de brigadeiro",
                        preco: 18.00,
                    },
                    {
                        nome: "Empada de frango",
                        descricao: "Empada com recheio de frango com catupiry",
                        preco: 10.00,
                    },
                ],
            },
        ]
    },

    { 
        nome: "Pizzaria Imperial", 
        avaliacao: '3.0', 
        dadoQualquer: "dado qualquer 2" 
    },
];
