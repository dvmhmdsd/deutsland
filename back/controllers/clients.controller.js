const express = require("express");
const server = express.Router();

const Client = require("../models/Client.model");

const ensureAuth = require("../helpers/ensureAuth");

// Get the list
server.get("/list", async (req, res) => {
  try {
    let clientsList = await Client.find({});
    res.send(clientsList);
  } catch {
    throwError();
  }
});

// Create a new record
server.post("/", ensureAuth, async (req, res) => {
  let { link, image, name } = req.body;

  let clientItem = new Client({ link, image, name });

  clientItem.save().then((record, err) => {
    if (err) res.json({message: "An error occurred, please try again later"})
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
