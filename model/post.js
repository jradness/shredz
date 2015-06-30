var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
  userPic: String,
  username: String,
  uploadDate: Date,
  description: String,
  mediaUrl: String,
  type: String,
  likeButton: Number,
  commentsArray: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }]
});

module.exports = mongoose.model('post', PostSchema);