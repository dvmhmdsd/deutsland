const express = require("express");

const server = express.Router();
const Solution = require("../models/Solution.model");

const ensureAuth = require("../helpers/ensureAuth");
const isAdmin = require("../helpers/isAdmin");

// Get the list
server.get("/list", async (req, res) => {
  try {
    let solutionsList;
    solutionsList = await Solution.find({});

    res.send(solutionsList);
  } catch {
    throwError();
  }
});

// Create a new record
server.post("/", ensureAuth, isAdmin, async (req, res) => {
  let { title, body, image } = req.body;

  let solutionItem = new Solution({
    title,
    body,
    image
  });

  solutionItem.save().then(record => {
    res.send(record);
  });
});

// Edit the record
server.put("/:id", ensureAuth, isAdmin, (req, res) => {
  try {
    let id = req.params.id;

    let { title, body, image } = req.body;

    Solution.findByIdAndUpdate(id, { title, body, image }).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

// Delete the record
server.delete("/:id", ensureAuth, isAdmin, (req, res) => {
  let id = req.params.id;

  Solution.findByIdAndRemove(id)
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
