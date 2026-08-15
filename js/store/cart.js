/* ==========================================
   CART
========================================== */

let cart =
    JSON.parse(localStorage.getItem("cart")) || [];


/* ==========================================
   SAVE CART
========================================== */

function saveCart()
{
    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}


/* ==========================================
   GET CART
========================================== */

function getCart()
{
    return cart;
}


/* ==========================================
   UPDATE CART COUNT
========================================== */

function updateCartCount()
{
    const badge =
        document.getElementById("cartCount");

    if(!badge) return;

    const total =
        cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

    badge.textContent = total;
}


/* ==========================================
   ADD PRODUCT
========================================== */

function addToCart(productId)
{
    const product =
        PRODUCTS.find(
            product => product.id === productId
        );

    if(!product) return;


    const item =
        cart.find(
            item => item.id === productId
        );


    /*
        PRODUCT ALREADY IN CART
    */

    if(item)
    {
        if(item.quantity >= product.stock)
        {
            showModal(
                "Stock Limit Reached",
                `Only ${product.stock} ${product.unit}(s) are currently available.`,
                {
                    type: "warning",
                    confirmText: "Okay",
                    cancelText: "Close"
                }
            );

            return;
        }

        item.quantity++;
    }


    /*
        NEW PRODUCT
    */

    else
    {
        if(product.stock <= 0)
        {
            showModal(
                "Out of Stock",
                "This product is currently out of stock and cannot be added to your cart.",
                {
                    type: "warning",
                    confirmText: "Okay",
                    cancelText: "Close"
                }
            );

            return;
        }

        cart.push({
            id: productId,
            quantity: 1
        });
    }


    saveCart();

    updateCartCount();
}


/* ==========================================
   REMOVE PRODUCT
========================================== */

function removeFromCart(productId)
{
    cart =
        cart.filter(
            item => item.id !== productId
        );

    saveCart();

    updateCartCount();
}


/* ==========================================
   INCREASE QUANTITY
========================================== */

function increaseQuantity(productId)
{
    const item =
        cart.find(
            item => item.id === productId
        );

    if(!item) return;


    const product =
        PRODUCTS.find(
            product => product.id === productId
        );

    if(!product) return;


    if(item.quantity >= product.stock)
    {
        showModal(
            "Stock Limit Reached",
            `Only ${product.stock} ${product.unit}(s) are currently available.`,
            {
                type: "warning",
                confirmText: "Okay",
                cancelText: "Close"
            }
        );

        return;
    }


    item.quantity++;

    saveCart();

    updateCartCount();
}


/* ==========================================
   DECREASE QUANTITY
========================================== */

function decreaseQuantity(productId)
{
    const item =
        cart.find(
            item => item.id === productId
        );

    if(!item) return;


    if(item.quantity > 1)
    {
        item.quantity--;
    }
    else
    {
        removeFromCart(productId);

        return;
    }


    saveCart();

    updateCartCount();
}


/* ==========================================
   SET QUANTITY
========================================== */

function setQuantity(productId, quantity)
{
    const item =
        cart.find(
            item => item.id === productId
        );

    if(!item) return;


    const product =
        PRODUCTS.find(
            product => product.id === productId
        );

    if(!product) return;


    /*
        INVALID / ZERO
    */

    if(
        isNaN(quantity) ||
        quantity <= 0
    )
    {
        removeFromCart(productId);

        return;
    }


    /*
        EXCEEDS STOCK
    */

    if(quantity > product.stock)
    {
        alert(
            `Only ${product.stock} ${product.unit}(s) available in stock.`
        );

        item.quantity = product.stock;
    }
    else
    {
        item.quantity = quantity;
    }


    saveCart();

    updateCartCount();
}


/* ==========================================
   CLEAR CART
========================================== */

function clearCart()
{
    cart = [];

    saveCart();

    updateCartCount();
}


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    updateCartCount
);