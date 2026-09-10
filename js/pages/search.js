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
   PERFORM SEARCH
========================================== */

function performGlobalSearch()
{
    if(!globalSearchInput)
    {
        return;
    }

    const searchTerm =
        globalSearchInput.value.trim();

    if(searchTerm === "")
    {
        return;
    }

    const productPage =
        window.location.pathname.includes("/pages/")
            ? "product.html"
            : "pages/product.html";

    window.location.href =
        `${productPage}?search=${encodeURIComponent(searchTerm)}`;
}


/* ==========================================
   SEARCH SUGGESTIONS
========================================== */

function showSearchSuggestions(
    searchTerm
)
{
    if(
        !globalSuggestions ||
        !globalSearchInput
    )
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
       FIND MATCHING PRODUCTS
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
                `
                    <div
                        class="search-suggestion"
                        data-id="${product.id}">

                        <img
                            src="${
                                Array.isArray(product.images)
                                    ? product.images[0]
                                    : product.images
                            }"
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
                `
            )
            .join("");

    globalSuggestions.style.display =
        "block";
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
   SEARCH INPUT
========================================== */

if(globalSearchInput)
{
    globalSearchInput.addEventListener(
        "input",
        function()
        {
            showSearchSuggestions(
                globalSearchInput.value
            );
        }
    );
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
   ENTER KEY SEARCH
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