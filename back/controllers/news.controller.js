const express = require("express");

const server = express.Router();
const News = require("../models/News.model");

const ensureAuth = require("../helpers/ensureAuth");
const isAdmin = require("../helpers/isAdmin");

const redis = require("redis");

const redisClient = redis.createClient();

redisClient.on("error", err => {
  console.log(err);
});

// Get the list
server.get("/list", async (req, res) => {
  let newsList;

  try {
    newsList = await getFromCache("news");
    if (!newsList) {
      newsList = await News.find({});

      redisClient.setex("news", 3600, newsList);
    }

    res.json(newsList);
  } catch {
    throwError();
  }
});

let getFromCache = query => {
  return redisClient.get(query);
};

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
server.post("/", ensureAuth, isAdmin, async (req, res) => {
  let { title, body, image, date, comments } = req.body;

  let newsItem = new News({
    title,
    body,
    date,
    image,
    comments
  });

  newsItem.save().then(record => {
    res.send(record);
  });
});

// Edit the record
server.put("/:id", ensureAuth, isAdmin, (req, res) => {
  try {
    let id = req.params.id;

    let { title, body, date, image } = req.body;

    News.findByIdAndUpdate(id, { title, body, date, image }).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

// Delete the record
server.delete("/:id", ensureAuth, isAdmin, (req, res) => {
  let id = req.params.id;

  News.findByIdAndRemove(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      throwError();
    });
});

server.post("/:id/comment", (req, res) => {
  let id = req.params.id;
  let { name, body } = req.body;
  let comment = { name, body };
  News.findOneAndUpdate(id, { $push: { comments: comment } })
    .then(() => {
      res.sendStatus(200);
    })
    .catch(() => {
      throwError();
    });
});

server.delete("/comment/:id", ensureAuth, isAdmin, (req, res) => {
  let id = req.params.id;

  News.findOneAndUpdate(
    { "comments._id": id },
    { $pull: { comments: { _id: id } } }
  ).then((comment, err) => {
    if (err) res.sendStatus(401);
    res.sendStatus(200);
  });
});

let throwError = () => {
  throw new Error("An error occurred in the db");
};

module.exports = server;
