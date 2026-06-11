let cart = [];

function addItem(item) {
    cart.push(item);
    document.getElementById("cart").innerHTML =
        "🛒 Cart (" + cart.length + ")";
}
