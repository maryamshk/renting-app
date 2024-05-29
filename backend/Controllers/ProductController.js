const Product = require('../models/Product');
const Category = require('../models/Category')

module.exports.CreateProduct = async (req, res) => {
  try {
    const { categoryName, name, img, options, description } = req.body;
    if (!categoryName || !name || !img || !options || !description) {
      return res.status(400).send("Missing required credentials");
    }
    const product = Product.create(
      {
        categoryName,
        name,
        img,
        options,
        description,
      }
    )
    if (product) {
      res.status(200)
      res.send("product created successfully");
    }

    else {
      res.status(400).send("product not created");
    }
  }

  catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error')
  }

}

module.exports.getProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    const category = await Category.find({});
    if (product && category) {
      res.status(200).send({ product: product, category: category });
    }

    else {
      res.status(404).send('product not found')
    }
  }

  catch (error) {
    console.error(error.message);
    res.send('Server Error')
  }
}