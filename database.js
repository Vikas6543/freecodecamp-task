const mongoose = require('mongoose');

module.exports.connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(error);
  }
};
