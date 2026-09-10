/* ==========================================
   WISHLIST EVENTS
========================================== */


/* ==========================================
   UPDATE WISHLIST BUTTON
========================================== */

function updateWishlistButton(
    button,
    productId
)
{
    const icon =
        button.querySelector("i");

    const active =
        isInWishlist(productId);

    button.classList.toggle(
        "active",
        active
    );

    if(!icon)
    {
        return;
    }

    if(active)
    {
        icon.classList.remove(
            "bi-heart"
        );

        icon.classList.add(
            "bi-heart-fill"
        );

        button.setAttribute(
            "aria-label",
            "Remove from wishlist"
        );
    }
    else
    {
        icon.classList.remove(
            "bi-heart-fill"
        );

        icon.classList.add(
            "bi-heart"
        );

        button.setAttribute(
            "aria-label",
            "Add to wishlist"
        );
    }
}


/* ==========================================
   UPDATE ALL WISHLIST BUTTONS
========================================== */

function updateAllWishlistButtons()
{
    document
        .querySelectorAll(
            ".wishlist-btn, .details-wishlist-btn"
        )
        .forEach(
            button =>
            {
                const productId =
                    Number(
                        button.dataset.id
                    );

                updateWishlistButton(
                    button,
                    productId
                );
            }
        );
}


/* ==========================================
   HANDLE WISHLIST CLICK
========================================== */

function handleWishlistClick(
    event
)
{
    const button =
        event.target.closest(
            ".wishlist-btn, .details-wishlist-btn"
        );

    if(!button)
    {
        return;
    }

    event.preventDefault();

    event.stopPropagation();

    const productId =
        Number(
            button.dataset.id
        );

    if(!productId)
    {
        return;
    }

    /* ==========================================
       TOGGLE WISHLIST
    ========================================== */

    toggleWishlist(
        productId
    );

    /* ==========================================
       UPDATE BUTTON
    ========================================== */

    updateWishlistButton(
        button,
        productId
    );
}


/* ==========================================
   INITIALIZE WISHLIST EVENTS
========================================== */

document.addEventListener(
    "click",
    handleWishlistClick
);


/* ==========================================
   INITIALIZE WISHLIST BUTTON STATES
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function()
    {
        updateAllWishlistButtons();
    }
);