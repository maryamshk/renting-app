const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://maryamjavedshk:Brooklyn99@cluster0.0yga0wa.mongodb.net/RentEase';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true });
    console.log('Connected to MongoDB');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);

  }
}

module.exports = mongoDB;



