var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

var CommentSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true
});

module.exports = CommentSchema;
