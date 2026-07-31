let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart()
{
    localStorage.setItem("cart", JSON.stringify(cart));
}

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

function addToCart(productId)
{
    const existingItem = cart.find(item => item.id === productId);

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

function removeFromCart(productId)
{
    cart = cart.filter(item => item.id !== productId);

    saveCart();
    updateCartCount();
}

updateCartCount();