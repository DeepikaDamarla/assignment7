const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');
require('dotenv').config();  // Load environment variables

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
    const { firstname, lastname, username, email, password, mobile, dob, favorite_sports, gender, country } = req.body;

    try {
      // Create new user instance
      const user = new User({ firstname, lastname, username, email, password, mobile, dob, favorite_sports, gender, country });
      console.log(user);
      await user.save();
  
      // Sign the JWT token, only including essential user information (user ID)
      const token = jwt.sign(
        { id: user._id }, // Only include user ID in the token
        process.env.JWT_SECRET, 
        { expiresIn: '1h' }
      );
  
      // Set the token in an HTTP-only cookie
      res.cookie('token', token, { httpOnly: true });
  
      // Redirect to the dashboard after successful registration
      res.redirect('/success');
    } catch (err) {
      console.error(err);  // Log the error for debugging
      res.status(400).send('Error registering');
    }
  });
  

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).send('Invalid credentials');
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/user/dashboard');
  } catch (err) {
    res.status(500).send('Server error');
  }
});

// Logout
router.get('/logout', (req, res) => {
    res.cookie('token', '', { expires: new Date(0) });
    res.redirect('/');
  });

// Dashboard (Protected)
router.get('/dashboard', protect, (req, res) => {
    res.render('dashboard', { user: req.user });
  });
  
  // home (Protected)
  router.get('/home', protect, (req, res) => {
    res.render('home', { user: req.user });
  });

  //about (Protected)
  router.get('/about', protect, (req, res) => {
    res.render('about', { user: req.user });
  });

  //service (Protected)
  router.get('/service', protect, (req, res) => {
    res.render('service', { user: req.user });
  });

  //contact (protected)
  router.get('/contact', protect, (req, res) => {
    res.render('contact', { user: req.user });
  });
  router.get('/profile', protect, (req, res) => {
    res.render('profile', { user: req.user });
  });

module.exports = router;
