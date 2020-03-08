const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = Message = mongoose.model("Message", MessageSchema);
