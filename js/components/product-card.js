function createProductCard(product)
{
    return `
        <div class="items">

            <button
                class="wishlist-btn"
                data-id="${product.id}">

                <i class="bi bi-heart"></i>

            </button>

            <a href="product-details.html?id=${product.id}">

                <img
                    src="${product.image}"
                    alt="${product.name}">

            </a>

            <div class="rating">

                ${"★".repeat(product.rating)}

                <span>(${product.reviews})</span>

            </div>

            <a
                href="product-details.html?id=${product.id}"
                class="item-name">

                ${product.name}

            </a>

            <p class="price">

                R${formatPrice(product.price)}

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