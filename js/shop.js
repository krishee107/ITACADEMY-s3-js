// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
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
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
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
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

/*
// Exercise 1
function buy(id) {
    let item = null;
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id){
            item = products[i];
        }
    }
    // 2. Add found product to the cartList array
    cartList.push(item);
    console.log(cartList)
}
*/
// Exercise 2
function cleanCart() {
    cartList = []
    console.log(cartList)
}

// Exercise 3
function calculateTotal() {
    let total = 0;
    // Calculate total price of the cart using the "cartList" array
    for (let i = 0; i < cartList.length; i++) {
        total += cartList[i].price;
    }

    console.log(total)
    return total;
}

/*
// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    for (let i = 0; i < cartList.length; i++) {
        //Buscamos si hay repetidos por cada objeto del otro array
        if(cart.filter(p => p.id == cartList[i].id).length > 0 ){
            //Buscamos el objeto y lo actualizamos
            let updateItem = cart.findIndex((p => p.id == cartList[i].id));
            cart[updateItem].quantity += 1;
            cart[updateItem].subtotal += cartList[i].price;
            cart[updateItem].subtotalWithDiscount += cartList[i].price;
        }
        //Si no existe, lo creamos
        else{
            cart.push({
                id: cartList[i].id,
                name: cartList[i].name,
                price: cartList[i].price,
                type: cartList[i].type,
                quantity: 1,
                subtotal: cartList[i].price,
                subtotalWithDiscount: cartList[i].price,
            });
        }
    }

    console.log(cart)
}
*/
// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    //3 o + de aceite = precio -10€
    //Buscamos si hay aceite...
    if(cart.filter(p => p.id == 1).length > 0 ){
        //Hay aceite, buscamos el item
        let promoItem = cart.findIndex((p => p.id == 1));
        //Hay + de 3...
            if(cart[promoItem].quantity >= 3 && cart[promoItem].discount == false){
                //Descontamos el dinero
                cart[promoItem].subtotalWithDiscount -= 10;
                cart[promoItem].discount = true;
            }
        }

    //Instant cupcake mixture 10 o + =  precio - 2/3 
    //Buscamos el mix de cupcake...
    if(cart.filter(p => p.id == 3).length > 0 ){
        //Hay aceite, buscamos el item
        let promoItem = cart.findIndex((p => p.id == 3));
        //Hay + de 3...
            if(cart[promoItem].quantity >= 10 && cart[promoItem].discount == false){
                //Descontamos el dinero
                cart[promoItem].subtotalWithDiscount -= cart[promoItem].subtotalWithDiscount * 2 / 3;
                cart[promoItem].discount = true;
            }
        }
}

// Exercise 6
function printCart() {
    let total =0 ;
    // Fill the shopping cart modal manipulating the shopping cart dom
    let table = document.getElementById("cart_list");
    table.innerHTML = " ";
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].subtotalWithDiscount;
        table.innerHTML += 
            "<tr>"+
            "<th>"+cart[i].name+"</th>"+
            "<td>"+cart[i].price+"</td>"+
            "<td>"+cart[i].quantity+"</td>"+
            "<td>"+cart[i].subtotalWithDiscount+"</td>"+
            "<td onclick='removeFromCart("+cart[i].id+"); printCart()'> <i class='fa-sharp fa-solid fa-minus'></i> </td>"+
            "</tr>"
    }

    document.getElementById("total_price").innerHTML = total;
}


// ** Nivell II **

// Exercise 7
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    let item = null;
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id){
            item = products[i];
        }
    }

    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    
    //Buscamos si hay repetidos
    if(cart.filter(p => p.id == item.id).length > 0 ){
        //Buscamos el objeto y lo actualizamos
        let updateItem = cart.findIndex((p => p.id == item.id));
        cart[updateItem].quantity += 1;
        cart[updateItem].subtotal += item.price;
        cart[updateItem].subtotalWithDiscount += item.price;
    }
    //Si no existe, lo creamos
    else{
        cart.push({
            id: item.id,
            name: item.name,
            price: item.price,
            type: item.type,
            quantity: 1,
            subtotal: item.price,
            subtotalWithDiscount: item.price,
            discount: false,
        });
    }

    
    applyPromotionsCart();
}

// Exercise 8
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < cart.length; i++) {
       if(cart[i].id == id && cart[i].quantity >= 2){
            //Actualizamos valores  
            cart[i].quantity -= 1;
            cart[i].subtotal = cart[i].price * cart[i].quantity;
            cart[i].subtotalWithDiscount = cart[i].price * cart[i].quantity;
            cart[i].discount = false;
       }
       else if(cart[i].id == id && cart[i].quantity <= 1){
        const item = cart.findIndex((p) => p.id === cart[i].id);

        if( item > -1) {
            cart.splice(item, 1);
        }
       }
        
    applyPromotionsCart();
    }
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}