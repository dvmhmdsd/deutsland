const express = require("express");

const server = express.Router();
const News = require("../models/News.model");

// Get the list
server.get("/", async (req, res) => {
  try {
    let newsList = await News.find({});
    res.send(newsList);
  } catch {
    throwError();
  }
});

// Get single news
server.get("/:id", async (req, res) => {
  try {
    let newsItem = await News.findById(req.params.id);
    res.send(newsItem);
  } catch {
    throwError();
  }
});

// Create a new record
server.post("/", (req, res) => {
  try {
    let { title, body, date, comments } = req.body;

    let newsItem = new News({
      title,
      body,
      date,
      comments
    });

    newsItem.save().then(record => {
      res.send(record);
      res.sendStatus(201);
    });
  } catch {
    throwError();
  }
});

// Edit the record
server.put("/:id", (req, res) => {
  try {
    let id = req.params.id;

    let { title, body, date } = req.body;

    News.findByIdAndUpdate(id, { title, body, date }).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

// Delete the record
server.delete("/:id", (req, res) => {
  try {
    let id = req.params.id;

    News.findOneAndDelete(id).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

let throwError = () => {
  throw new Error("An error occurred in the db");
};

module.exports = server;
