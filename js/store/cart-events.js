function attachCartEvents()
{
    document
        .querySelectorAll(".btn-cart:not(:disabled)")
        .forEach(button =>
        {
            button.onclick = () =>
            {
                const id =
                    Number(button.dataset.id);

                /*
                    ADD PRODUCT
                */

                addToCart(id);


                /*
                    ANIMATE PRODUCT TO CART
                */

                animateProductToCart(button);


                /*
                    SMALL BUTTON FEEDBACK
                */

                button.classList.add("added");

                setTimeout(() =>
                {
                    button.classList.remove("added");
                }, 500);
            };
        });
}


/* =========================================
   ANIMATE PRODUCT TO CART
========================================= */

function animateProductToCart(button)
{
    const productCard =
        button.closest(".items");

    if(!productCard) return;


    const productImage =
        productCard.querySelector("img");

    const cartIcon =
        document.querySelector(".cart-icon");

    if(!productImage || !cartIcon) return;


    const imageRect =
        productImage.getBoundingClientRect();

    const cartRect =
        cartIcon.getBoundingClientRect();


    /*
        CLONE PRODUCT IMAGE
    */

    const flyingImage =
        productImage.cloneNode(true);

    flyingImage.classList.add(
        "cart-fly-image"
    );


    /*
        START POSITION
    */

    flyingImage.style.left =
        `${imageRect.left}px`;

    flyingImage.style.top =
        `${imageRect.top}px`;

    flyingImage.style.width =
        `${imageRect.width}px`;

    flyingImage.style.height =
        `${imageRect.height}px`;


    document.body.appendChild(
        flyingImage
    );


    /*
        FORCE BROWSER TO APPLY
        INITIAL POSITION
    */

    flyingImage.getBoundingClientRect();


    /*
        MOVE IMAGE TO CART
    */

    requestAnimationFrame(() =>
    {
        flyingImage.style.left =
            `${cartRect.left + cartRect.width / 2 - 15}px`;

        flyingImage.style.top =
            `${cartRect.top + cartRect.height / 2 - 15}px`;

        flyingImage.style.width = "30px";
        flyingImage.style.height = "30px";

        flyingImage.style.opacity = "0";
    });


    /*
        REMOVE AFTER ANIMATION
    */

    setTimeout(() =>
    {
        flyingImage.remove();
    }, 750);
}