const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);

router.get(
  '/auth/google/callback',
  passport.authenticate('google', {
    failureRedirect: 'https://freecodecamp-task.onrender.com/signin',
  }),
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, {
      expiresIn: '12h',
    });
    res.redirect(
      `https://freecodecamp-task.onrender.com/courses/?token=${token}`
    );
  }
);

module.exports = router;
