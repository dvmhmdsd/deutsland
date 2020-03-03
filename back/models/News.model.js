const mongoose = require("mongoose");

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String
  },
  date: {
    type: String,
    default: Date.now
  },
  image: {
    type: String
  },
  comments: [
    {
      body: {
        type: String
      }
    }
  ]
});

module.exports = News = mongoose.model("News", NewsSchema);
