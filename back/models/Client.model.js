const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = News = mongoose.model("News", NewsSchema);
