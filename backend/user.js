const mongoose = require("mongoose");
const user = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
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

  uid: {
    type: String,
    trim: true,
  },

  events: {
    type: [{ type: String }],
  },
});

module.exports = mongoose.model("User", user);
