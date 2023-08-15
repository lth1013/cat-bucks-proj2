const sequelize = require("../config/connection");
const { User, Cart, Product, Category } = require("../models");

const userData = require("./userData.json");
const cartData = require("./cartData.json");
const productData = require("./productData.json");
const categoryData = require("./categoryData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const categories = await Category.bulkCreate(categoryData, {
    individualHooks: true,
    returning: true,
  });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  console.log("Category Data:", categoryData);
  console.log("Product Data:", productData);

  const products = await Product.bulkCreate(
    productData.map((product) => ({
      ...product,
      CategoryId: categories.find(
        (category) => category.id === product.category_id
      ).category_name,
    })),
    {
      individualHooks: true,
      returning: true,
    }
  );

  for (const cartItem of cartData) {
    const user = users.find((user) => user.id === cartItem.user_id);
    const product = products.find(
      (product) => product.id === cartItem.product_id
    );

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
