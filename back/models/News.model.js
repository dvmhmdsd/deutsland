const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  comments: [
    {
      name: {
        type: String,
        required: true
      },
      body: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = News = mongoose.model("News", NewsSchema);
