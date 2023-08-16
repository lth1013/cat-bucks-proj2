document.getElementById("logout-button").addEventListener("click", async () => {
  try {
    // Send a POST request to the logout route
    const response = await fetch("/api/users/logout", {
      method: "POST",
    });

    if (response.ok) {
      // Redirect the user to the login page or do other actions
      document.location.replace("/"); // Redirect to the login page after successful logout
    } else {
      console.error("Failed to logout");
    }
  } catch (error) {
    console.error("Error:", error);
  }
});
