const express = require("express");
const server = express.Router();

const Client = require("../models/Client.model");

const ensureAuth = require("../helpers/ensureAuth");

// Get the list
server.get("/list", ensureAuth, async (req, res) => {
  try {
    let clientsList = await Client.find({});
    res.send(clientsList);
  } catch {
    throwError();
  }
});

// Create a new record
server.post("/", ensureAuth, async (req, res) => {
  let { link, image } = req.body;

  let clientItem = new Client({ link, image });

  clientItem.save().then(record => {
    res.send(record);
  });
});

// Delete the record
server.delete("/:id", ensureAuth, (req, res) => {
  let id = req.params.id;

  Client.findByIdAndRemove(id)
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
