const User = require("./User");
const Product = require("./Product");
const Category = require("./Category");
const Cart = require("./Cart");

User.hasOne(Cart, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Cart.belongsTo(User, {
  foreignKey: "user_id",
});

Product.belongsTo(Category, {
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  foreignKey: "category_id",
});

module.exports = { User, Product, Category, Cart };