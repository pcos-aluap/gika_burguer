import { http, HttpResponse } from 'msw'
import { MenuItem } from '../../@types/menu'

interface CategoryFromAPI {
    id: number;
    name: string;
    menuItemDTOList: MenuItem[];
};

interface MenuFromAPI {
    categoryDTOList: CategoryFromAPI[];
};

export const getMenuMock = http.get<never, never, MenuFromAPI>('/menu', () => {
    console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB')
    return HttpResponse.json({
        categoryDTOList: [
            {
                id: 1,
                name: "Hambúrgueres",
                menuItemDTOList: [
                    {
                        id: 53,
                        image: "",
                        name: "Hamburguer 01",
                        description: "Pao, Hamburguer",
                        cost: 4.00,
                        available: true
                    },
                    {
                        id: 102,
                        image: "",
                        name: "Hamburguer 02",
                        description: "Pao, Hamburguer, Queijo",
                        cost: 4.50,
                        available: true
                    },
                    {
                        id: 103,
                        image: "",
                        name: "Hamburguer 03",
                        description: "Pao, Hamburguer, Queijo, Presunto",
                        cost: 4.00,
                        available: true
                    },
                    {
                        id: 104,
                        image: "",
                        name: "Hamburguer 04",
                        description: "Pao, Hamburguer, Queijo, Salsicha",
                        cost: 5.00,
                        available: false
                    },
                    {
                        id: 105,
                        image: "",
                        name: "Hamburguer 05",
                        description: "Pao, Hamburguer, Queijo, Presunto, Ovo",
                        cost: 5.50,
                        available: true
                    },
                    {
                        id: 106,
                        image: "",
                        name: "Hamburguer 06",
                        description: "Pao, Hamburguer, Queijo, Presunto, Calabresa",
                        cost: 6.00,
                        available: true
                    },
                    {
                        id: 107,
                        image: "",
                        name: "Hamburguer 07",
                        description: "Pao, Hamburguer, Queijo, Presunto, Ovo, Calabresa",
                        cost: 17.00,
                        available: true
                    },
                    {
                        id: 108,
                        image: "",
                        name: "Hamburguer 08",
                        description: "Pao, Hamburguer, Calabresa, Frango",
                        cost: 15.00,
                        available: true
                    },
                    {
                        id: 109,
                        image: "",
                        name: "Hamburguer 09",
                        description: "Pao, Hamburguer, Queijo, Presunto, Bacon",
                        cost: 7.00,
                        available: false
                    },
                    {
                        id: 110,
                        image: "",
                        name: "Hamburguer 10",
                        description: "Pao, Hamburguer, Queijo, Presunto, Ovo, Bacon",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 111,
                        image: "",
                        name: "Hamburguer 11",
                        description: "Pao, Hamburguer, Queijo, Presunto, Ovo, Calabresa, Salsicha",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 112,
                        image: "",
                        name: "Hamburguer 12",
                        description: "Pao, Hamburguer, Queijo, Presunto, Ovo, Calabresa, Salsicha, Bacon",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 113,
                        image: "",
                        name: "Hamburguer 13",
                        description: "Pao, Hamburguer, Queijo, Presunto, Ovo, Calabresa, Salsicha, Bacon, Frango, Salsicha, Bacon, Frango",
                        cost: 7.00,
                        available: true
                    },
                ]
            },
            {
                id: 2,
                name: "Pizzas",
                menuItemDTOList: [
                    {
                        id: 114,
                        image: "",
                        name: "Pizza Brotinho",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 115,
                        image: "",
                        name: "Pizza Brotinho - Doce",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 116,
                        image: "",
                        name: "Pizza Grande",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 117,
                        image: "",
                        name: "Pizza Grande - Doce",
                        description: "",
                        cost: 7.00,
                        available: true
                    }          
                ]
            },
            {
                id: 3,
                name: "Hambúrgueres Especiais",
                menuItemDTOList: [
                    {
                        id: 118,
                        image: "",
                        name: "Gika",
                        description: "Carne artesanal, Bacon, Queijo, Cheddar",
                        cost: 27.00,
                        available: true
                    },
                    {
                        id: 119,
                        image: "",
                        name: "X-Egg",
                        description: "Hamburguer, Queijo, Ovo",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 120,
                        image: "",
                        name: "X-Frango",
                        description: "Frango, Queijo, Hamburguer",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 121,
                        image: "",
                        name: "X-Calabresa",
                        description: "Hamburguer, Queijo, Calabresa",
                        cost: 7.00,
                        available: true
                    },   
                    {
                        id: 122,
                        image: "",
                        name: "X-Bacon",
                        description: "Hamburguer, Queijo, Bacon",
                        cost: 7.00,
                        available: true
                    },  
                    {
                        id: 123,
                        image: "",
                        name: "X-Burguer Cheddar Bacon",
                        description: "Hamburguer, Queijo Mussarela, Queijo Cheddar",
                        cost: 7.00,
                        available: true
                    },       
                    {
                        id: 124,
                        image: "",
                        name: "Triplo Burguer Cheddar Bacon",
                        description: "Três Carnes de Hamburguer, Dobro de Queijo Cheddar",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 125,
                        image: "",
                        name: "Misto",
                        description: "Pão de Forma, Queijo, Presunto",
                        cost: 7.00,
                        available: true
                    }, 
                    {
                        id: 126,
                        image: "",
                        name: "Americano",
                        description: "Queijo, Presunto, Dois Ovos",
                        cost: 7.00,
                        available: true
                    },
                ]
            },
            {
                id: 4,
                name: "Salgados",
                menuItemDTOList: [
                    {
                        id: 127,
                        image: "",
                        name: "Coxinha",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 128,
                        image: "",
                        name: "Enroladinho",
                        description: "",
                        cost: 7.00,
                        available: false
                    },
                    {
                        id: 129,
                        image: "",
                        name: "Pão de Charque",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 130,
                        image: "",
                        name: "Pão de Salsicha",
                        description: "",
                        cost: 7.00,
                        available: true
                    },   
                    {
                        id: 131,
                        image: "",
                        name: "Torta de Frango",
                        description: "",
                        cost: 7.00,
                        available: true
                    },  
                    {
                        id: 132,
                        image: "",
                        name: "Lasanha de Frango",
                        description: "",
                        cost: 7.00,
                        available: true
                    },       
                    {
                        id: 133,
                        image: "",
                        name: "Pastel de Forno",
                        description: "",
                        cost: 7.00,
                        available: true
                    }, 
                ]
            },
            {
                id: 5,
                name: "Bebidas",
                menuItemDTOList: [
                    {
                        id: 134,
                        image: "",
                        name: "Água mineral - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 135,
                        image: "",
                        name: "Mini Coca-Cola - 250ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 136,
                        image: "",
                        name: "Mini Guaraná Antártica - 250ml",
                        description: "",
                        cost: 7.00,
                        available: false
                    },
                    {
                        id: 137,
                        image: "",
                        name: "Coca-Cola lata - 350ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 138,
                        image: "",
                        name: "Suco de uva - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 139,
                        image: "",
                        name: "Suco da polpa - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },  
                    {
                        id: 140,
                        image: "",
                        name: "Limonada - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },       
                    {
                        id: 141,
                        image: "",
                        name: "Vitamina de açaí - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },   
                    {
                        id: 142,
                        image: "",
                        name: "Guaraná do Amazonas - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },                  
                ]
            },
            {
                id: 6,
                name: "Bebidas",
                menuItemDTOList: [
                    {
                        id: 134,
                        image: "",
                        name: "Água mineral - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 135,
                        image: "",
                        name: "Mini Coca-Cola - 250ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 136,
                        image: "",
                        name: "Mini Guaraná Antártica - 250ml",
                        description: "",
                        cost: 7.00,
                        available: false
                    },
                    {
                        id: 137,
                        image: "",
                        name: "Coca-Cola lata - 350ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 138,
                        image: "",
                        name: "Suco de uva - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 139,
                        image: "",
                        name: "Suco da polpa - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },  
                    {
                        id: 140,
                        image: "",
                        name: "Limonada - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },       
                    {
                        id: 141,
                        image: "",
                        name: "Vitamina de açaí - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },   
                    {
                        id: 142,
                        image: "",
                        name: "Guaraná do Amazonas - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },                  
                ]
            },
            {
                id: 7,
                name: "Bebidas",
                menuItemDTOList: [
                    {
                        id: 134,
                        image: "",
                        name: "Água mineral - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 135,
                        image: "",
                        name: "Mini Coca-Cola - 250ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 136,
                        image: "",
                        name: "Mini Guaraná Antártica - 250ml",
                        description: "",
                        cost: 7.00,
                        available: false
                    },
                    {
                        id: 137,
                        image: "",
                        name: "Coca-Cola lata - 350ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 138,
                        image: "",
                        name: "Suco de uva - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 139,
                        image: "",
                        name: "Suco da polpa - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },  
                    {
                        id: 140,
                        image: "",
                        name: "Limonada - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },       
                    {
                        id: 141,
                        image: "",
                        name: "Vitamina de açaí - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },   
                    {
                        id: 142,
                        image: "",
                        name: "Guaraná do Amazonas - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },                  
                ]
            },
            {
                id: 8,
                name: "Bebidas",
                menuItemDTOList: [
                    {
                        id: 134,
                        image: "",
                        name: "Água mineral - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 135,
                        image: "",
                        name: "Mini Coca-Cola - 250ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 136,
                        image: "",
                        name: "Mini Guaraná Antártica - 250ml",
                        description: "",
                        cost: 7.00,
                        available: false
                    },
                    {
                        id: 137,
                        image: "",
                        name: "Coca-Cola lata - 350ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 138,
                        image: "",
                        name: "Suco de uva - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 139,
                        image: "",
                        name: "Suco da polpa - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },  
                    {
                        id: 140,
                        image: "",
                        name: "Limonada - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },       
                    {
                        id: 141,
                        image: "",
                        name: "Vitamina de açaí - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },   
                    {
                        id: 142,
                        image: "",
                        name: "Guaraná do Amazonas - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },                  
                ]
            },
            {
                id: 9,
                name: "Bebidas",
                menuItemDTOList: [
                    {
                        id: 134,
                        image: "",
                        name: "Água mineral - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 135,
                        image: "",
                        name: "Mini Coca-Cola - 250ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 136,
                        image: "",
                        name: "Mini Guaraná Antártica - 250ml",
                        description: "",
                        cost: 7.00,
                        available: false
                    },
                    {
                        id: 137,
                        image: "",
                        name: "Coca-Cola lata - 350ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 138,
                        image: "",
                        name: "Suco de uva - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },
                    {
                        id: 139,
                        image: "",
                        name: "Suco da polpa - 500ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },  
                    {
                        id: 140,
                        image: "",
                        name: "Limonada - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },       
                    {
                        id: 141,
                        image: "",
                        name: "Vitamina de açaí - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },   
                    {
                        id: 142,
                        image: "",
                        name: "Guaraná do Amazonas - 400ml",
                        description: "",
                        cost: 7.00,
                        available: true
                    },                  
                ]
            },
        ]
    })
})