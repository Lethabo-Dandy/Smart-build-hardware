/* ==========================================
   CART PAGE
========================================== */

const emptyCart =
    document.getElementById("emptyCart");

const cartContent =
    document.getElementById("cartContent");

const cartItems =
    document.getElementById("cartItems");

const cartSubtotal =
    document.getElementById("cartSubtotal");

const cartDelivery =
    document.getElementById("cartDelivery");

const cartTotal =
    document.getElementById("cartTotal");


/* ==========================================
   GET PRODUCT IMAGE
========================================== */

function getCartProductImage(product)
{
    let image =
        product.images || product.image;


    if(Array.isArray(image))
    {
        image = image[0];
    }


    if(!image)
    {
        return "";
    }


    return image;
}


/* ==========================================
   DISPLAY CART
========================================== */

function displayCart()
{
    if(!cartItems) return;


    const currentCart =
        getCart();


    /*
        EMPTY CART
    */

    if(currentCart.length === 0)
    {
        if(emptyCart)
        {
            emptyCart.classList.remove("hidden");
        }


        if(cartContent)
        {
            cartContent.classList.remove("active");
        }


        cartItems.innerHTML = "";

        updateCartSummary(0);

        return;
    }


    /*
        CART HAS PRODUCTS
    */

    if(emptyCart)
    {
        emptyCart.classList.add("hidden");
    }


    if(cartContent)
    {
        cartContent.classList.add("active");
    }


    cartItems.innerHTML =
        currentCart
            .map(item =>
                createCartItem(item)
            )
            .join("");


    updateCartSummary();

    attachCartPageEvents();
}


/* ==========================================
   CREATE CART ITEM
========================================== */

function createCartItem(item)
{
    const product =
        PRODUCTS.find(
            product => product.id === item.id
        );


    if(!product)
    {
        return "";
    }


    const image =
        getCartProductImage(product);


    const itemTotal =
        product.price * item.quantity;


    return `
        <div
            class="cart-item"
            data-id="${product.id}">

            <div class="cart-item-image">

                <img
                    src="${image}"
                    alt="${product.name}">

            </div>


            <div class="cart-item-info">

                <h3 class="cart-item-name">
                    ${product.name}
                </h3>

                <p class="cart-item-price">
                    R${product.price.toFixed(2)}
                    / ${product.unit}
                </p>


                <button
                    type="button"
                    class="remove-cart-item"
                    data-id="${product.id}">

                    <i class="bi bi-trash"></i>

                    Remove

                </button>

            </div>


            <div class="cart-item-controls">

                <div class="quantity-controls">

                    <button
                        type="button"
                        class="quantity-btn decrease-btn"
                        data-id="${product.id}">

                        −

                    </button>


                    <input
                        type="number"
                        class="quantity-input"
                        data-id="${product.id}"
                        value="${item.quantity}"
                        min="1"
                        max="${product.stock}"
                        aria-label="Quantity for ${product.name}">


                    <button
                        type="button"
                        class="quantity-btn increase-btn"
                        data-id="${product.id}">

                        +

                    </button>

                </div>


                <div class="cart-stock">

                    ${product.stock} available

                </div>


                <div class="cart-item-total">

                    R${itemTotal.toFixed(2)}

                </div>

            </div>

        </div>
    `;
}


/* ==========================================
   ATTACH CART PAGE EVENTS
========================================== */

function attachCartPageEvents()
{
    /*
        INCREASE
    */

    document
        .querySelectorAll(".increase-btn")
        .forEach(button =>
        {
            button.onclick = () =>
            {
                const id =
                    Number(button.dataset.id);

                increaseQuantity(id);

                displayCart();
            };
        });


    /*
        DECREASE
    */

    document
        .querySelectorAll(".decrease-btn")
        .forEach(button =>
        {
            button.onclick = () =>
            {
                const id =
                    Number(button.dataset.id);

                decreaseQuantity(id);

                displayCart();
            };
        });


    /*
        DIRECT QUANTITY INPUT
    */

    document
        .querySelectorAll(".quantity-input")
        .forEach(input =>
        {
            input.addEventListener(
                "change",
                () =>
                {
                    const id =
                        Number(input.dataset.id);

                    const quantity =
                        Number(input.value);

                    setQuantity(
                        id,
                        quantity
                    );

                    displayCart();
                }
            );


            /*
                ENTER KEY
            */

            input.addEventListener(
                "keydown",
                event =>
                {
                    if(event.key === "Enter")
                    {
                        input.blur();
                    }
                }
            );
        });


    /*
        REMOVE
    */

    document
        .querySelectorAll(".remove-cart-item")
        .forEach(button =>
        {
            button.onclick = () =>
            {
                const id =
                    Number(button.dataset.id);

                removeFromCart(id);

                displayCart();
            };
        });
}


/* ==========================================
   UPDATE SUMMARY
========================================== */

function updateCartSummary()
{
    const currentCart =
        getCart();


    let subtotal = 0;


    currentCart.forEach(item =>
    {
        const product =
            PRODUCTS.find(
                product => product.id === item.id
            );


        if(!product) return;


        subtotal +=
            product.price *
            item.quantity;
    });


    /*
        SUBTOTAL
    */

    if(cartSubtotal)
    {
        cartSubtotal.textContent =
            `R${subtotal.toFixed(2)}`;
    }


    /*
        DELIVERY
    */

    if(cartDelivery)
    {
        if(
            typeof STORE !== "undefined" &&
            subtotal >= STORE.freeDelivery
        )
        {
            cartDelivery.textContent =
                "FREE";
        }
        else
        {
            cartDelivery.textContent =
                "Calculated at checkout";
        }
    }


    /*
        TOTAL
    */

    if(cartTotal)
    {
        cartTotal.textContent =
            `R${subtotal.toFixed(2)}`;
    }
}


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    () =>
    {
        displayCart();

        updateCartCount();

        attachClearCartEvent();
    }
);

/* ==========================================
   CLEAR CART BUTTON
========================================== */

function attachClearCartEvent()
{
    const clearButton =
        document.getElementById("clearCartBtn");

    if(!clearButton) return;


    clearButton.onclick = () =>
    {
        if(getCart().length === 0)
        {
            return;
        }


        showModal(
            "Clear Cart?",
            "Are you sure you want to remove all products from your cart?",
            {
                type: "danger",
                confirmText: "Clear Cart",
                cancelText: "Keep Cart",

                onConfirm: () =>
                {
                    clearCart();

                    displayCart();
                }
            }
        );
    };
}

/* ==========================================
   CHECKOUT BUTTON
========================================== */

const checkoutBtn =
    document.getElementById("checkoutBtn");

if(checkoutBtn)
{
    checkoutBtn.addEventListener(
        "click",
        () =>
        {
            if(getCart().length === 0)
            {
                showModal(
                    "Cart is Empty",
                    "Please add at least one product to your cart before proceeding to checkout.",
                    {
                        type: "warning",
                        confirmText: "Okay",
                        cancelText: "Close"
                    }
                );

                return;
            }

            window.location.href =
                "../checkout.html";
        }
    );
}