// i want to add a product to the cart when the add to cart button is clicked on the product page

document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector(".add-to-cart-btn");

  addToCartBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const product_id = event.target.getAttribute("data-id");

    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({
        product_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/cart");
    } else {
      alert("Failed to add product to cart");
    }
  });
});
