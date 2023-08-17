const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const Category = require("./Category");

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

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "CASCADE",
});

module.exports = { User, Cart, Product, Category };
