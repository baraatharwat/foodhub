let cart = [];

window.addItem = function(item) {
    cart.push(item);
    updateCart();
}

window.removeItem = function(item) {
    let index = cart.indexOf(item);
    if (index > -1) {
        cart.splice(index, 1);
    }
    updateCart();
}

function updateCart() {
    document.getElementById("cart").innerHTML =
        "🛒 Cart (" + cart.length + ")";
}
