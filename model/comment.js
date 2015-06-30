var mongoose = require('mongoose');


var CommentSchema = mongoose.Schema({
  username: String,
  comment: String,
  commentDate: Date
});


module.exports = mongoose.model('comment', CommentSchema);