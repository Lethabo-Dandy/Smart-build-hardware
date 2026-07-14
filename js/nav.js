const input = document.getElementById("searchInput");
const button = document.getElementById("searchBtn");
const suggestions = document.getElementById("suggestions");
const products = document.querySelectorAll(".items");
const noResults = document.getElementById("noResults");

function searchProducts() 
{
    const value = input.value.trim();

    if(value !== "") 
    {
        window.location.href =
            `product.html?search=${encodeURIComponent(value)}`;
    }
}

button.addEventListener("click",searchProducts);

input.addEventListener("keypress",function(e)
{

    if(e.key==="Enter"){
        searchProducts();
    }

});

input.addEventListener("input",function()
{
    const value = input.value.toLowerCase();

    suggestions.innerHTML="";

    if(value==="")
    {
        suggestions.style.display="none";

        products.forEach(product=>
        {
            product.style.display="block";
        });

        noResults.style.display="none";

        return;
    }

    products.forEach(product=>
    {
        const name = product.dataset.name;

        if(name.toLowerCase().includes(value))
        {

            const option=document.createElement("div");

            option.textContent=name;

            option.onclick=function()
            {
                input.value=name;
                suggestions.style.display="none";
                searchProducts();
            };

            suggestions.appendChild(option);
        }
    });

    suggestions.style.display =
        suggestions.children.length ? "block" : "none";
});

document.addEventListener("click",function(e)
{
    if(!e.target.closest(".search-box"))
    {
        suggestions.style.display="none";
    }
});

const params = new URLSearchParams(window.location.search);
const search = params.get("search");

if (search) 
{
    const products = document.querySelectorAll(".items");
    let found = false;

    products.forEach(product => {

        const name = product.dataset.name.toLowerCase();

        if (name.includes(search.toLowerCase())) {

            product.style.display = "block";
            found = true;

        } else {

            product.style.display = "none";

        }

    });

    if (found) 
    {
        noResults.style.display = "none";

    } 
    else 
    {
        noResults.style.display = "block";
        noResults.textContent = `No products found for "${search}".`;
    }
}
