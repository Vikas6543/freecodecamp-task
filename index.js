const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');
const { connectDB } = require('./database');
const session = require('express-session');
const passport = require('./config/passport');

// dot env config
dotenv.config();

// middlewares
app.use(express.json());
app.use(cors());

// database connection
connectDB();

// session config
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/user', require('./routes/userRoute'));
app.use('/', require('./routes/authRoute'));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
