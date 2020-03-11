const express = require("express");
const server = express.Router();

const Message = require("../models/Message.model");

const ensureAuth = require("../helpers/ensureAuth");

// Get the list
server.get("/list", ensureAuth, async (req, res) => {
  try {
    let messageList = await Message.find({});
    res.send(messageList);
  } catch {
    throwError();
  }
});

// Create a new record
server.post("/", async (req, res) => {
  console.log("post message")
  let { name, email, phone, body } = req.body;

  let messageItem = new Message({ name, email, phone, body });

  messageItem.save().then(record => {
    res.send(record);
  });
});

// Delete the record
server.delete("/:id", ensureAuth, (req, res) => {
  let id = req.params.id;

  Message.findByIdAndRemove(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      throwError();
    });
});

let throwError = () => {
  throw new Error("An error occurred in the db");
};

module.exports = server;
