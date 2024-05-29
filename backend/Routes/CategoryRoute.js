const express = require('express');
const { createCategory, getCategory } = require('../Controllers/CategoryController');
const router = express.Router();

router.post('/createCategory', createCategory);
router.get('/category', getCategory)


module.exports = router;