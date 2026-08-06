const featuredProducts =
    document.getElementById("featuredProducts");

if(featuredProducts)
{
    const featured = [];

    const displayedCategories = new Set();

    PRODUCTS.forEach(product =>
    {
        if (
            product.featured &&
            !displayedCategories.has(product.subCategory)
        )
        {
            featured.push(product);
            displayedCategories.add(product.subCategory);
        }
    });
    featuredProducts.innerHTML =
        featured
            .map(product => createProductCard(product))
            .join("");

    attachCartEvents();
    attachWishlistEvents();
}