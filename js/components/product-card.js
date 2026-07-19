function createProductCard(product)
{
    return `
        <div class="items">
            <button
                class="wishlist-btn"
                data-id="${product.id}">
                    <i class="bi bi-heart"></i>
            </button>

            <img
                src="${product.image}"
                alt="${product.name}"
                >

            <div class="rating">
                ${"★".repeat(product.rating)}
                ${"☆".repeat(5-product.rating)}

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
                class="btn-cart"
                data-id="${product.id}">

                    <i class="bi bi-cart4"></i>

                ${product.stock > 0 ? "ADD TO CART" : "OUT OF STOCK"}
            </button>
        </div>
    `;
}