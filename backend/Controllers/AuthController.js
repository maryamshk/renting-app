const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtsecret = "raginaphilange";

module.exports.createUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const salt = await bcrypt.genSalt(10);
  let secpassword = await bcrypt.hash(req.body.password, salt);

  try {
    User.create({
      name: req.body.name,
      password: secpassword,
      email: req.body.email,
      location: req.body.location,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
}

module.exports.loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  let email = req.body.email;
  try {
    let userData = await User.findOne({ email });
    if (!userData) {
      return res
        .status(400)
        .json({ errors: 'Try logging with correct credentials' });
    }

    const comparepassword = await bcrypt.compare(req.body.password, userData.password);
    if (!comparepassword) {
      return res
        .status(400)
        .json({ errors: 'Try logging with correct credentials' });
    }

    const data = {
      user: {
        id: userData.id
      }
    }

    const authToken = jwt.sign(data, jwtsecret)
    res.json({ success: true, authToken: authToken });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
}