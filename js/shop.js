// Si tiene tiempo, puede mover esta variable "productos" a un archivo json y cargar los datos en este js. Se verá más profesional.
let products = [{
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
];
// Array with products (objects) added directly with push(). Products in this array are repeated.
//Array con productos (objetos) añadidos directamente con push(). Los productos de esta Array se repiten.
let cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
/*  Versión mejorada de cartList. El carrito es una matriz de productos (objetos), pero cada uno tiene un campo de cantidad 
para definir su cantidad, por lo que estos productos no se repiten. */

let cart = [];

let total = 0;

// Exercise 1

// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cartList array
// 1. Vaya a la matriz de productos para obtener el artículo para agregar al carrito
// 2. Agregue el producto encontrado a la matriz cartList

function buy(id) {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === id) {
            cartList.push(products[i]);
        }
    }
    console.log(cartList);
};

// Exercise 2
//En este caso, deberá rellenar la función cleanCart() , que debe reinicializar la variable cartList.
function cleanCart() {

    cartList = [];

    total = 0;

    console.log(cartList);
};

// Exercise 3
// Calculate total price of the cart using the "cartList" array
// Calcula el precio total del carrito usando la matriz "cartList"

function calculateTotal() {
    for (let i = 0; i < cartList.length; i++) {
        total = cartList[i].price + total
    }
    console.log(total);
};

// Exercise 4
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
/*  Usando la matriz "cartlist" que contiene todos los artículos en el carrito de compras,
 generar la matriz "carrito" que no contiene elementos repetidos, sino que cada elemento de esta matriz "carrito" 
muestra la cantidad de producto. */

function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        //buscar si existe el elemento en cart
        const foundIndex = cart.findIndex((cartItem) => {
            return cartList[i].name === cartItem.name
        });
        if (foundIndex === -1) {
            //object.assign sirve para modificar propiedades en el array
            const item = Object.assign({}, cartList[i], {
                quantity: 1
            });
            cart.push(item)
        } else {
            cart[foundIndex].quantity++;
        }
    }
    console.log(cart);
    console.log(cartList);
};

/* cartList.forEach(cartListItem => {
    const foundIndex = cart.findIndex(cartItem => cartListItem.name === cartItem.name);
    if (foundIndex === -1) {
        cart.push({
            ...cartListItem,
            quantity: 1
        })
    } else {
        cart.push({
            ...cartListItem,
            quantity: quantity + 1
        })
    }
}); */

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    // Aplicar promociones a cada artículo en la matriz "carrito"
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    // Refactoriza el código anterior para simplificarlo
    // 1. Vaya a la matriz de productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado a la matriz del carrito o actualice su cantidad en caso de que se haya agregado anteriormente.
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array

    // 1. Vaya a la matriz de productos para obtener el artículo para agregar al carrito
    // 2. Agregue el producto encontrado a la matriz cartList
}

// Exercise 9
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom


    // Llene el modal del carrito de compras manipulando el dom del carrito de compras
}