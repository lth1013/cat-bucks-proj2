const router = require("express").Router();
const { Product, Category, User, Cart } = require("../models");
const withAuth = require("../utils/auth");

const express = require("express");
const app = express();

// we want to get the index.html home page. this will display the index.html file.
// if the user is not logged in, we are gonna want to redirect them to the welcome.html page.
// we don't need to render any products here, because we are not on the products page.

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

module.exports = router;
