/* ==========================================
   MY ORDERS
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const phoneNumber =
    document.getElementById(
        "phoneNumber"
    );


const orderNumber =
    document.getElementById(
        "orderNumber"
    );


const findOrderBtn =
    document.getElementById(
        "findOrderBtn"
    );


const orderMessage =
    document.getElementById(
        "orderMessage"
    );


const orderResult =
    document.getElementById(
        "orderResult"
    );


/* ==========================================
   GET SAVED ORDER
========================================== */

function getSavedOrder()
{
    const savedOrder =
        localStorage.getItem(
            "currentOrder"
        );


    if(!savedOrder)
    {
        return null;
    }


    try
    {
        return JSON.parse(
            savedOrder
        );
    }
    catch(error)
    {
        console.error(
            "Error reading saved order:",
            error
        );

        return null;
    }
}


/* ==========================================
   NORMALIZE PHONE NUMBER
========================================== */

function normalizePhoneNumber(
    number
)
{
    return String(number || "")
        .replace(/\s+/g, "")
        .replace(/-/g, "");
}


/* ==========================================
   FIND ORDER
========================================== */

function findOrder()
{
    const enteredPhone =
        normalizePhoneNumber(
            phoneNumber.value
        );


    const enteredOrderNumber =
        orderNumber.value
            .trim()
            .toUpperCase();


    orderMessage.textContent = "";

    orderResult.innerHTML = "";


    /* ==========================================
       VALIDATE PHONE NUMBER
    ========================================== */

    if(!enteredPhone)
    {
        orderMessage.textContent =
            "Please enter your phone number.";

        return;
    }


    /* ==========================================
       VALIDATE ORDER NUMBER
    ========================================== */

    if(!enteredOrderNumber)
    {
        orderMessage.textContent =
            "Please enter your order number.";

        return;
    }


    /* ==========================================
       GET ORDER
    ========================================== */

    const order =
        getSavedOrder();


    if(!order)
    {
        orderMessage.textContent =
            "No order could be found.";

        return;
    }


    /* ==========================================
       GET SAVED CUSTOMER DETAILS
    ========================================== */

    const savedPhone =
        normalizePhoneNumber(
            order.customer?.phone
        );


    const savedOrderNumber =
        String(
            order.orderNumber || ""
        )
        .trim()
        .toUpperCase();


    /* ==========================================
       CHECK ORDER DETAILS
    ========================================== */

    if(
        enteredPhone !== savedPhone ||
        enteredOrderNumber !== savedOrderNumber
    )
    {
        orderMessage.textContent =
            "We couldn't find an order matching those details.";

        return;
    }


    /* ==========================================
       DISPLAY ORDER
    ========================================== */

    displayOrder(
        order
    );
}


/* ==========================================
   DISPLAY ORDER
========================================== */

function displayOrder(
    order
)
{
    orderMessage.textContent = "";


    let itemsHTML = "";


    if(
        order.items &&
        order.items.length > 0
    )
    {
        order.items.forEach(item =>
        {
            const itemTotal =
                Number(item.price) *
                Number(item.quantity);


            itemsHTML += `

                <div class="order-item">

                    <div class="order-item-info">

                        <strong>
                            ${item.name}
                        </strong>

                        <span>
                            ${item.quantity}
                            ×
                            R${Number(
                                item.price
                            ).toFixed(2)}
                        </span>

                    </div>


                    <strong>
                        R${itemTotal.toFixed(2)}
                    </strong>

                </div>

            `;
        });
    }


    const total =
        Number(
            order.totals?.total || 0
        );


    orderResult.innerHTML = `

        <div class="order-card">

            <div class="order-card-header">

                <h2>
                    ${order.orderNumber}
                </h2>

                <span class="order-status">

                    ${formatOrderStatus(
                        order.status
                    )}

                </span>

            </div>


            <div class="order-items">

                ${itemsHTML}

            </div>


            <div class="order-total">

                <span>
                    Total
                </span>

                <span>
                    R${total.toFixed(2)}
                </span>

            </div>

        </div>

    `;
}


/* ==========================================
   FORMAT ORDER STATUS
========================================== */

function formatOrderStatus(
    status
)
{
    if(!status)
    {
        return "Pending";
    }


    return status
        .charAt(0)
        .toUpperCase() +
        status.slice(1);
}


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        if(!findOrderBtn)
        {
            console.error(
                "Find Order button was not found."
            );

            return;
        }


        findOrderBtn.addEventListener(
            "click",
            findOrder
        );
    }
);