// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  // Get the cart content container
  var cartContent = document.querySelector('.cart-content');

  // Create a new cart item element
  var cartItem = document.createElement('div');
  cartItem.className = 'cart-item';
  cartItem.innerHTML = `
      <img src="images/${itemName.toLowerCase().replace(/ /g, '-')}.jpg" alt="${itemName}" class="cart-item-img">
      <div class="cart-item-details">
          <span class="cart-item-title">${itemName}</span>
          <span class="cart-item-price">$${itemPrice}</span>
          <a href="#" class="remove-item">Remove</a>
      </div>
  `;

  // Append the cart item to the cart content container
  cartContent.appendChild(cartItem);

  // Calculate and update the total price
  var totalPrice = calculateTotalPrice();
  updateTotalPrice(totalPrice);
}

// Function to calculate the total price of items in the cart
function calculateTotalPrice() {
  var cartItems = document.querySelectorAll('.cart-item');
  var total = 0;
  cartItems.forEach(function (cartItem) {
      var price = parseFloat(cartItem.querySelector('.cart-item-price').textContent.slice(1));
      total += price;
  });
  return total;
}

// Function to update the total price displayed in the cart
function updateTotalPrice(totalPrice) {
  var totalPriceElement = document.querySelector('.total-price');
  totalPriceElement.textContent = '$' + totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeCartItem(cartItem) {
  cartItem.remove();

  // Recalculate and update the total price
  var totalPrice = calculateTotalPrice();
  updateTotalPrice(totalPrice);
}

// Add event listener for adding items to cart
var addCartButtons = document.querySelectorAll('.add-cart');
addCartButtons.forEach(function (button) {
  button.addEventListener('click', function (event) {
      var product = event.target.closest('.pro');
      var productName = product.querySelector('.product-title').textContent;
      var productPrice = parseFloat(product.querySelector('.price').textContent.slice(1));
      addToCart(productName, productPrice);
  });
});

// Add event listener for removing items from cart
var cartContent = document.querySelector('.cart-content');
cartContent.addEventListener('click', function (event) {
  if (event.target.classList.contains('remove-item')) {
      var cartItem = event.target.closest('.cart-item');
      removeCartItem(cartItem);
  }
});

// function subtract(){
//   document.getElementById("buy-now").addEventListener("click", function(){
//       var totalPrice = calculateTotalPrice();
//       newCount = sessionStorage.getItem("count") - totalPrice;
//       var cartItems = document.querySelectorAll('.cart-item');
//       cartItems.forEach(function (cartItem) {
//         removeCartItem(cartItem);
//       })
//   })
// }