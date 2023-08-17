const express = require("express");
const router = require("express").Router();
const { User } = require("../../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  // console.log(req);
  try {
    const userData = await User.findOne({
      where: { username: req.body.username },
    });
    console.log(userData);

    if (!userData) {
      res.status(400).json({ message: "user not found" });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: "wrong password" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "Logged in successfully" });
    });
  } catch (err) {
    res.status(400).json({ message: "failed to log in" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get("/list", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (user) {
      user.wallet = req.body.wallet;
      await user.save();
      res.status(200).json({ message: "wallet updated" });
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "error updating wallet" });
  }
});

module.exports = router;
