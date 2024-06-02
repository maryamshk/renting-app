const Product = require('../models/Product');
const Category = require('../models/Category');

module.exports.CreateProduct = async (req, res) => {
  try {
    const { categoryName, name, img, description, price } = req.body;
    if (!categoryName || !name || !img || !description || !price) {
      return res.status(400).send("Missing required credentials");
    }
    const product = await Product.create({ categoryName, name, img, description, price });

    if (product) {
      return res.status(200).send("Product created successfully");
    } else {
      return res.status(400).send("Product not created");
    }
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
}

module.exports.getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    const categories = await Category.find({});

    if (products.length > 0 && categories.length > 0) {
      return res.status(200).json({ products, categories });
    } else {
      return res.status(404).send('Products or categories not found');
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).send('Server Error');
  }
}
