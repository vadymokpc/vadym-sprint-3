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
// Calcula el precio total del carrito usando la matriz "cartList"

function calculateTotal() {
    for (let i = 0; i < cartList.length; i++) {
        total = cartList[i].price + total
    }
    console.log(total);
};

// Exercise 4

/*  Usando la matriz "cartList" que contiene todos los artículos en el carrito de compras,
 generar el array  "cart" que no contiene elementos repetidos, sino que cada elemento de esta matriz "cart" 
muestra la cantidad de producto. */

function generateCart() {
    /* El bucle esta escuchando Si el usuario añade 1 producto a cartList = [] para poner en marcha la funcion */
    for (let i = 0; i < cartList.length; i++) {
        /*  Buscar si existe el elemento en cart, findIndex() devuelve el índice del primer elemento de un array que cumpla con la función 
         de prueba proporcionada. En caso contrario iguala a -1 la const foundIndex. */
        const foundIndex = cart.findIndex((cartItem) => {
            return cartList[i].name === cartItem.name
        });
        /* Si findIndex no encontro coincidencia su valor pasa a ser -1 y ejecutara el bloque if */
        if (foundIndex === -1) {

            const item = Object.assign({}, cartList[i], {
                quantity: 1,
                subtotal: cartList[i].price,
            });
            cart.push(item) /* Empujamos este item al array cart */
        }
        /* De lo contrario */
        else {
            cart[foundIndex].quantity++;
            cart[foundIndex].subtotal += cartList[i].price;
        }
    }
    console.log(cart);
    /* console.log(cartList); */
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
// Aplicar promociones a cada artículo en el array "cart"

/* Si el usuario compra 3 o más botellas de aceite, el precio del producto desciende a 10 euros.
Cuando se compran 10 o más productos para la tarta, su precio se rebaja a 2/3. 

En este ejercicio debes completar la función applyPromotionsCart() , que recibe el array cart, modificando el campo subtotalWithDiscount 
en caso de que se aplique la promoción

Ayuda: dado que producto del cart tiene cantidad, ya puedes validar si tiene descuento:

En caso de que un producto tenga descuento, debe guardarse el precio total con descuento en el campo: subtotalWithDiscount.
Si no tiene que aplicarse descuento, no hace falta que guardes nada. */

function applyPromotionsCart() {
    for (let i = 0; i < cart.length; i++) {

        if (cart[i].name === 'cooking oil' && cart[i].quantity >= 3) {
            cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
        } else if (cart[i].type === 'grocery' && cart[i].quantity >= 10) {
            cart[i].subtotalWithDiscount = parseFloat((cart[i].subtotal * 2 / 3).toFixed(2));
        }
    }
    console.log(cart);
};
/* for (let i = 0; i < cart.length; i++) {

        if (cart.id[0] >= 3 && cart.name === 'cooking oil') {
            const itemPromocion = Object.assign({}, cart, {
                subtotalWithDiscount: 1
            });
            if (itemPromocion === 1) {
                let subtotal = total - 1.5
            }
            cart.push(subtotal)
        }
    }
}; */



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