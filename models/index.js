const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");

Cart.hasOne(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(User, {
  foreignKey: "user_id",
});

Cart.hasMany(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

module.exports = {User, Cart};