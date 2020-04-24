var mongoose = require('mongoose'),
  uniqueValidator = require('mongoose-unique-validator'),
  crypto = require('crypto'),
  jwt = require('jsonwebtoken'),
  secret = require('../config').secret,
  AddressSchema = require('./Address'),
  ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.set('useCreateIndex', true)

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, 'inválido'],
    index: {
      unique: true,
      partialFilterExpression: { email: { $type: 'string' } },
    },
    default: null
  },
  hash: String,
  salt: String,
  name: String,
  bio: String,
  phone: String,
  picture: Object,
  address: AddressSchema,
  roles: [String],
  facebook_id: String,
  profileCompleted: Boolean
}, {
  timestamps: true,
  toJSON: { virtuals: true }
});

UserSchema.plugin(uniqueValidator, {
  message: 'já está sendo usado'
});

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  return this.hash === hash;
};

UserSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.generateJWT = function() {
  var today = new Date();
  var exp = new Date(today);
  exp.setDate(today.getDate() + 60);

  return jwt.sign({
    id: this._id,
    email: this.email,
    name: this.name,
    bio: this.bio,
    phone: this.phone,
    address: this.address,
    picture: this.picture,
    roles: this.roles,
    facebook_id: this.facebook_id,
    profileCompleted: this.profileCompleted,
    exp: parseInt(exp.getTime() / 1000),
  }, secret);
};

UserSchema.methods.toAuthJSON = function() {
  return {
    _id: this._id,
    email: this.email,
    name: this.name,
    bio: this.bio,
    phone: this.phone,
    address: this.address,
    roles: this.roles,
    picture: this.picture,
    facebook_id: this.facebook_id,
    profileCompleted: this.profileCompleted,
    token: this.generateJWT(),
  };
};

mongoose.model('User', UserSchema);
