const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = Career = mongoose.model("Career", CareerSchema);
