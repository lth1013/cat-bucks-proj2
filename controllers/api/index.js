const router = require('express').Router();
const foodRoutes = require('./foodRoutes');
const cartRoutes = require('./cartRoutes');
const catRoutes = require('./catRoutes');

router.use("/food", foodRoutes);
router.use("/cart", cartRoutes);
router.use("/cat", catRoutes);

module.exports = router;