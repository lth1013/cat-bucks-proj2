// i want a function that when a button is clicked, I will add 10 to the counter which is an object related to each user
const { User } = require("../../models");

async function updateWallet(userId, updatedCount) {
  try {
    const user = await User.findByPk(userId);
    if (user) {
      user.wallet = updatedCount;
      await user.save();
      return true; // Successful update
    } else {
      return false; // User not found
    }
  } catch (error) {
    console.error(error);
    return false; // Error updating wallet
  }
}

module.exports = { updateWallet };