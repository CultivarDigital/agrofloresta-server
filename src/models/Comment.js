var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

var CommentSchema = mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
  },
  plant: {
    type: ObjectId,
    ref: 'Plant',
  },
  post: {
    type: ObjectId,
    ref: 'Post',
  },
  topic: {
    type: ObjectId,
    ref: 'Topic',
  },
}, {
  timestamps: true
});

mongoose.model('Comment', CommentSchema);
