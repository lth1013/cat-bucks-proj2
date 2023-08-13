const router = require('express').Router();
const cartRoutes = require('./cartRoutes');
const catRoutes = require('./catRoutes');
const userRoutes = require('./userRoutes');

router.use("/users", userRoutes);
router.use("/cart", cartRoutes);
router.use("/cats", catRoutes);

module.exports = router;