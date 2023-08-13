const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");

// Cart.hasMany(User, {
//   foreignKey: "id",
//   onDelete: "CASCADE",
// });

Cart.belongsTo(User, {
  foreignKey: "id",
});

Product.hasMany(Cart, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});

module.exports = { User, Cart, Product };
