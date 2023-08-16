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
  try {
    const user = await User.findOne({
      where: { username: req.body.username },
    });

    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      res.status(400).json({ message: "Invalid credentials" });
      return;
    }

    req.session.user_id = user.id;
    req.session.logged_in = true;
    res.json({ user, message: "Logged in successfully" });
  } catch (err) {
    res.status(400).json(err);
    console.log("failed to log in");
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

module.exports = router;
