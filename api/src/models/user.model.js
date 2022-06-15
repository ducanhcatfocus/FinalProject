const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    trim: true,
    require: true,
  },
  username: String,
  password: {
    type: String,
    require: true,
    minLength: 6,
    select: false,
  },
  photo: {
    type: String,
    default: null,
  },
});

userSchema.methods.correctPassword = function (
  candidatePassword,
  userPassword
) {
  return bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
