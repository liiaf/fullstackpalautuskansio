const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: String,
    name: String,
    passwordHash: String,
    blogs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Blog' }]
  }
);

userSchema.statics.formatNoIdNoHash = function(user) {
  return {
    username: user.username,
    name: user.name,
    blogs: user.blogs
  };
};

userSchema.statics.formatNoHash = function(user) {
  return {
    _id: user._id,
    username: user.username,
    name: user.name,
    blogs: user.blogs
  };
};

const User = mongoose.model('User', userSchema);

module.exports = User;