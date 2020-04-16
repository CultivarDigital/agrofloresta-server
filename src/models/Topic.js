const mongoose = require('mongoose'),
  CommentSchema = require('./Comment'),
  ObjectId = mongoose.Schema.Types.ObjectId;

const TopicSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [String],
  comments: [CommentSchema],
  user: {
    type: ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

mongoose.model('Topic', TopicSchema);
