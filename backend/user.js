const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  college: {
    type: String,
    trim: true,
  },
  contact: {
    type: Number,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model("User", user);
