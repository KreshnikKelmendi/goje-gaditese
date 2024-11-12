const categoriesData = [
    {
        id: 1,
        category: 'Breakfast',
        description: 'Delicious breakfast items',
        products: [
            { id: 101, name: 'Briosh', price: 120 },
            { id: 102, name: 'Briosh i kripur', price: 160 },
            { id: 103, name: 'Omlete Tost & Avocado', price: 300 },
            { id: 104, name: `Pluk's Breakfast`, price: 320 }

        ]
    },
    {
        id: 2,
        category: 'Kafeteria',
        description: 'Freshly baked pizzas',
        products: [
            { id: 201, name: 'Kafe', price: 90 },
            { id: 202, name: 'Makiato', price: 90 },
            { id: 203, name: 'Kapuçino', price: 130 },
            { id: 204, name: 'Kafe Shekerato', price: 200 },
            { id: 205, name: 'Kafe Latte', price: 150 },
            { id: 206, name: 'Frappe', price: 150 },
            { id: 207, name: 'Kakao', price: 130 },
            { id: 208, name: 'Kafe Americano', price: 100 },
            { id: 209, name: 'Kafe Gojë Gaditëse', price: 250 }
        ]
    },
    {
        id: 3,
        category: 'Freskuese',
        description: 'Quick and tasty fast food',
        products: [
            { id: 301, name: 'Ujë Natyral 0.5', price: 80 },
            { id: 302, name: 'Ujë i Gazuar', price: 80 },
            { id: 303, name: 'Ujë Natyral 0.75', price: 200 },
            { id: 304, name: 'Ujë i Gazuar 0.75', price: 200 },
            { id: 305, name: 'Santal', price: 200 },
            { id: 306, name: 'Rose Lemonade', price: 450 },
            { id: 307, name: 'Crodino', price: 180 },
            { id: 308, name: 'Orange Soda 0.33', price: 150 },
            { id: 309, name: 'Lemon Soda 0.33', price: 150 },
            { id: 310, name: 'Uje Tonic Britvic 0.15', price: 150 },
            { id: 311, name: 'Red Bull', price: 300 },
        ]
    },
    {
        id: 4,
        category: 'Të Ngrohta',
        description: 'Sweet treats and desserts',
        products: [
            { id: 401, name: 'ÇAJ Relaksi', price: 120 },
            { id: 402, name: 'ÇAJ Energjik', price: 120 },
            { id: 403, name: 'ÇAJ Detoksi', price: 120 },
            { id: 404, name: 'ÇAJ Imuniteti', price: 120 }
        ]
    },
    {
        id: 5,
        category: 'Birra',
        description: 'Healthy and fresh salads',
        products: [
            { id: 501, name: 'Korça 0.33', price: 200 },
            { id: 502, name: 'Heineken 0.33', price: 250 },
            { id: 503, name: 'Corona', price: 350 },
            { id: 504, name: 'HB Original 0.5', price: 500 },
            { id: 505, name: 'HB Munchner Weisse 0.5', price: 500 }

        ]
    },
    {
        id: 6,
        category: 'Verë',
        description: 'Healthy and fresh salads',
        products: [
            { id: 601, name: 'Cabernet e Kuqe - Gotë', price: 220 },
            { id: 602, name: 'Chardonnaz e Bardhë - Gotë', price: 220 },
            { id: 603, name: `Montepulciano D'abruzzoe e Kuqe - Gotë`, price: 280 },
            { id: 604, name: 'Pinot Grigio e Bardhë - Gotë', price: 280 },
            { id: 605, name: 'Negroamaro e Kuqe - Gotë', price: 400 },
            { id: 606, name: 'Lavardar e Bardhë - Gotë', price: 380 },
            { id: 607, name: 'Lavardar e Kuqe - Gotë', price: 380 },
            { id: 608, name: 'Sauvignon e Bardhë Gotë', price: 400 },
            { id: 609, name: `Tenuta Ulisse (Montepulciano D'abruzzo)`, price: 2800 },
            { id: 610, name: `Tenuta Ulisse (Pecorino)`, price: 2800 },
            { id: 611, name: `Nurellari (Pulsi i Beratit ose Montemeca Code)`, price: 2600 },
            { id: 612, name: `La pruina (Salice Salentino)`, price: 3800 },
            { id: 613, name: `Lavis (Gewurztraminer)`, price: 3800 },
            { id: 614, name: `Feudi DI S.G (Greco di Tufo)`, price: 3200 },
            { id: 615, name: `Paolo Conterno (Langhe Arneis, A Val)`, price: 4500 },
            { id: 616, name: `Grattamcco (Bolgheri Rosso)`, price: 5000 },
            { id: 617, name: `Primitivo di Manduria (Il Morante)`, price: 5200 },
            { id: 618, name: `Corte Lenguin (Amarone Della Valpolicella, Classico)`, price: 7000 },
        ]
    },
    {
        id: 7,
        category: 'Alkool',
        description: 'Refreshing alcoholic beverages',
        products: [
            { id: 701, name: 'Cognac Hennesy', price: 550 },
            { id: 702, name: 'Cognac Gautier', price: 2500 },
            { id: 703, name: 'Liqueur Amaro Lucano', price: 220 },
            { id: 704, name: `Irish Cream, Whiskey, Bailey's`, price: 220 },
            { id: 705, name: `Whiskey - Jack Daniel's`, price: 350 },
            { id: 706, name: `Whiskey - Johnnie Walker, Black Label`, price: 500 },
            { id: 707, name: `Whiskey - Irish Peaky Blinders`, price: 500 },
            { id: 708, name: `Whiskey - Kensey`, price: 800 },
            { id: 709, name: `Rum, El Dorado 12y`, price: 650 },
            { id: 710, name: `Gin - Tanqueray`, price: 300 },
            { id: 711, name: `Liqueur Amaro Montenegro`, price: 250 },
            { id: 712, name: `Liqueur Disaronno`, price: 250 },
            { id: 713, name: `Lipstick Gin (Gin, Lëng rrushi, Lëng shege)`, price: 600 },

        ]
    },
    {
        id: 8,
        category: 'Lëngje frutash',
        description: 'Healthy and fresh juices',
        products: [
            { id: 801, name: 'Lëng Portokalli', price: 250 },
            { id: 802, name: 'Lëng shege', price: 250 },
            { id: 803, name: 'Sipas deshirës (Shfreno fantazinë)', price: 250 }

        ]
    },
    {
        id: 9,
        category: 'Aperitiv',
        description: 'Tasty appetizers',
        products: [
            { id: 901, name: 'Aperol Spritz', price: 450 },
            { id: 902, name: 'Hugo', price: 500 },
            { id: 903, name: 'Negroni', price: 450 }

        ]
    }
];

export { categoriesData };
