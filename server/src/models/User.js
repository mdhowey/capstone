const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
  {
    firstname: {
      require: [true, 'First name is required'],
      type: String,
    },
    lastname: {
      require: [true, 'Last name is required'],
      type: String,
    },
    email: {
      require: [true, 'Email name is required'],
      type: String,
    },
    password: {
      require: [true, 'Password name is required'],
      type: String,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  }, { timestamps: true }
);

const User = mongoose.model('User', userSchema);

module.exports = User;