const express = require('express');
const app = express();
const dotenv = require('dotenv');
const { connectDB } = require('./database');

// dot env config
dotenv.config();

// middlewares
app.use(express.json());

// database connection
connectDB();

// routes

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
