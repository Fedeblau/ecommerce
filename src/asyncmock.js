const items = [
    {   id: 1,
        nombre:"mate",
        precio:30000,
        stock: 10,
        categoria: "mate",
        image:"https://acdn.mitiendanube.com/stores/635/133/products/img_75521-4531382075931ee0a616723175999395-640-0.jpg"
    },
    {   id: 2,
        nombre:"zapato",
        precio:3000,
        stock: 13,
        categoria: "calzado",
        image:"https://img.freepik.com/vector-gratis/dibujado-mano-ilustracion-dibujos-animados-zapatos-correr_23-2150920427.jpg?t=st=1723587344~exp=1723590944~hmac=78fd02dfceb51c93f42911e60a420ef8048a4ba5955fc7b63650cd91ab0b31e3&w=740"
    },
    {   id: 3,
        nombre:"termo",
        precio:60000,
        stock: 10,
        categoria:"mate", 
        image: "https://img.freepik.com/foto-gratis/maqueta-termo-primer-plano-sobre-fondo-gris_23-2148295783.jpg?t=st=1723587374~exp=1723590974~hmac=712873ae7b3f5b5d23ebacd6d3858187b85ecb04f1b5d6dcbf171f3e4742c86a&w=740"
        
    },
    {   id: 4,
        nombre:"zapatilla",
        precio:300000,
        stock: 1,
        categoria:"calzado"
    },
    {   id: 5,
        nombre:"celular",
        precio:300000,
        stock: 1,
        categoria:"tec"
    },
    {   id: 6,
        nombre:"notebook",
        precio:300000,
        stock: 1,
        categoria:"tec"
    },
    {   id: 7,
        nombre:"zapatilla Nike",
        precio:300000,
        stock: 1,
        categoria:"calzado"
    },
]


export const getProducts = () =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items)            
        }, 20);
    })
}

export const getProductById = (id) =>{
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(items.find(e => e.id === id*1))            
        }, 50);
    })
}