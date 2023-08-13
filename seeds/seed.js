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

  for (const product of productData) {
    const randomUser = users[Math.floor(Math.random() * users.length)].id;
    const randomProduct = await Product.create({
      ...product,
      user_id: randomUser,
    });

    await Cart.create({
      user_id: users[Math.floor(Math.random() * users.length)].id,
      product_id: product.id,
    });
  }

  process.exit(0);
};

seedDatabase();
