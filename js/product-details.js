const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));

const product =
    PRODUCTS.find(p => p.id === id);

const container =
    document.getElementById("productDetails");

if(!container)
    throw new Error("Missing #productDetails");

if(!product)
{
    container.innerHTML=`

        <h2>

            Product not found.

        </h2>

    `;

}
else
{

    container.innerHTML=

    createProductDetails(product);

}