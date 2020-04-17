const mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

const QuizAnswerSchema = mongoose.Schema({
  field: {
    type: String,
    required: true
  },
  answer: {
    type: String,
    required: true
  },
  plant: {
    type: ObjectId,
    ref: 'Plant',
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true
});

mongoose.model('QuizAnswer', QuizAnswerSchema);
