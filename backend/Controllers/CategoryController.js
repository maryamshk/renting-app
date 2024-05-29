const Category = require("../models/Category");


module.exports.createCategory = async (req, res) => {
  const { name } = req.body;
  try {
    if (!name) {
      return res.send("Name is required");
    }
    const category = await Category.create({
      name,
    })


    if (category) {
      res.status(200).send("category created successfully");
    }

    else {
      res.status(400).send("error created category")
    }
  }

  catch (error) {
    res.status(500).send("Internal Server Error");
    console.error(error);
  }

}


module.exports.getCategory = async (req, res) => {
  try {
    allCategories = await Category.find({});
    if (allCategories) {
      res.status(200).send(allCategories);
    }

    else {
      res.status(404).send('category not found');
    }
  }


  catch (err) {
    console.error(error.message);
    res.send('Server Error')
  }


}

