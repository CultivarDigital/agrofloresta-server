const mongoose = require('mongoose'),
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
  user: {
    type: ObjectId,
    ref: 'User',
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

TopicSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'topic'
});

mongoose.model('Topic', TopicSchema);
