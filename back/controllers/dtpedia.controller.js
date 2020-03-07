const express = require("express");

const server = express.Router();
const Dtpedia = require("../models/Dtpedia.model");

const ensureAuth = require("../helpers/ensureAuth");

// Get the list
server.get("/list", async (req, res) => {
  try {
    let dtpediaList = await Dtpedia.find({});
    res.send(dtpediaList);
  } catch {
    throwError();
  }
});

// Get single news
server.get("/:id", async (req, res) => {
  try {
    let dtpediaItem = await Dtpedia.findById(req.params.id);
    res.send(dtpediaItem);
  } catch {
    throwError();
  }
});

// Create a new record
server.post("/", ensureAuth, async (req, res) => {
  let { title, body, image, date } = req.body;

  let dtpediaItem = new Dtpedia({
    title,
    body,
    date,
    image
  });

  dtpediaItem.save().then(record => {
    res.send(record);
  });
});

// Edit the record
server.put("/:id", ensureAuth, (req, res) => {
  try {
    let id = req.params.id;

    let { title, body, date, image } = req.body;

    Dtpedia.findByIdAndUpdate(id, { title, body, date, image }).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

// Delete the record
server.delete("/:id", ensureAuth, (req, res) => {
  let id = req.params.id;

  Dtpedia.findByIdAndRemove(id)
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
