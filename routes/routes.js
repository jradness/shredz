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
var Post = require('../model/post');
var Comment = require('../model/comment');

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

  /* Feeds */
  router.get('/feed', function (req, res) {
    Post.find({}, function (err, posts) {
      if (err)
        res.status(500).send({
          msg: "Database error"
        });

      res.send(posts);
    });
  });

  router.post('/feed', function (req, res) {

    var post = new Post(req.body);
    post.save(function (err, newPost) {
      console.log("ERR:", err);
      console.log("NewPOST:", newPost);

      if (err)
        res.status(500).send({
          msg: "Could not save Post"
        });

      res.send(newPost);
    });
  });

  router.post('/comment/:postId', function (req, res) {

    var postId = req.params.postId;
    var comment = new Comment(req.body);
    Post.findOne({
      _id: postId
    }, function (err, foundPost) {

      if (err)
        res.status(400).send({
          msg: "Could not find post"
        });

      var post = foundPost;
      post.commentsArray.push(comment);

      post.save(function (err, savedPost) {
        if (err)
          res.status(400).send({
            msg: "Could not save comment to post"
          });

        res.send(savedPost);
      });
    });

  });

  router.get('/feed/test', function (req, res) {
    //    var post = new Post({
    //      userPic: 'http://skateparkoftampa.com/spot/headshots/2696.jpg',
    //      username: 'JRadness',
    //      uploadDate: new Date,
    //      description: 'SO AMAZING!!',
    //      mediaUrl: "https://www.youtube.com/embed/z57lfGPjGbI",
    //      type: 'video',
    //      likebutton: 0,
    //
    //      commentArray: [
    //        {
    //          username: 'Erik',
    //          comment: 'Holla that man so RAD!!',
    //          commentDate: new Date(2015, 1, 14)
    //                 },
    //        {
    //          username: 'Arto',
    //          comment: '...so sick!',
    //          commentDate: new Date(2015, 5, 10)
    //                 }
    //             ]
    //    });
    //
    //    post.save(function (err, data) {
    //      if (err)
    //        res.send(err);
    //
    //      res.send(data);
    //    });

    var post2 = new Post({
      userPic: 'http://skateparkoftampa.com/spot/headshots/2696.jpg',
      username: 'eRock',
      uploadDate: new Date(2015, 3, 15),
      description: 'Is this real???',
      mediaUrl: "https://www.youtube.com/watch?v=a37DbnJBhAM",
      type: 'video',

      commentsArray: [
        {
          username: 'RedOctoberpus',
          comment: 'Noyce!',
          commentDate: new Date(2015, 1, 14)
        }
      ]
    });

    post2.save(function (err, data) {
      if (err)
        res.send(err);

      res.send(data);
    });
  });

  //Test route
  //  router.get('/items', isAuthenticated, function (req, res) {
  //    res.json(["car", "bank", "toy", "dog"]);
  //  });

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