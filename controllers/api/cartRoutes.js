const router = require("express").Router();
const { Product, Category, User, Cart } = require("../models");
const withAuth = require("../utils/auth");

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


