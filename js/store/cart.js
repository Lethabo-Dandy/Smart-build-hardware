let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ===============================
   SAVE CART
=================================*/
function saveCart()
{
    localStorage.setItem("cart", JSON.stringify(cart));
}

/* ===============================
   UPDATE CART ICON
=================================*/
function updateCartCount()
{
    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    cartCount.textContent = totalItems;
}

/* ===============================
   ADD PRODUCT
=================================*/
function addToCart(productId)
{
    const existingItem =
        cart.find(item => item.id === productId);

    if (existingItem)
    {
        existingItem.quantity++;
    }
    else
    {
        cart.push({
            id: productId,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
}

/* ===============================
   REMOVE PRODUCT
=================================*/
function removeFromCart(productId)
{
    cart = cart.filter(item => item.id !== productId);

    saveCart();
    updateCartCount();
}

/* ===============================
   GET CART
=================================*/
function getCart()
{
    return cart;
}

/* ===============================
   CLEAR CART
=================================*/
function clearCart()
{
    cart = [];

    saveCart();
    updateCartCount();
}

/* ===============================
   INITIALIZE
=================================*/
updateCartCount();