function createProductDetails(product)
{
    return
    `
        <section class="details-container">
            <div class="details-image">
                <img
                src="${image}"
                alt="${product.name}">
            </div>

            <div class="details-info">
                <h1>
                    ${product.name}
                </h1>
            
                <div class="rating">
                    ★★★★★
                    <span>(${product.reviews})</span>
                </div>

                <p class="price">
                    R${product.price.toFixed(2)}
                    <span>
                        / ${product.unit}
                    </span>
                </p>

                <p>${product.description}</p>

                <button 
                    class="btn-cart" 
                    data-id="${product.id}">
                        <i class="bi bi-cart4"></i>
                        ADD TO CART
                </button>
            </div>
        </section>

    `;
}