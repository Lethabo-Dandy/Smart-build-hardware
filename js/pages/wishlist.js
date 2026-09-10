/* ==========================================
   WISHLIST PAGE
========================================== */


/* ==========================================
   ELEMENTS
========================================== */

const wishlistItems =
    document.getElementById(
        "wishlistItems"
    );


const emptyWishlist =
    document.getElementById(
        "emptyWishlist"
    );


/* ==========================================
   DISPLAY WISHLIST
========================================== */

function displayWishlist()
{
    if(!wishlistItems)
    {
        return;
    }


    const savedProducts =
        getWishlist();


    wishlistItems.innerHTML = "";


    /* ==========================================
       CHECK EMPTY WISHLIST
    ========================================== */

    if(
        savedProducts.length === 0
    )
    {
        wishlistItems.style.display =
            "none";


        if(emptyWishlist)
        {
            emptyWishlist.style.display =
                "flex";
        }


        return;
    }


    wishlistItems.style.display =
        "grid";


    if(emptyWishlist)
    {
        emptyWishlist.style.display =
            "none";
    }


    /* ==========================================
       DISPLAY SAVED PRODUCTS
    ========================================== */

    savedProducts.forEach(
        productId =>
        {
            const product =
                getProduct(productId);


            if(!product)
            {
                return;
            }


            wishlistItems.innerHTML +=
                createWishlistCard(
                    product
                );
        }
    );
}


/* ==========================================
   CREATE WISHLIST CARD
========================================== */

function createWishlistCard(
    product
)
{
    const image =
        Array.isArray(product.images)
            ? product.images[0]
            : (
                product.images ||
                product.image
            );


    const outOfStock =
        product.stock <= 0;


    return `

        <div
            class="wishlist-card"
            data-id="${product.id}">


            <!-- PRODUCT IMAGE -->

            <a
                href="product-details.html?id=${product.id}"
                class="wishlist-image">

                <img
                    src="${image}"
                    alt="${product.name}">

            </a>


            <!-- PRODUCT INFORMATION -->

            <div class="wishlist-info">

                <h3>
                    ${product.name}
                </h3>


                <p class="wishlist-price">

                    R${product.price.toFixed(2)}

                    <span>
                        / ${product.unit}
                    </span>

                </p>


                <!-- ACTIONS -->

                <div class="wishlist-actions">


                    <!-- ADD TO CART -->

                    <button
                        class="wishlist-cart-btn ${
                            outOfStock
                                ? "disabled"
                                : ""
                        }"
                        data-id="${product.id}"
                        ${
                            outOfStock
                                ? "disabled"
                                : ""
                        }>

                        <i
                            class="bi bi-cart4">
                        </i>

                        ${
                            outOfStock
                                ? "OUT OF STOCK"
                                : "ADD TO CART"
                        }

                    </button>


                    <!-- REMOVE -->

                    <button
                        class="wishlist-remove-btn"
                        data-id="${product.id}"
                        type="button">

                        <i
                            class="bi bi-trash3">
                        </i>

                        Remove

                    </button>


                </div>

            </div>

        </div>

    `;
}


/* ==========================================
   REMOVE FROM WISHLIST
========================================== */

function removeWishlistItem(
    productId
)
{
    removeFromWishlist(
        productId
    );


    displayWishlist();
}


/* ==========================================
   ADD WISHLIST ITEM TO CART
========================================== */

function addWishlistItemToCart(
    productId
)
{
    const product =
        getProduct(productId);


    if(!product)
    {
        return;
    }


    if(product.stock <= 0)
    {
        return;
    }


    addToCart(
        productId
    );


    /* ==========================================
       REMOVE AFTER ADDING
    ========================================== */

    removeFromWishlist(
        productId
    );


    displayWishlist();
}


/* ==========================================
   HANDLE WISHLIST ACTIONS
========================================== */

document.addEventListener(
    "click",
    function(event)
    {
        const removeButton =
            event.target.closest(
                ".wishlist-remove-btn"
            );


        if(removeButton)
        {
            const productId =
                Number(
                    removeButton.dataset.id
                );


            removeWishlistItem(
                productId
            );


            return;
        }


        const cartButton =
            event.target.closest(
                ".wishlist-cart-btn"
            );


        if(cartButton)
        {
            const productId =
                Number(
                    cartButton.dataset.id
                );


            addWishlistItemToCart(
                productId
            );
        }
    }
);


/* ==========================================
   INITIALIZE
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        displayWishlist();

        updateCartCount();
    }
);