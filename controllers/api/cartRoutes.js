const router = require("express").Router();
const { Product, Category, User, Cart } = require("../../models");
const withAuth = require("../../utils/auth");

// GET all items in the logged in user's cart

router.get("/", withAuth, async (req, res) => {
  try {
    const cartData = await Cart.findAll({
      where: {
        user_id: req.session.user_id,
      },
      include: [
        {
          model: Product,
          attributes: ["product_name", "price"],
        },
      ],
    });

    const cart = cartData.map((cart) => cart.get({ plain: true }));

    res.render("cart", {
      cart,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// POST one specific product to the cart of a specific user when the add to cart button is clicked on the product page

router.post("/", withAuth, async (req, res) => {
  try {
    const cartData = await Cart.create({
      product_id: req.body.product_id,
      user_id: req.session.user_id,
    });

    res.status(200).json(cartData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;