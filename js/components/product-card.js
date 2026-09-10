/* ==========================================
   CREATE PRODUCT CARD
========================================== */

function createProductCard(product)
{
    const image = Array.isArray(product.images)
        ? product.images[0]
        : (product.images || product.image);


    const outOfStock =
        product.stock <= 0;


    const wishlistActive =
        typeof isInWishlist === "function" &&
        isInWishlist(product.id);


    return `
        <div class="items">

            <button
                class="wishlist-btn ${wishlistActive ? "active" : ""}"
                data-id="${product.id}"
                type="button"
                aria-label="${
                    wishlistActive
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                }">

                <i class="bi ${
                    wishlistActive
                        ? "bi-heart-fill"
                        : "bi-heart"
                }"></i>

            </button>


            <a href="product-details.html?id=${product.id}">

                <img
                    src="${image}"
                    alt="${product.name}">

            </a>


            <div class="rating">

                ${"★".repeat(product.rating)}

                ${"☆".repeat(5 - product.rating)}

                <span>
                    (${product.reviews})
                </span>

            </div>


            <h3 class="item-name">
                ${product.name}
            </h3>


            <p class="price">

                R${product.price.toFixed(2)}

                <span>
                    / ${product.unit}
                </span>

            </p>


            <button
                class="btn-cart ${
                    outOfStock
                        ? "disabled"
                        : ""
                }"
                data-id="${product.id}"
                ${
                    outOfStock
                        ? "disabled"
                        : ""
                }>

                <i class="bi bi-cart4"></i>

                ${
                    outOfStock
                        ? "OUT OF STOCK"
                        : "ADD TO CART"
                }

            </button>

        </div>
    `;
}