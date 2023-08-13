const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");

Cart.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

Product.hasMany(Cart, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
module.exports = { User, Cart, Product };
