function createProductCard(product)
{
    const image = Array.isArray(product.images)
        ? product.images[0]
        : (product.images || product.image);

    const outOfStock = product.stock <= 0;

    return `
        <div class="items">
            <button
                class="wishlist-btn"
                data-id="${product.id}">
                <i class="bi bi-heart"></i>
            </button>

            <a href="product-details.html?id=${product.id}">
                <img
                    src="${image}"
                    alt="${product.name}">
            </a>

            <div class="rating">
                ${"★".repeat(product.rating)}
                ${"☆".repeat(5 - product.rating)}

                <span>(${product.reviews})</span>
            </div>

            <h3 class="item-name">
                ${product.name}
            </h3>

            <p class="price">
                R${product.price.toFixed(2)}

                <span>/ ${product.unit}</span>
            </p>

            <button
                class="btn-cart ${outOfStock ? "disabled" : ""}"
                data-id="${product.id}"
                ${outOfStock ? "disabled" : ""}>

                <i class="bi bi-cart4"></i>

                ${outOfStock ? "OUT OF STOCK" : "ADD TO CART"}
            </button>

        </div>
    `;
}