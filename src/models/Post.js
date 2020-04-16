const mongoose = require('mongoose'),
  CommentSchema = require('./Comment'),
  ObjectId = mongoose.Schema.Types.ObjectId;

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: String,
  tags: [String],
  comments: [CommentSchema],
  picture: Object,
  url: String,
  oembed: String,
  start_time: Date,
  end_time: Date,
  location: String,
  score: Number,
  likes: [{
    type: ObjectId,
    ref: 'User',
  }],
  dislikes: [{
    type: ObjectId,
    ref: 'User',
  }],
  user: {
    type: ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

mongoose.model('Post', PostSchema);
