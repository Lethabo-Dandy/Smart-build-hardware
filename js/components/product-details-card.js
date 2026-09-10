/* ==========================================
   CREATE PRODUCT DETAILS
========================================== */

function createProductDetails(product)
{
    const image =
        Array.isArray(product.images)
            ? product.images[0]
            : (
                product.images ||
                product.image
            );


    /* ==========================================
       WISHLIST STATE
    ========================================== */

    const wishlistActive =
        typeof isInWishlist === "function" &&
        isInWishlist(product.id);


    return `

        <section class="details-container">


            <!-- ==========================================
                 PRODUCT IMAGE
            ========================================== -->

            <div class="details-image">

                <img
                    src="${image}"
                    alt="${product.name}">

            </div>


            <!-- ==========================================
                 PRODUCT INFORMATION
            ========================================== -->

            <div class="details-info">


                <h1>
                    ${product.name}
                </h1>


                <!-- ==========================================
                     RATING
                ========================================== -->

                <div class="rating">

                    ${"★".repeat(product.rating)}

                    ${"☆".repeat(5 - product.rating)}

                    <span>
                        (${product.reviews})
                    </span>

                </div>


                <!-- ==========================================
                     PRICE
                ========================================== -->

                <p class="price">

                    R${product.price.toFixed(2)}

                    <span>
                        / ${product.unit}
                    </span>

                </p>


                <!-- ==========================================
                     DESCRIPTION
                ========================================== -->

                <p>
                    ${product.description}
                </p>


                <!-- ==========================================
                     ACTIONS
                ========================================== -->

                <div class="details-actions">


                    <!-- ==========================================
                         WISHLIST
                    ========================================== -->

                    <button
                        class="details-wishlist-btn ${
                            wishlistActive
                                ? "active"
                                : ""
                        }"
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


                    <!-- ==========================================
                         ADD TO CART
                    ========================================== -->

                    <button
                        class="btn-cart"
                        data-id="${product.id}">

                        <i class="bi bi-cart4"></i>

                        ADD TO CART

                    </button>


                </div>

            </div>

        </section>

    `;
}