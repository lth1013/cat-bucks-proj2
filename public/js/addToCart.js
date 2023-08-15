document.addEventListener("DOMContentLoaded", () => {
  const addToCartBtn = document.querySelector(".add-to-cart-btn");

  addToCartBtn.addEventListener("click", async (event) => {
    event.preventDefault();

    const product_id = event.target.getAttribute("data-id");

    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify({
        product_id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
    } else {
      alert("Failed to add product to cart");
    }
  });
});
