const productsContainer = document.getElementById("productsContainer");

function createProductCard(product)
{
    return `
        <div class="items">

            <div class="product-top">
                <button
                    class="wishlist-btn"
                    data-id="${product.id}">

                    <i class="bi bi-heart"></i>
                </button>
            </div>

            <a href="product-details.html?id=${product.id}">
            
                <img
                    src="${product.image}"
                    alt="${product.name}">
            </a>

            <div class="rating">
                ★★★★★

                <span>(${product.reviews})</span>
            </div>

            <a
                href="product-details.html?id=${product.id}"
                class="item-name">
                ${product.name}
            </a>

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