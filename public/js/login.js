const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const userName = document.querySelector("#username-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

  if (userName && password) {
    // Send a POST request to the API endpoint
    const response = await fetch("/api/users/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the main page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const userName = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const passwordConfirm = document
    .querySelector("#confirm-password")
    .value.trim();

  if (password === passwordConfirm) {
    if (userName && email && password) {
      const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ userName, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
