var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

var LikeSchema = mongoose.Schema({
  user: {
    type: ObjectId,
    ref: 'User',
  },
  post: {
    type: ObjectId,
    ref: 'Post',
  },
}, {
  timestamps: true
});

mongoose.model('Like', LikeSchema);
