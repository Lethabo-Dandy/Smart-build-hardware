const productsContainer = document.getElementById("productsContainer");
const noResults = document.getElementById("noResults");

function displayProducts(productList = PRODUCTS)
{
    if (!productsContainer) return;

    if(productList.length === 0)
    {
        productsContainer.innerHTML = "";

        if(noResults)
        {
            noResults.style.display = "block";
            noResults.textContent = "No products found.";
        }

        return;
    }

    if(noResults)
    {
        noResults.style.display = "none";
    }

    productsContainer.innerHTML = productList
        .map(product => createProductCard(product))
        .join("");

    attachCartEvents();
    attachWishlistEvents();
}

displayProducts();