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

  description: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
  },

  timePeriod: {
    type: String,
  }
})

const Product = mongoose.model('product', ProductSchema)
module.exports = Product;