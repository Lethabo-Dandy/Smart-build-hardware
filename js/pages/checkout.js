/* ==========================================
   CHECKOUT
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const checkoutItems =
    document.getElementById("checkoutItems");

const checkoutSubtotal =
    document.getElementById("checkoutSubtotal");

const checkoutDelivery =
    document.getElementById("checkoutDelivery");

const checkoutTotal =
    document.getElementById("checkoutTotal");

const deliverySection =
    document.getElementById("deliverySection");

const placeOrderBtn =
    document.getElementById("placeOrderBtn");


/* ==========================================
   DISPLAY CHECKOUT ITEMS
========================================== */

function displayCheckoutItems()
{
    if(!checkoutItems) return;

    const cartItems = getCart();

    checkoutItems.innerHTML = "";

    if(cartItems.length === 0)
    {
        checkoutItems.innerHTML = `
            <div class="empty-checkout">
                <i class="bi bi-cart-x"></i>

                <p>
                    Your cart is empty.
                </p>

                <a href="pages/product.html">
                    Continue Shopping
                </a>
            </div>
        `;

        updateCheckoutTotals();

        return;
    }


    cartItems.forEach(item =>
    {
        const product =
            getProduct(item.id);

        if(!product) return;


        const itemTotal =
            product.price * item.quantity;


        checkoutItems.innerHTML += `
            <div class="checkout-item">

                <div class="checkout-item-info">

                    <strong>
                        ${product.name}
                    </strong>

                    <span>
                        ${item.quantity} ×
                        R${product.price.toFixed(2)}
                    </span>

                </div>

                <strong>
                    R${itemTotal.toFixed(2)}
                </strong>

            </div>
        `;
    });


    updateCheckoutTotals();
}


/* ==========================================
   CALCULATE SUBTOTAL
========================================== */
function calculateCheckoutSubtotal()
{
    const cartItems = getCart();

    return cartItems.reduce(
        (total, item) =>
        {
            const product =
                getProduct(item.id);

            if(!product) return total;

            return total +
                (product.price * item.quantity);
        },
        0
    );
}

/* ==========================================
   UPDATE TOTALS
========================================== */
function updateCheckoutTotals()
{
    const subtotal =
        calculateCheckoutSubtotal();


    const selectedMethod =
        document.querySelector(
            'input[name="orderMethod"]:checked'
        );


    const method =
        selectedMethod
            ? selectedMethod.value
            : "delivery";

    /*
        For now delivery is calculated
        later.

        Collection = R0
        Delivery = calculated later
    */

    const delivery =
        method === "collection"
            ? 0
            : 0;


    const total =
        subtotal + delivery;

    if(checkoutSubtotal)
    {
        checkoutSubtotal.textContent =
            `R${subtotal.toFixed(2)}`;
    }

    if(checkoutDelivery)
    {
        checkoutDelivery.textContent =
            method === "collection"
                ? "FREE"
                : "Calculated at checkout";
    }

    if(checkoutTotal)
    {
        checkoutTotal.textContent =
            `R${total.toFixed(2)}`;
    }
}

/* ==========================================
   DELIVERY / COLLECTION
========================================== */
function handleOrderMethodChange()
{
    const selectedMethod =
        document.querySelector(
            'input[name="orderMethod"]:checked'
        );


    if(!selectedMethod) return;


    if(selectedMethod.value === "delivery")
    {
        deliverySection.style.display =
            "block";
    }
    else
    {
        deliverySection.style.display =
            "none";
    }

    updateCheckoutTotals();
}

document
    .querySelectorAll(
        'input[name="orderMethod"]'
    )
    .forEach(radio =>
    {
        radio.addEventListener(
            "change",
            handleOrderMethodChange
        );
    });

/* ==========================================
   GENERATE ORDER NUMBER
========================================== */

function generateOrderNumber()
{
    const today =
        new Date();


    const year =
        today.getFullYear();


    const month =
        String(
            today.getMonth() + 1
        ).padStart(2, "0");


    const day =
        String(
            today.getDate()
        ).padStart(2, "0");


    const dateKey =
        `${year}${month}${day}`;


    const counterKey =
        `smartBuildOrderCounter_${dateKey}`;


    let counter =
        parseInt(
            localStorage.getItem(
                counterKey
            )
        ) || 0;


    counter++;


    localStorage.setItem(
        counterKey,
        counter
    );


    const sequence =
        String(counter)
            .padStart(4, "0");


    return `SB-${dateKey}-${sequence}`;
}    

/* ==========================================
   CREATE ORDER
========================================== */

function createOrder()
{
    const selectedMethod =
        document.querySelector(
            'input[name="orderMethod"]:checked'
        );


    if(!selectedMethod)
    {
        return null;
    }


    const orderMethod =
        selectedMethod.value;


    const order =
    {
        orderNumber:
            generateOrderNumber(),

        createdAt:
            new Date().toISOString(),

        customer:
            getCustomerDetails(),

        items:
            createOrderItems(),

        delivery:
            getDeliveryDetails(
                orderMethod
            ),

        totals:
            getOrderTotals(
                orderMethod
            ),

        status:
            "pending"
    };


    return order;
}

 /* ==========================================
   CREATE ORDER ITEMS
========================================== */
function createOrderItems()
{
    const cartItems =
        getCart();

    return cartItems
        .map(item =>
        {
            const product =
                getProduct(item.id);

            if(!product)
            {
                return null;
            }


            return {
                id: product.id,

                name: product.name,

                quantity: item.quantity,

                unitPrice: product.price,

                total:
                    product.price *
                    item.quantity
            };
        })
        .filter(Boolean);
}

/* ==========================================
   GET CUSTOMER DETAILS
========================================== */
function getCustomerDetails()
{
    return {
        fullName:
            document.getElementById(
                "fullName"
            )?.value.trim() || "",

        email:
            document.getElementById(
                "email"
            )?.value.trim() || "",

        phone:
            document.getElementById(
                "phone"
            )?.value.trim() || ""
    };
}

/* ==========================================
   GET DELIVERY DETAILS
========================================== */

function getDeliveryDetails(
    orderMethod
)
{
    const location =
        getDeliveryLocation();


    return {
        method: orderMethod,

        streetAddress:
            document.getElementById(
                "streetAddress"
            )?.value.trim() || "",

        city:
            document.getElementById(
                "city"
            )?.value.trim() || "",

        postalCode:
            document.getElementById(
                "postalCode"
            )?.value.trim() || "",

        instructions:
            document.getElementById(
                "deliveryInstructions"
            )?.value.trim() || "",

        coordinates:
            orderMethod === "delivery"
                && location
                ? {
                    latitude:
                        location.latitude,

                    longitude:
                        location.longitude
                }
                : null
    };
}

/* ==========================================
   GET ORDER TOTALS
========================================== */

function getOrderTotals(
    orderMethod
)
{
    const subtotal =
        calculateCheckoutSubtotal();


    const delivery =
        orderMethod === "collection"
            ? 0
            : 0;


    return {
        subtotal: subtotal,

        delivery: delivery,

        total:
            subtotal + delivery
    };
}

/* ==========================================
   PLACE ORDER
========================================== */

function handlePlaceOrder()
{
    const selectedMethod =
        document.querySelector(
            'input[name="orderMethod"]:checked'
        );


    /* ==========================================
       CHECK ORDER METHOD
    ========================================== */

    if(!selectedMethod)
    {
        showModal(
            "Select Order Method",
            "Please select either Delivery or Collection before continuing.",
            {
                type: "warning",
                confirmText: "Okay"
            }
        );

        return;
    }

    /* ==========================================
    CHECK CUSTOMER DETAILS
    ========================================== */

    const fullName =
        document.getElementById(
            "fullName"
        )?.value.trim() || "";


    const phone =
        document.getElementById(
            "phone"
        )?.value.trim() || "";


    if(!fullName || !phone)
    {
        showModal(
            "Missing Customer Details",
            "Please enter your full name and cellphone number before placing your order.",
            {
                type: "warning",
                confirmText: "Okay"
            }
        );

        return;
    }
    
    /* ==========================================
       DELIVERY LOCATION VALIDATION
    ========================================== */

    if(
        selectedMethod.value === "delivery"
    )
    {
        if(!isDeliveryLocationConfirmed())
        {
            showModal(
                "Confirm Delivery Location",
                "Please select your delivery location on the map and confirm that the map pin is correctly positioned before placing your order.",
                {
                    type: "warning",
                    confirmText: "Okay"
                }
            );

            return;
        }
    }


    /* ==========================================
       EMPTY CART VALIDATION
    ========================================== */

    const cartItems =
        getCart();


    if(cartItems.length === 0)
    {
        showModal(
            "Cart Is Empty",
            "Your cart is empty. Please add products before placing your order.",
            {
                type: "warning",
                confirmText: "Okay"
            }
        );

        return;
    }


    /* ==========================================
       CREATE ORDER
    ========================================== */

    const order =
        createOrder();


    if(!order)
    {
        showModal(
            "Order Error",
            "We could not create your order. Please try again.",
            {
                type: "warning",
                confirmText: "Okay"
            }
        );

        return;
    }


    /* ==========================================
       SAVE ORDER
    ========================================== */

    localStorage.setItem(
        "currentOrder",
        JSON.stringify(order)
    );

    /* ==========================================
    CLEAR CART AFTER ORDER
    ========================================== */

    clearCart();

    /* ==========================================
    GO TO ORDER CONFIRMATION
    ========================================== */

    window.location.href =
        "pages/order-confirmation.html";

    /* ==========================================
       DEBUG ORDER
    ========================================== */

    console.log(
        "ORDER CREATED:",
        order
    );
}


/* ==========================================
   PLACE ORDER BUTTON
========================================== */

if(placeOrderBtn)
{
    placeOrderBtn.addEventListener(
        "click",
        handlePlaceOrder
    );
}


/* ==========================================
   INITIALIZE CHECKOUT
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        displayCheckoutItems();

        handleOrderMethodChange();
    }
);