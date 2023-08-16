const router = require("express").Router();
const { Product, Category, User, Cart } = require("../models");
const withAuth = require("../utils/auth");
const { updateWallet } = require("./api/walletRoute");
const path = require("path");

const express = require("express");
const app = express();

// we want to get the index.html home page. this will display the index.html file.
// if the user is not logged in, we are gonna want to redirect them to the welcome.html page.
// we don't need to render any products here, because we are not on the products page.
router.get("/welcome", async (req, res) => {
  try {
    res.render("welcome");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
      order: [["name", "ASC"]],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render("homepage", {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
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
  }
});

router.post("/update-wallet", async (req, res) => {
  const userId = req.body.userId;
  const updatedCount = req.body.updatedCount;

  const success = await updateWallet(userId, updatedCount);

  if (success) {
    return res.status(200).send("Wallet updated successfully");
  } else {
    return res.status(404).send("User not found or error updating wallet");
  }
});

router.get("/login", async (req, res) => {
  res.render("login");
});

router.get("/signup", async (req, res) => {
  res.render("signup");
});

module.exports = router;
