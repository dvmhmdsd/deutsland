const mongoose = require("mongoose");

const DtpediaSchema = new mongoose.Schema({
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
  }
});

module.exports = DtpediaSchema = mongoose.model("News", DtpediaSchema);
