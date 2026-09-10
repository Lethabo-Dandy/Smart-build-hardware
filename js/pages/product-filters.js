/* ==========================================
   PRODUCT FILTERS
========================================== */


/* ==========================================
   FILTER ELEMENTS
========================================== */

const categoryFilter =
    document.getElementById(
        "categoryFilter"
    );

const subCategoryFilter =
    document.getElementById(
        "subCategoryFilter"
    );

const minPrice =
    document.getElementById(
        "minPrice"
    );

const maxPrice =
    document.getElementById(
        "maxPrice"
    );

const stockFilter =
    document.getElementById(
        "stockFilter"
    );

const sortFilter =
    document.getElementById(
        "sortFilter"
    );


/* ==========================================
   SEARCH ELEMENT
========================================== */

const productSearchInput =
    document.getElementById(
        "searchInput"
    );


/* ==========================================
   CREATE CATEGORY OPTIONS
========================================== */

function createCategoryOptions()
{
    if(!categoryFilter)
    {
        return;
    }

    const categories =
        [
            ...new Set(
                PRODUCTS.map(
                    product =>
                        product.category
                )
            )
        ]
        .filter(Boolean)
        .sort();


    categories.forEach(
        category =>
        {
            const option =
                document.createElement(
                    "option"
                );

            option.value =
                category;

            option.textContent =
                category;

            categoryFilter.appendChild(
                option
            );
        }
    );
}


/* ==========================================
   UPDATE SUB-CATEGORY OPTIONS
========================================== */

function updateSubCategoryOptions()
{
    if(!subCategoryFilter)
    {
        return;
    }

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    /* ==========================================
       GET AVAILABLE PRODUCTS
    ========================================== */

    let availableProducts =
        PRODUCTS;

    if(
        selectedCategory !==
        "all"
    )
    {
        availableProducts =
            PRODUCTS.filter(
                product =>
                    product.category ===
                    selectedCategory
            );
    }


    /* ==========================================
       GET SUB-CATEGORIES
    ========================================== */

    const subCategories =
        [
            ...new Set(
                availableProducts
                    .map(
                        product =>
                            product.subCategory
                    )
                    .filter(Boolean)
            )
        ]
        .sort();


    /* ==========================================
       RESET SUB-CATEGORY OPTIONS
    ========================================== */

    subCategoryFilter.innerHTML =
        `
            <option value="all">
                All Sub-categories
            </option>
        `;


    /* ==========================================
       ADD SUB-CATEGORY OPTIONS
    ========================================== */

    subCategories.forEach(
        subCategory =>
        {
            const option =
                document.createElement(
                    "option"
                );

            option.value =
                subCategory;

            option.textContent =
                subCategory;

            subCategoryFilter.appendChild(
                option
            );
        }
    );
}


/* ==========================================
   APPLY ALL FILTERS
========================================== */

function applyAllFilters()
{
    /* ==========================================
       GET SEARCH TERM
    ========================================== */

    const searchTerm =
        productSearchInput
            ? productSearchInput.value
                .trim()
                .toLowerCase()
            : "";


    /* ==========================================
       GET CATEGORY
    ========================================== */

    const selectedCategory =
        categoryFilter
            ? categoryFilter.value
            : "all";


    /* ==========================================
       GET SUB-CATEGORY
    ========================================== */

    const selectedSubCategory =
        subCategoryFilter
            ? subCategoryFilter.value
            : "all";


    /* ==========================================
       GET PRICE RANGE
    ========================================== */

    const minimumPrice =
        minPrice &&
        minPrice.value !== ""
            ? Number(
                minPrice.value
            )
            : null;

    const maximumPrice =
        maxPrice &&
        maxPrice.value !== ""
            ? Number(
                maxPrice.value
            )
            : null;


    /* ==========================================
       GET STOCK
    ========================================== */

    const selectedStock =
        stockFilter
            ? stockFilter.value
            : "all";


    /* ==========================================
       GET SORT
    ========================================== */

    const selectedSort =
        sortFilter
            ? sortFilter.value
            : "default";


    /* ==========================================
       FILTER PRODUCTS
    ========================================== */

    let filteredProducts =
        PRODUCTS.filter(
            product =>
            {
                /* ==========================================
                   SEARCH MATCH
                ========================================== */

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


                const searchMatch =
                    searchTerm === "" ||

                    name.includes(
                        searchTerm
                    ) ||

                    category.includes(
                        searchTerm
                    ) ||

                    subCategory.includes(
                        searchTerm
                    ) ||

                    brand.includes(
                        searchTerm
                    ) ||

                    description.includes(
                        searchTerm
                    ) ||

                    sku.includes(
                        searchTerm
                    ) ||

                    barcode.includes(
                        searchTerm
                    );


                /* ==========================================
                   CATEGORY MATCH
                ========================================== */

                const categoryMatch =
                    selectedCategory ===
                    "all" ||

                    product.category ===
                    selectedCategory;


                /* ==========================================
                   SUB-CATEGORY MATCH
                ========================================== */

                const subCategoryMatch =
                    selectedSubCategory ===
                    "all" ||

                    product.subCategory ===
                    selectedSubCategory;


                /* ==========================================
                   MINIMUM PRICE MATCH
                ========================================== */

                const minimumPriceMatch =
                    minimumPrice === null ||

                    product.price >=
                    minimumPrice;


                /* ==========================================
                   MAXIMUM PRICE MATCH
                ========================================== */

                const maximumPriceMatch =
                    maximumPrice === null ||

                    product.price <=
                    maximumPrice;


                /* ==========================================
                   STOCK MATCH
                ========================================== */

                const stockMatch =
                    selectedStock ===
                    "all" ||

                    (
                        selectedStock ===
                        "in-stock" &&

                        product.stock > 0
                    ) ||

                    (
                        selectedStock ===
                        "out-of-stock" &&

                        product.stock <= 0
                    );


                /* ==========================================
                   FINAL FILTER
                ========================================== */

                return (
                    searchMatch &&
                    categoryMatch &&
                    subCategoryMatch &&
                    minimumPriceMatch &&
                    maximumPriceMatch &&
                    stockMatch
                );
            }
        );


    /* ==========================================
       SORT PRODUCTS
    ========================================== */

    if(selectedSort === "price-low")
    {
        filteredProducts.sort(
            (a, b) =>
                a.price - b.price
        );
    }


    if(selectedSort === "price-high")
    {
        filteredProducts.sort(
            (a, b) =>
                b.price - a.price
        );
    }


    if(selectedSort === "name-a-z")
    {
        filteredProducts.sort(
            (a, b) =>
                a.name.localeCompare(
                    b.name
                )
        );
    }


    if(selectedSort === "name-z-a")
    {
        filteredProducts.sort(
            (a, b) =>
                b.name.localeCompare(
                    a.name
                )
        );
    }


    /* ==========================================
       DISPLAY FINAL RESULTS
    ========================================== */

    displayProducts(
        filteredProducts
    );
}


/* ==========================================
   CATEGORY CHANGE
========================================== */

if(categoryFilter)
{
    categoryFilter.addEventListener(
        "change",
        function()
        {
            updateSubCategoryOptions();

            if(subCategoryFilter)
            {
                subCategoryFilter.value =
                    "all";
            }

            applyAllFilters();
        }
    );
}


/* ==========================================
   SUB-CATEGORY CHANGE
========================================== */

if(subCategoryFilter)
{
    subCategoryFilter.addEventListener(
        "change",
        function()
        {
            applyAllFilters();
        }
    );
}


/* ==========================================
   MINIMUM PRICE CHANGE
========================================== */

if(minPrice)
{
    minPrice.addEventListener(
        "input",
        function()
        {
            applyAllFilters();
        }
    );
}


/* ==========================================
   MAXIMUM PRICE CHANGE
========================================== */

if(maxPrice)
{
    maxPrice.addEventListener(
        "input",
        function()
        {
            applyAllFilters();
        }
    );
}


/* ==========================================
   STOCK CHANGE
========================================== */

if(stockFilter)
{
    stockFilter.addEventListener(
        "change",
        function()
        {
            applyAllFilters();
        }
    );
}


/* ==========================================
   SORT CHANGE
========================================== */

if(sortFilter)
{
    sortFilter.addEventListener(
        "change",
        function()
        {
            applyAllFilters();
        }
    );
}

/* ==========================================
   CLEAR FILTERS ELEMENT
========================================== */

const clearFilters =
    document.getElementById(
        "clearFilters"
    );

/* ==========================================
   CLEAR ALL FILTERS
========================================== */

if(clearFilters)
{
    clearFilters.addEventListener(
        "click",
        function()
        {
            /* ==========================================
               CLEAR SEARCH
            ========================================== */

            if(productSearchInput)
            {
                productSearchInput.value =
                    "";
            }


            /* ==========================================
               RESET CATEGORY
            ========================================== */

            if(categoryFilter)
            {
                categoryFilter.value =
                    "all";
            }


            /* ==========================================
               RESET SUB-CATEGORY
            ========================================== */

            if(subCategoryFilter)
            {
                subCategoryFilter.value =
                    "all";
            }


            /* ==========================================
               RESET PRICE
            ========================================== */

            if(minPrice)
            {
                minPrice.value =
                    "";
            }

            if(maxPrice)
            {
                maxPrice.value =
                    "";
            }


            /* ==========================================
               RESET STOCK
            ========================================== */

            if(stockFilter)
            {
                stockFilter.value =
                    "all";
            }


            /* ==========================================
               RESET SORT
            ========================================== */

            if(sortFilter)
            {
                sortFilter.value =
                    "default";
            }


            /* ==========================================
               UPDATE SUB-CATEGORIES
            ========================================== */

            updateSubCategoryOptions();


            /* ==========================================
               DISPLAY ALL PRODUCTS
            ========================================== */

            applyAllFilters();
        }
    );
}

/* ==========================================
   INITIALIZE FILTERS
========================================== */

createCategoryOptions();

updateSubCategoryOptions();

/* ==========================================
   HANDLE SEARCH URL
========================================== */

const searchParams =
    new URLSearchParams(
        window.location.search
    );

const urlSearchTerm =
    searchParams.get(
        "search"
    );


/* ==========================================
   APPLY URL SEARCH
========================================== */

if(
    urlSearchTerm &&
    productSearchInput
)
{
    productSearchInput.value =
        urlSearchTerm;

    applyAllFilters();
}
else
{
    displayProducts(
        PRODUCTS
    );
}