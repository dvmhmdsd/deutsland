const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
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
  },
  type: String,
  country: String
});

module.exports = Project = mongoose.model("Project", ProjectSchema);
