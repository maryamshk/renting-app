const express = require('express');
const { CreateProduct, getProduct } = require('../Controllers/ProductController');
const router = express.Router();

router.get('/product', getProduct)
router.post('/addProduct', CreateProduct)

module.exports = router;