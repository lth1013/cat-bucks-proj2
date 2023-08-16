const { User } = require("../../models");
const router = require("express").Router();

router.post('/', async (req, res) => {
  const userId = req.session.user_id; // Replace with your session/user identification logic
  const updatedAmount = req.body.wallet;

  const success = await updateWallet(userId, updatedAmount);

  if (success) {
      res.status(200).send('Wallet updated successfully');
  } else {
      res.status(500).send('Error updating wallet');
  }
});

module.exports = router;
