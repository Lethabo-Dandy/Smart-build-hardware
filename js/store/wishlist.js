/* ==========================================
   WISHLIST
========================================== */
let wishlist =
    JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

/* ==========================================
   SAVE WISHLIST
========================================== */
function saveWishlist()
{
    localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
    );
}

/* ==========================================
   GET WISHLIST
========================================== */
function getWishlist()
{
    return wishlist;
}

/* ==========================================
   CHECK WISHLIST
========================================== */
function isInWishlist(productId)
{
    return wishlist.some(
        id => id === productId
    );
}

/* ==========================================
   ADD TO WISHLIST
========================================== */
function addToWishlist(productId)
{
    if(
        isInWishlist(productId)
    )
    {
        return;
    }

    wishlist.push(
        productId
    );

    saveWishlist();
}

/* ==========================================
   REMOVE FROM WISHLIST
========================================== */
function removeFromWishlist(productId)
{
    wishlist =
        wishlist.filter(
            id => id !== productId
        );

    saveWishlist();
}

/* ==========================================
   TOGGLE WISHLIST
========================================== */
function toggleWishlist(productId)
{
    if(
        isInWishlist(productId)
    )
    {
        removeFromWishlist(
            productId
        );
    }
    else
    {
        addToWishlist(
            productId
        );
    }
}

/* ==========================================
   CLEAR WISHLIST
========================================== */
function clearWishlist()
{
    wishlist = [];

    saveWishlist();
}