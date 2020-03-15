const express = require("express");

const server = express.Router();
const Project = require("../models/Project.model");

const ensureAuth = require("../helpers/ensureAuth");
const isAdmin = require("../helpers/isAdmin");

// Get the list
server.get("/list", async (req, res) => {
  try {
    let projectsList;
    projectsList = await Project.find({});

    res.send(projectsList);
  } catch {
    throwError();
  }
});

// Create a new record
server.post("/", ensureAuth, isAdmin, async (req, res) => {
  let { title, body, image, type, country } = req.body;

  let projectItem = new Project({
    title,
    body,
    image,
    type,
    country
  });

  projectItem.save().then(record => {
    res.send(record);
  });
});

// Edit the record
server.put("/:id", ensureAuth, isAdmin, (req, res) => {
  try {
    let id = req.params.id;

    let { title, body, image, type, country } = req.body;

    Project.findByIdAndUpdate(id, { title, body, image, type, country }).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

// Delete the record
server.delete("/:id", ensureAuth, isAdmin, (req, res) => {
  let id = req.params.id;

  Project.findByIdAndRemove(id)
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
