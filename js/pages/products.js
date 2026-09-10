/* ==========================================
   PRODUCTS
========================================== */
const productsContainer =
    document.getElementById(
        "productsContainer"
    );

const noResults =
    document.getElementById(
        "noResults"
    );

const resultsCount =
    document.getElementById(
        "resultsCount"
    );

/* ==========================================
   DISPLAY PRODUCTS
========================================== */
function displayProducts(
    productList = PRODUCTS
)
{
    if(!productsContainer)
    {
        return;
    }

    /* ==========================================
       UPDATE RESULTS COUNT
    ========================================== */
    if(resultsCount)
    {
        resultsCount.textContent =
            `Showing ${productList.length} of ${PRODUCTS.length} products`;
    }

    /* ==========================================
       NO RESULTS
    ========================================== */
    if(productList.length === 0)
    {
        productsContainer.innerHTML = "";

        if(noResults)
        {
            noResults.style.display =
                "block";

            noResults.textContent =
                "No products found.";
        }

        return;
    }


    /* ==========================================
       HIDE NO RESULTS
    ========================================== */

    if(noResults)
    {
        noResults.style.display =
            "none";
    }


    /* ==========================================
       DISPLAY PRODUCT CARDS
    ========================================== */

    productsContainer.innerHTML =
        productList
            .map(
                product =>
                    createProductCard(product)
            )
            .join("");


    /* ==========================================
       ATTACH CART EVENTS
    ========================================== */

    attachCartEvents();


    /* ==========================================
       UPDATE WISHLIST STATES
    ========================================== */

    if(
        typeof updateAllWishlistButtons ===
        "function"
    )
    {
        updateAllWishlistButtons();
    }
}