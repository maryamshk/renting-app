const express = require('express');
const router = express.Router();
const { orderData, getData } = require('../Controllers/OrderController');

router.post('/orderData', orderData);
router.post('/myOrderData', getData)
module.exports = router;