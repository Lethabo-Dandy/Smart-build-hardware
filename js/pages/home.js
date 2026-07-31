const featuredProducts =
    document.getElementById("featuredProducts");

if(featuredProducts)
{
    const featured =
        PRODUCTS.filter(product => product.featured);

    featuredProducts.innerHTML =
        featured
            .map(product => createProductCard(product))
            .join("");

    attachCartEvents();
    attachWishlistEvents();
}