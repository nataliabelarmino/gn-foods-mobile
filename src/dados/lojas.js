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
                        imagem: require("../img/boloformigueiro.jpg"),
                        descricao: "Bolo de trigo com granulado.",
                        preco: 12.00,
                    },
                    {
                        nome: "Bolo de chocolate",
                        imagem: require("../img/bolochoco.jpg"),
                        descricao: "Bolo com massa de chocolate e cobertura de brigadeiro.",
                        preco: 18.00,
                    },
                    {
                        nome: "Empada de frango",
                        imagem: require("../img/empada.jpg"),
                        descricao: "Empada com recheio de frango com catupiry.",
                        preco: 10.00,
                    },
                ]
            },
            { 
                nome: "Pães", 
                produtos: [
                    {                   
                        nome: "Pão com doce de goiaba",
                        imagem: require("../img/paogoiabada.jpg"),
                        preco: 1.00,
                    },
                    {
                        nome: "Pão Francês",
                        imagem: require("../img/paofrances.jpg"),
                        preco: 0.50,
                    },
                    {
                        nome: "Pão com doce de coco",
                        imagem: require("../img/paococada.jpg"),
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
                        imagem: require("../img/açai250.jpeg"),
                        descricao: "Açaí tradicional, granola, leite condensado, amendoim, banana, paçoca.",
                        preco: 12.00
                    },
                    {
                        nome: "Açaí 500ml",
                        imagem: require("../img/açai500.jpg"),
                        descricao: "Açaí tradicional, granola, leite condensado, amendoim, banana, paçoca.",
                        preco: 20.00
                    }
                ]
            },
            { 
                nome: "Hamburguês Artesanais", 
                produtos: [
                    {                   
                        nome: "X-Tudo",
                        imagem: require("../img/xtudo.png"),
                        descricao: "Salada, carne, ovo, maionese, ketchup queijo mussarela, queijo cheddar.",
                        preco: 24.00,
                    },
                    {
                        nome: "X-Frango",
                        descricao: "Salada, Frango, Ovo, Maionese, Ketchup, Queijo mussarela, Queijo cheddar.",
                        imagem: require("../img/xfrango.jpg"),
                        preco: 20.00,
                    },

                    {
                        nome: "X-Salada",
                        descricao: "Alface, tomate, cebola, Picles, Frango, Ovo, Maionese, Ketchup, Queijo mussarela, Queijo cheddar.",
                        imagem: require("../img/xsalada.jpg"),
                        preco: 20.00,
                    },

                    {
                        nome: "X-Bacon",
                        descricao: "Salada, Carne, Ovo, Bacon, Maionese, Ketchup, Queijo mussarela, Queijo cheddar.",
                        imagem: require("../img/xbacon.jpg"),
                        preco: 20.00,
                    },
                    
                ]
            }
        ]
    },

    {
        nome: "Dimas Pizza", 
        imagem: require ('../img/dimas pizza.png'),
        avaliacao: "5.0", 
        dadoQualquer: "Pizzas - 1,0 km, 35-50 min",  
        categorias: [
            {
                nome: "Pizza Salgada",
                produtos: [
                    {
                        nome: "Pizza de Calabresa",
                        imagem: require("../img/pizzacal.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, cebola, queijo mussarela e calabresa.",
                        preco: 15.00 
                    },
                    {
                        nome: "Pizza Quatro Queijos",
                        imagem: require("../img/pizza4queijos.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, cebola, queijo provolone, mussarela, parmesão e gorgonzola.",
                        preco: 30.00
                    },
                    {
                        nome: "Pizza Carne Seca",
                        imagem: require("../img/pizzacarneseca.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, cebola, queijo mussarela, carne seca.",
                        preco: 65.00
                    },
                ]
            },
            { 
                nome: "Pizza Doce",
                produtos: [
                    {
                        nome: "Pizza de Chocolate",
                        imagem: require("../img/pizzachoco.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, queijo mussarela e chocolate ao leite derretido com raspas de chocolate meio amargo.",
                        preco: 30.00
                    },
                    {
                        nome: "Pizza de Confete",
                        imagem: require("../img/pizzaconfete.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, queijo mussarela, chocolate ao leite derretido e MMs.",
                        preco: 65.00
                    }
                ],
            },
        ]
    },

    { 
        nome: "Pizzaria Imperial", 
        avaliacao: '3.0', 
        dadoQualquer: "dado qualquer 2",
        categorias: [
            {
                nome: "Pizza Salgada",
                produtos: [
                    {
                        nome: "Pizza de Calabresa",
                        imagem: require("../img/pizzacal.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, cebola, queijo mussarela e calabresa.",
                        preco: 60.00,
                    },
                    {
                        nome: "Pizza Quatro Queijos",
                        imagem: require("../img/pizza4queijos.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, cebola, queijo provolone, mussarela, parmesão e gorgonzola.",
                        preco: 60.00,
                    },
                    {
                        nome: "Pizza Carne Seca",
                        imagem: require("../img/pizzacarneseca.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, cebola, queijo mussarela, carne seca.",
                        preco: 60.00,
                    },
                ]
            },
            {
                nome: "Pizza Doce",
                produtos: [
                    {
                        nome: "Pizza de Chocolate",
                        imagem: require("../img/pizzachoco.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, queijo mussarela e chocolate ao leite derretido com raspas de chocolate meio amargo.",
                        preco: 50.00,
                    },
                    {
                        nome: "Pizza de Confete",
                        imagem: require("../img/pizzaconfete.jpg"),
                        descricao: "Massa padrão acompanhada de molho de tomate, queijo mussarela, chocolate ao leite derretido e MMs.",
                        preco: 50.00,
                    },
                ]
            },
            {
                nome: "Salgados",
                produtos: [
                    {
                        nome: "Coxinha",
                        imagem: require("../img/coxinha.jpg"),
                        preco: 5.00, 
                    },
                    {
                        nome: "Enroladinho de Salsicha",
                        imagem: require("../img/enroladinho.jpg"),
                        preco: 5.00, 
                    },
                ]
            }
        ]
    },
    
    
];
