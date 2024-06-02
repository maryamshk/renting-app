const Order = require('../models/Orders');

module.exports.orderData = async (req, res) => {
  const orderData = req.body.order_data;

  try {
    let existingOrder = await Order.findOne({ email: req.body.email });
    if (existingOrder === null) {
      try {
        await Order.create({
          email: req.body.email,
          order_data: [orderData],
        });
        res.json({ success: true });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    } else {
      try {
        await Order.findOneAndUpdate(
          { email: req.body.email },
          { $push: { order_data: orderData } },
        );
        res.json({ success: true });
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};



module.exports.getData = async (req, res) => {
  try {
    let myData = await Order.findOne({ 'email': req.body.email })
    res.json({ orderData: myData })
  }

  catch (err) {
    res.status(500).send('Server error', err.message);
  }
}