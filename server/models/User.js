const mongoose = require("mongoose");

// Schema for registered users
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  passwordHash: {
    type: String,
    required: true,
    select: false
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

module.exports = User;