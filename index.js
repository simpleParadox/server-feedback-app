const express = require('express'); // Requiring the 'express' package.
const passport = require('passport');
const key = require('./key.json');
const GoogleStrategy = require('passport-google-oauth20').Strategy; // Exports the 'Strategy' properties
const app = express(); // Creating the express application. Contains all the underlying utility functions.


const PORT = process.env.PORT || 3000; // Use the dynamically defined port or development port.

// Make passport work with GoogleStrategy to authenticate with Google SignIn.
passport.use(new GoogleStrategy()); // Create a new GoogleStrategy for authenticating a user.


app.listen(PORT);
