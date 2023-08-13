const sequelize = require("../config/connection");
const { User, Cart, Product } = require("../models");

const userData = require("./userData.json");
const cartData = require("./cartData.json");
const productData = require("./productData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const products = await Product.bulkCreate(productData, {
    individualHooks: true,
    returning: true,
  });

  for (const cartItem of cartData) {
    const user = users.find(user => user.id === cartItem.user_id);
    const product = products.find(product => product.id === cartItem.product_id);
    
    if (user && product) {
      await Cart.create({
        user_id: user.id,
        product_id: product.id,
      });
    }
  }

  process.exit(0);
};

seedDatabase();
