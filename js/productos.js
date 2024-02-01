/* -------------------------------------------------------------------------- */
/*                           Inventario de productos                          */
/* -------------------------------------------------------------------------- */

const listaProductos = [
    {
        id: 1,
        imagen: "../img/Ghost.png",
        nombre: "Fantasma",
        descipcion: "Fantasma color azul con ojos brillantes",
        precio: 159.90,
        valoracion: 3,
        favorito: true,
        destacado: false,
        descuento: 10,
        categoria: "Tecnología",
        stock: 10,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Nuevo"
    },
    {
        id: 2,
        imagen: "../img/tela.jpg",
        nombre: "Tela Azul",
        descipcion: "Este mensaje solo diferencia el producto",
        precio: 29.90,
        valoracion: 3.5,
        favorito: false,
        destacado: false,
        descuento: 10,
        categoria: "Belleza",
        stock: 0,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Usado"
    },
    {
        id: 3,
        imagen: "../img/lentes.jpg",
        nombre: "Lentes de sol",
        descipcion: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        precio: 79.90,
        valoracion: 1,
        favorito: true,
        destacado: true,
        descuento: 0,
        categoria: "Salud",
        stock: 25,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Nuevo"
    },
    {
        id: 4,
        imagen: "../img/Personaje.webp",
        nombre: "Personaje",
        descipcion: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
        precio: 259.90,
        valoracion: 5,
        favorito: false,
        destacado: true,
        descuento: 0,
        categoria: "Hogar",
        stock: 15,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Usado"
    },
    {
        id: 5,
        imagen: "../img/anillo.webp",
        nombre: "Anillo",
        descipcion: "Anillo color dorado para tus gustos",
        precio: 599.90,
        valoracion: 3,
        favorito: true,
        destacado: false,
        descuento: 10,
        categoria: "Tecnología",
        stock: 10,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Nuevo"
    },
    {
        id: 6,
        imagen: "../img/franela.jpeg",
        nombre: "Franela",
        descipcion: "Este mensaje solo diferencia el producto 2",
        precio: 89.90,
        valoracion: 3.5,
        favorito: false,
        destacado: false,
        descuento: 10,
        categoria: "Belleza",
        stock: 0,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Usado"
    },
    {
        id: 7,
        imagen: "../img/flotador.webp",
        nombre: "Flotador",
        descipcion: "Lorem Lorem Lorem Lorem Lorem Lorem",
        precio: 79.90,
        valoracion: 1,
        favorito: true,
        destacado: true,
        descuento: 0,
        categoria: "Salud",
        stock: 25,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Nuevo"
    },
    {
        id: 8,
        imagen: "../img/piscina.jpeg",
        nombre: "Piscina",
        descipcion: "Lorem Lorem Lorem Lorem Lorem Lorem",
        precio: 259.90,
        valoracion: 5,
        favorito: false,
        destacado: true,
        descuento: 0,
        categoria: "Hogar",
        stock: 15,
        cantidadAgregarACarrito: 1,
        cantidadEnCarrito: 0,
        estado: "Usado"
    }
]

localStorage.setItem('inventario', JSON.stringify(listaProductos));

//Categorías
/*  Tecnología
    Hogar
    Salud
    Belleza */