const router = require("express").Router();
const { Product, Category, User, Cart } = require("../models");
const withAuth = require("../utils/auth");

const express = require("express");
const app = express();

// we want to get the index.html home page. this will display the index.html file.
// if the user is not logged in, we are gonna want to redirect them to the welcome.html page.
// we don't need to render any products here, because we are not on the products page.

router.get("/", (req, res) => {
  if (!req.session.logged_in) {
    res.redirect("/welcome.html");
  } else {
    // res.sendFile(__dirname + "/index.html");
    res.render("products");
  }
});

router.get("/products", async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        {
          model: Category,
          attributes: ["category_name"],
        },
      ],
    });

    const products = productData.map((product) => product.get({ plain: true }));

    res.render("products", {
      products,
      // logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);

    console.log(err);
  }
});

module.exports = router;
