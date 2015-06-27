/***************************************************************************
    These routes are API routes only - meaning this project seed
    is not built to manage ui/pages for an entire website. It is set
    up to deliver the initial HTML page, and then the Angular app
    should handle all routes after that point. Any route that requires
    that the user be authenticated before using that endpoint should
    use the isAuthenticated middleware in this file
***************************************************************************/

var express = require('express');
var router = express.Router();
var debug = require('debug')('dev');
var User = require('../model/user');

var isAuthenticated = function (req, res, next) {
  // if user is authenticated in the session, call the next() to call the next request handler
  // Passport adds this method to request object. A middleware is allowed to add properties to
  // request and response objects
  if (req.isAuthenticated())
    return next();
  // if the user is not authenticated then redirect him to the login page
  res.json('Unauthorized user. Please first log in.');
}

module.exports = function (passport) {

  /* GET login or main page. Does NOT require authentication */
  router.get('/', function (req, res) {
    // The main page to display
    debug('GET: index.html');
    res.render('index.html');
  });

  /* Handle Login POST */
  router.post('/login', passport.authenticate('login'), function (req, res) {
    res.json("Succesfully logged in");
  });

  /* Handle Registration POST */
  router.post('/signup', passport.authenticate('signup'), function (req, res) {
    res.json("Succesfully signed up");
  });

  /* PUT ALL YOUR OTHER ROUTES HERE */
  //    router.get('/item', isAuthenticated, function (req, res) {
  //        res.json('get items from database');
  //    });

  //Test route
  router.get('/items', isAuthenticated, function (req, res) {
    res.json(["car", "bank", "toy", "dog"]);
  });

  router.get('/userslist', function (req, res) {
    User.find({},
      function (err, users) {
        // In case of any error, return using the done method
        if (err)
          return done(err);

        console.log(users);
        res.send(users);
      }
    );
  });


  /* Handle Logout */
  router.get('/signout', function (req, res) {
    req.logout();
    res.json('Successfully logged out');
  });

  return router;
}