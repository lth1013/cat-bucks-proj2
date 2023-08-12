const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");
const Cart = require("./Cart");

User.hasOne(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
