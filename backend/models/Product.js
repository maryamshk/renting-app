const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  img: {
    type: String,
    required: true,
  },

  options: [{
    half: String,
    full: String,
  }
  ],

  description: {
    type: String,
    required: true,
  }
})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product;