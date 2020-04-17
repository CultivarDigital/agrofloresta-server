const mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

const PlantSchema = mongoose.Schema({
  slug: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  scientific_name: {
    type: String,
    required: true
  },
  popular_name: [String],
  category: [String],
  description: String,
  source: String,
  picture: Object,
  pictures: [Object],
  climate: [String],
  origin: [String],
  height: [String],
  luminosity: [String],
  ciclo: [String],
  synonymy: [String],
  harvest_time: String,
  spacing: String,
  companion_plants: [String],
  additional_fields: [Object],
  medicinal: Object,
  stratum: String,
  cycle: String,
  warning: String,
  user: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

PlantSchema.virtual('quiz_answers', {
  ref: 'QuizAnswer',
  localField: '_id',
  foreignField: 'plant'
});

PlantSchema.virtual('comments', {
  ref: 'Comment',
  localField: '_id',
  foreignField: 'plant'
});

mongoose.model('Plant', PlantSchema);
