/* ==========================================
   GLOBAL PRODUCT SEARCH
========================================== */


/* ==========================================
   SEARCH ELEMENTS
========================================== */

const globalSearchInput =
    document.getElementById(
        "searchInput"
    );

const globalSearchButton =
    document.getElementById(
        "searchBtn"
    );

const globalSuggestions =
    document.getElementById(
        "suggestions"
    );


/* ==========================================
   CHECK PRODUCTS PAGE
========================================== */

function isProductsPage()
{
    return window.location.pathname.includes(
        "product.html"
    );
}


/* ==========================================
   SEARCH PRODUCTS
========================================== */

function filterProducts(
    searchTerm
)
{
    const term =
        searchTerm
            .trim()
            .toLowerCase();


    /* ==========================================
       EMPTY SEARCH
    ========================================== */

    if(term === "")
    {
        displayProducts(
            PRODUCTS
        );

        return;
    }


    /* ==========================================
       FILTER PRODUCTS
    ========================================== */

    const results =
        PRODUCTS.filter(
            product =>
            {
                const name =
                    product.name
                        ?.toLowerCase() || "";

                const category =
                    product.category
                        ?.toLowerCase() || "";

                const subCategory =
                    product.subCategory
                        ?.toLowerCase() || "";

                const brand =
                    product.brand
                        ?.toLowerCase() || "";

                const description =
                    product.description
                        ?.toLowerCase() || "";

                const sku =
                    product.sku
                        ?.toLowerCase() || "";

                const barcode =
                    product.barcode
                        ?.toLowerCase() || "";

                return (
                    name.includes(term) ||
                    category.includes(term) ||
                    subCategory.includes(term) ||
                    brand.includes(term) ||
                    description.includes(term) ||
                    sku.includes(term) ||
                    barcode.includes(term)
                );
            }
        );


    /* ==========================================
       DISPLAY RESULTS
    ========================================== */

    displayProducts(
        results
    );
}


/* ==========================================
   SEARCH SUGGESTIONS
========================================== */

function showSearchSuggestions(
    searchTerm
)
{
    if(!globalSuggestions)
    {
        return;
    }

    const term =
        searchTerm
            .trim()
            .toLowerCase();


    /* ==========================================
       CLEAR SUGGESTIONS
    ========================================== */

    if(term === "")
    {
        globalSuggestions.innerHTML = "";

        globalSuggestions.style.display =
            "none";

        return;
    }


    /* ==========================================
       FIND MATCHES
    ========================================== */

    const matches =
        PRODUCTS.filter(
            product =>
            {
                const name =
                    product.name
                        ?.toLowerCase() || "";

                const category =
                    product.category
                        ?.toLowerCase() || "";

                const subCategory =
                    product.subCategory
                        ?.toLowerCase() || "";

                const brand =
                    product.brand
                        ?.toLowerCase() || "";

                return (
                    name.includes(term) ||
                    category.includes(term) ||
                    subCategory.includes(term) ||
                    brand.includes(term)
                );
            }
        )
        .slice(0, 6);


    /* ==========================================
       NO MATCHES
    ========================================== */

    if(matches.length === 0)
    {
        globalSuggestions.innerHTML =
            `
                <div class="no-suggestion">
                    No products found
                </div>
            `;

        globalSuggestions.style.display =
            "block";

        return;
    }


    /* ==========================================
       CREATE SUGGESTIONS
    ========================================== */

    globalSuggestions.innerHTML =
        matches
            .map(
                product =>
                {
                    const image =
                        Array.isArray(product.images)
                            ? product.images[0]
                            : (
                                product.images ||
                                product.image
                            );

                    return `
                        <div
                            class="search-suggestion"
                            data-id="${product.id}">

                            <img
                                src="${image}"
                                alt="${product.name}">

                            <div class="suggestion-info">

                                <span class="suggestion-name">
                                    ${product.name}
                                </span>

                                <span class="suggestion-category">
                                    ${product.category}
                                </span>

                            </div>

                        </div>
                    `;
                }
            )
            .join("");

    globalSuggestions.style.display =
        "block";
}


/* ==========================================
   HANDLE TYPING
========================================== */

if(globalSearchInput)
{
    globalSearchInput.addEventListener(
        "input",
        function()
        {
            const searchTerm =
                globalSearchInput.value;


            /* ==========================================
               PRODUCTS PAGE
            ========================================== */

            if(isProductsPage())
            {
                filterProducts(
                    searchTerm
                );
            }


            /* ==========================================
               SHOW SUGGESTIONS
            ========================================== */

            showSearchSuggestions(
                searchTerm
            );
        }
    );
}


/* ==========================================
   PERFORM GLOBAL SEARCH
========================================== */

function performGlobalSearch()
{
    if(!globalSearchInput)
    {
        return;
    }

    const searchTerm =
        globalSearchInput.value.trim();


    /* ==========================================
       EMPTY SEARCH
    ========================================== */

    if(searchTerm === "")
    {
        if(isProductsPage())
        {
            filterProducts("");
        }

        return;
    }


    /* ==========================================
       ALREADY ON PRODUCTS PAGE
    ========================================== */

    if(isProductsPage())
    {
        filterProducts(
            searchTerm
        );

        return;
    }


    /* ==========================================
       GO TO PRODUCTS PAGE
    ========================================== */

    const productPage =
        window.location.pathname.includes(
            "/pages/"
        )
            ? "product.html"
            : "pages/product.html";

    window.location.href =
        `${productPage}?search=${encodeURIComponent(searchTerm)}`;
}


/* ==========================================
   SEARCH BUTTON
========================================== */

if(globalSearchButton)
{
    globalSearchButton.addEventListener(
        "click",
        function()
        {
            performGlobalSearch();
        }
    );
}


/* ==========================================
   ENTER KEY
========================================== */

if(globalSearchInput)
{
    globalSearchInput.addEventListener(
        "keydown",
        function(event)
        {
            if(event.key === "Enter")
            {
                event.preventDefault();

                performGlobalSearch();
            }
        }
    );
}


/* ==========================================
   SUGGESTION CLICK
========================================== */

if(globalSuggestions)
{
    globalSuggestions.addEventListener(
        "click",
        function(event)
        {
            const suggestion =
                event.target.closest(
                    ".search-suggestion"
                );

            if(!suggestion)
            {
                return;
            }

            const productId =
                Number(
                    suggestion.dataset.id
                );

            const productPage =
                window.location.pathname.includes(
                    "/pages/"
                )
                    ? "product-details.html"
                    : "pages/product-details.html";

            window.location.href =
                `${productPage}?id=${productId}`;
        }
    );
}


/* ==========================================
   CLOSE SUGGESTIONS
========================================== */

document.addEventListener(
    "click",
    function(event)
    {
        if(
            !event.target.closest(
                ".search-box"
            )
        )
        {
            if(globalSuggestions)
            {
                globalSuggestions.style.display =
                    "none";
            }
        }
    }
);