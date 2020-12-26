const mongoose = require("mongoose");
const team = new mongoose.Schema({
  participants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

module.exports = mongoose.model("Team", team);
