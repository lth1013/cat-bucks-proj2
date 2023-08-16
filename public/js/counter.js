const { User } = require('../../models');

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
    console.error("Error updating wallet:", error);
    return false; // Error updating wallet
  }
};

module.exports = { updateWallet };