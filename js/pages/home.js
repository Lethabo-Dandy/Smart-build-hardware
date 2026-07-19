const featuredProductsContainer = document.getElementById("featuredProducts");

function displayFeaturedProducts()
{
    if(!featuredProductsContainer) return;

    const featuredProducts = PRODUCTS.filter(product => product.featured);

    featuredProductsContainer.innerHTML =
        featuredProducts
            .map(createProductCard)
            .join("");
}

displayFeaturedProducts();