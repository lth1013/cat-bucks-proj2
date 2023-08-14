let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");


//Functionality to open and close cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};
closeCart.onclick = () => {
    cart.classList.remove("active");
}


if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready(){
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)
    for(var i = 0; i < removeCartButtons.length; i++){
        var button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}

//functionality to remove items from the cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
}
