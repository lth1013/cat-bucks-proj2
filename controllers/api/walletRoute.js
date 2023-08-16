const express = require('express');
const { updateWallet } = require('../../public/js/counter');
const router = express.Router();
const { User } = require('../../models');


// Endpoint to update wallet
router.post('/', async (req, res) => {
    const userId = req.session.user_id; // Replace with your session/user identification logic
    const updatedAmount = req.session.wallet; // Replace with your wallet update logic
    console.log(userId);

    const success = await updateWallet(userId, updatedAmount);

    if (success) {
        res.status(200).send('Wallet updated successfully');
    } else {
        res.status(500).send('Error updating wallet');
    }
});

module.exports = router;