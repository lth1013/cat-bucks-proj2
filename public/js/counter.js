// i want a function that when a button is clicked, I will add 10 to the counter which is an object related to each user

let count = 0;
 document.getElementById("catButton").addEventListener("click", () => {
   count += 10;
   document.getElementById("countLabel").innerHTML = "$" + count;
 });



// document.addEventListener("DOMContentLoaded", () => {
//   const counterBtn = document.querySelector(".counter-btn");
    
//   counterBtn.addEventListener("click", async (event) => {
//     event.preventDefault();

//     const counter = event.target.getAttribute("data-id");

//     const response = await fetch("/api/counter", {
//       method: "PUT",
//       body: JSON.stringify({
//         counter,
//       }),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });

//     if (response.ok) {
//       document.location.replace("/counter");
//     } else {
//       alert("Failed to add 10 to counter");
//     }
//   });
// });

// i want a function that when the purchase button is clicked, it will subtract the total price of all objects in the cart from the counter

// document.addEventListener("DOMContentLoaded", () => {
//   const purchaseBtn = document.querySelector(".purchase-btn");

//   purchaseBtn.addEventListener("click", async (event) => {
//     event.preventDefault();

//     const counter = event.target.getAttribute("data-id");

//     const response = await fetch("/api/counter", {

//       method: "PUT",

//       body: JSON.stringify({

//         counter,

//       }),

//       headers: {

//         "Content-Type": "application/json",

//       },

//     });

//     if (response.ok) {

//       document.location.replace("/counter");

//     } else {

//       alert("Failed to subtract total price of cart from counter");

//     }

//   });

// });

// i want a function that when the purchase button is clicked, it will delete all objects in the cart

// document.addEventListener("DOMContentLoaded", () => {

//   const purchaseBtn = document.querySelector(".purchase-btn");

//   purchaseBtn.addEventListener("click", async (event) => {

//     event.preventDefault();

//     const product_id = event.target.getAttribute("data-id");

//     const response = await fetch("/api/cart/" + product_id, {

//       method: "DELETE",

//       body: JSON.stringify({

//         product_id,

//       }),

//       headers: {

//         "Content-Type": "application/json",

//       },

//     });

//     if (response.ok) {

//       document.location.replace("/cart");

//     } else {

//       alert("Failed to remove product from cart");

//     }

//   });

// });

// i want a function that when the purchase button is clicked, it will add all objects in the cart to the purchase table

// document.addEventListener("DOMContentLoaded", () => {

//   const purchaseBtn = document.querySelector(".purchase-btn");

//   purchaseBtn.addEventListener("click", async (event) => {

//     event.preventDefault();

//     const product_id = event.target.getAttribute("data-id");

//     const response = await fetch("/api/purchase/" + product_id, {

//       method: "POST",

//       body: JSON.stringify({

//         product_id,

//       }),

//       headers: {

//         "Content-Type": "application/json",

//       },

//     });

//     if (response.ok) {

//       document.location.replace("/purchase");

//     } else {

//       alert("Failed to add product to purchase");

//     }

//   });

// });
