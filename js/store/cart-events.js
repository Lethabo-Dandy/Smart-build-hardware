function attachCartEvents()
{
    console.log("Attaching cart events...");

    document
        .querySelectorAll(".btn-cart:not(:disabled)")
        .forEach(button =>
        {
            button.onclick = () =>
            {
                const id = Number(button.dataset.id);

                console.log("Clicked:", id);

                addToCart(id);

                console.log("Cart:", getCart());
            };
        });
}