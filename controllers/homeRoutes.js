const router = require("express").Router();
const { Product, Category, User, Cart } = require("../models");
const withAuth = require("../utils/auth");

const express = require("express");
const app = express();

// we want to get the index.html home page. this will display the index.html file.
// if the user is not logged in, we are gonna want to redirect them to the welcome.html page.
// we don't need to render any products here, because we are not on the products page.

router.get("/welcome", (req, res) => {
  res.render("welcome");
});


router.get("/", withAuth, (req, res) => {
    res.render("homepage");
  });

router.get("/products", async (req, res) => {
  try {
    const productData = await Product.findAll();

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

router.get("/login", async (req, res) => {
  res.sendFile("public/html/welcome.html");
});

module.exports = router;
