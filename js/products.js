const productsContainer = document.getElementById("productsContainer");

function createProductCard(product)
{
    return `
        <div class="items">

            <div class="product-top">

                <span class="stock ${product.stock > 0 ? "in-stock" : "out-stock"}">
                    ${product.status}
                </span>

                <button
                    class="wishlist-btn"
                    data-id="${product.id}">

                    <i class="bi bi-heart"></i>

                </button>

            </div>

            <img
                src="${product.image}"
                alt="${product.name}">

            <div class="rating">

                ★★★★★

                <span>(${product.reviews})</span>

            </div>

            <p class="item-name">
                ${product.name}
            </p>

            <p class="sku">
                ${product.sku}
            </p>

            <p class="price">

                R${product.price.toFixed(2)}

                <span>/ ${product.unit}</span>

            </p>

            <button
                class="btn-cart"
                data-id="${product.id}">

                <i class="bi bi-cart4"></i>

                ADD TO CART

            </button>

            <button
                class="btn-details"
                data-id="${product.id}">

                View Details

            </button>

        </div>
    `;
}

function displayProducts(productList = PRODUCTS)
{
    if(!productsContainer) return;

    productsContainer.innerHTML = productList
        .map(createProductCard)
        .join("");
}

displayProducts();