let cart = [];

window.addItem = function(item) {
    cart.push(item);
    document.getElementById("cart").innerHTML =
        "🛒 Cart (" + cart.length + ")";
}
