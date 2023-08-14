// I want to remove a product from the cart when the remove from cart button is clicked on the cart page

document.addEventListener("DOMContentLoaded", () => {
  const removeFromCartBtn = document.querySelector(".remove-from-cart-btn");

  removeFromCartBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const product_id = event.target.getAttribute("data-id");

    const response = await fetch("/api/cart/" + product_id, {
      method: "DELETE",
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
      alert("Failed to remove product from cart");
    }
  });
});
