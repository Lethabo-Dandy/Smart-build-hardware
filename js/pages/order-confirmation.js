/* ==========================================
   ORDER CONFIRMATION
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const confirmationContainer =
    document.getElementById(
        "confirmationContainer"
    );


/* ==========================================
   GET CURRENT ORDER
========================================== */

function getCurrentOrder()
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
            "Unable to read order:",
            error
        );

        return null;
    }
}


/* ==========================================
   FORMAT ORDER DATE
========================================== */

function formatOrderDate(
    date
)
{
    if(!date)
    {
        return "";
    }


    const orderDate =
        new Date(date);


    return orderDate.toLocaleString(
        "en-ZA",
        {
            dateStyle: "medium",
            timeStyle: "short"
        }
    );
}


/* ==========================================
   DISPLAY ORDER ITEMS
========================================== */

function displayOrderItems(
    items
)
{
    if(!items || items.length === 0)
    {
        return `
            <p class="no-order-items">
                No products found.
            </p>
        `;
    }


    return items
        .map(item =>
        {
            return `
                <div class="confirmation-item">

                    <div>

                        <strong>
                            ${item.name}
                        </strong>

                        <span>
                            ${item.quantity}
                            ×
                            R${item.unitPrice.toFixed(2)}
                        </span>

                    </div>


                    <strong>
                        R${item.total.toFixed(2)}
                    </strong>

                </div>
            `;
        })
        .join("");
}


/* ==========================================
   DISPLAY DELIVERY DETAILS
========================================== */

function displayDeliveryDetails(
    delivery
)
{
    if(!delivery)
    {
        return "";
    }


    if(
        delivery.method ===
        "collection"
    )
    {
        return `
            <div class="detail-card">

                <div class="detail-icon">

                    <i class="bi bi-shop"></i>

                </div>

                <div>

                    <span>
                        Order Method
                    </span>

                    <strong>
                        Collection
                    </strong>

                </div>

            </div>
        `;
    }


    const coordinates =
        delivery.coordinates;


    return `
        <div class="delivery-details">

            <div class="detail-card">

                <div class="detail-icon">

                    <i class="bi bi-truck"></i>

                </div>

                <div>

                    <span>
                        Order Method
                    </span>

                    <strong>
                        Delivery
                    </strong>

                </div>

            </div>


            <div class="detail-card">

                <div class="detail-icon">

                    <i class="bi bi-geo-alt"></i>

                </div>

                <div>

                    <span>
                        Delivery Address
                    </span>

                    <strong>
                        ${delivery.streetAddress || "No street address provided"}
                    </strong>

                    <small>
                        ${delivery.city || ""}
                        ${delivery.postalCode || ""}
                    </small>

                </div>

            </div>


            ${
                coordinates
                    ? `
                        <div class="coordinates">

                            <i class="bi bi-pin-map"></i>

                            <div>

                                <strong>
                                    Delivery Coordinates
                                </strong>

                                <span>
                                    ${Number(
                                        coordinates.latitude
                                    ).toFixed(6)},
                                    ${Number(
                                        coordinates.longitude
                                    ).toFixed(6)}
                                </span>

                            </div>

                        </div>
                    `
                    : ""
            }


            ${
                delivery.instructions
                    ? `
                        <div class="delivery-instructions">

                            <strong>
                                <i class="bi bi-info-circle"></i>
                                Delivery Instructions
                            </strong>

                            <p>
                                ${delivery.instructions}
                            </p>

                        </div>
                    `
                    : ""
            }

        </div>
    `;
}


/* ==========================================
   DISPLAY ORDER
========================================== */

function displayOrder()
{
    if(!confirmationContainer)
    {
        return;
    }


    const order =
        getCurrentOrder();


    if(!order)
    {
        confirmationContainer.innerHTML = `

            <div class="no-order">

                <i class="bi bi-receipt"></i>

                <h1>
                    No Order Found
                </h1>

                <p>
                    We couldn't find an order to display.
                </p>

                <a
                    href="product.html"
                    class="confirmation-btn">

                    Continue Shopping

                </a>

            </div>

        `;

        return;
    }


    const customer =
        order.customer || {};


    const totals =
        order.totals || {};


    confirmationContainer.innerHTML = `

        <div class="confirmation-success">

            <div class="success-icon">

                <i class="bi bi-check-lg"></i>

            </div>


            <h1>
                Order Confirmed!
            </h1>


            <p>
                Thank you,
                <strong>
                    ${customer.fullName || "Customer"}
                </strong>.
                Your order has been received
                and is being processed.
            </p>


            <div class="order-number">

                <span>
                    Order Number
                </span>

                <strong>
                    ${order.orderNumber}
                </strong>

            </div>


            <small class="order-date">

                ${formatOrderDate(
                    order.createdAt
                )}

            </small>

        </div>



        <div class="confirmation-section">

            <h2>
                <i class="bi bi-bag-check"></i>
                Order Summary
            </h2>


            <div class="confirmation-items">

                ${displayOrderItems(
                    order.items
                )}

            </div>


            <div class="summary-line">

                <span>
                    Subtotal
                </span>

                <strong>
                    R${Number(
                        totals.subtotal || 0
                    ).toFixed(2)}
                </strong>

            </div>


            <div class="summary-line">

                <span>
                    Delivery
                </span>

                <strong>
                    ${
                        Number(
                            totals.delivery || 0
                        ) === 0
                            ? "FREE"
                            : `R${Number(
                                totals.delivery
                            ).toFixed(2)}`
                    }
                </strong>

            </div>


            <div class="summary-total">

                <span>
                    Total
                </span>

                <strong>
                    R${Number(
                        totals.total || 0
                    ).toFixed(2)}
                </strong>

            </div>

        </div>



        <div class="confirmation-section">

            <h2>
                <i class="bi bi-person"></i>
                Customer Details
            </h2>


            <div class="customer-details">

                <div>
                    <span>
                        Name
                    </span>

                    <strong>
                        ${customer.fullName || "-"}
                    </strong>
                </div>


                <div>
                    <span>
                        Phone
                    </span>

                    <strong>
                        ${customer.phone || "-"}
                    </strong>
                </div>


                ${
                    customer.email
                        ? `
                            <div>

                                <span>
                                    Email
                                </span>

                                <strong>
                                    ${customer.email}
                                </strong>

                            </div>
                        `
                        : ""
                }

            </div>

        </div>



        <div class="confirmation-section">

            <h2>
                <i class="bi bi-geo-alt"></i>
                Delivery Information
            </h2>


            ${displayDeliveryDetails(
                order.delivery
            )}

        </div>



        <div class="confirmation-actions">

            <a
                href="../index.html"
                class="confirmation-btn secondary">

                <i class="bi bi-house"></i>

                Back to Home

            </a>


            <a
                href="product.html"
                class="confirmation-btn primary">

                <i class="bi bi-bag"></i>

                Continue Shopping

            </a>
        </div>
    `;
}

/* ==========================================
   INITIALIZE
========================================== */
document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        displayOrder();

        updateCartCount();
    }
);