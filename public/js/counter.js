// i want a function that when a button is clicked, I will add 10 to the counter which is an object related to each user

// async function updateWallet(userId, updatedCount) {
//   try {
//     const user = await User.findByPk(userId);
//     if (user) {
//       user.wallet = updatedCount;
//       await user.save();
//       return true; // Successful update
//     } else {
//       return false; // User not found
//     }
//   } catch (error) {
//     console.error(error);
//     return false; // Error updating wallet
//   }
// }

const catButton = document.getElementById("catButton");
catButton.addEventListener("click", async () => {
  const response = await fetch(`/api/users/${session.user.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ wallet: 10, action: "add" }),
  });
  if (response.ok) {
    // Handle success
    alert("Added 10 Cat Bucks to your wallet!");
  } else {
    // Handle error
    alert("Error adding Cat Bucks to your wallet.");
  }
});
