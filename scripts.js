var cart = [];

// get cart from localStorage
if(localStorage.getItem("shoppingCart") != null){  
    let cartData = localStorage.getItem("shoppingCart");
    cart = JSON.parse(cartData);
}

window.addEventListener("DOMContentLoaded", function(){
    // display number of items in cart
    document.querySelector("#cart-icon > span").innerText = cart.length;     
})