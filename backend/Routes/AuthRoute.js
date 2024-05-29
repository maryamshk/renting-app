const express = require('express');
const { body, validationResult } = require('express-validator');
const { createUser, loginUser } = require('../Controllers/AuthController');
const router = express.Router();

router.post(
  '/createuser',
  [
    body('email').isEmail(),
    body('name').isLength({ min: 5 }),
    body('password').isLength({ min: 5 }),
  ], createUser
);


router.post(
  '/loginuser',
  [body('email').isEmail(), body('password').isLength({ min: 5 })],
  loginUser
);

module.exports = router;
