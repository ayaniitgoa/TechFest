const mongoose = require("mongoose");
const Team = require("./team");
const event = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  teams: {
    type: [Team.schema],
  },
});

module.exports = mongoose.model("Event", event);
