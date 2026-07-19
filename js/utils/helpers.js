function getProduct(id)
{
    return PRODUCTS.find(product => product.id === id);
}