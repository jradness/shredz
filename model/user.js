var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
//  posts: [PostSchema]
//});
//
//var PostSchema = mongoose.Schema({
//  text: String,
//  media: String,
//  type: String,
//  date: Date,
//  comments: [CommentSchema]
//});
//
//var CommentSchema = mongoose.Schema({
//  username: String,
//  text: String,
//  timestamp: Date
});

module.exports = mongoose.model('user', UserSchema);