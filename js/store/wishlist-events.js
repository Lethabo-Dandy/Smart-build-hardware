function attachWishlistEvents()
{
    document
        .querySelectorAll(".wishlist-btn")
        .forEach(button =>
        {
            button.onclick = () =>
            {
                button.classList.toggle("active");
            };
        });
}