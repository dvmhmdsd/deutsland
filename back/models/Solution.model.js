const mongoose = require("mongoose");

const SolutionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  image: {
    type: String
  }
});

module.exports = Solution = mongoose.model("Solution", SolutionSchema);
