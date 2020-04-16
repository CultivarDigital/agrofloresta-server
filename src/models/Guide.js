const mongoose = require('mongoose'),
  CommentSchema = require('./Comment'),
  ObjectId = mongoose.Schema.Types.ObjectId;

const GuideSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [String],
  description: String,
  user: {
    type: ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

mongoose.model('Guide', GuideSchema);
