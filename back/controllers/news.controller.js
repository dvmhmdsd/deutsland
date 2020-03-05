const express = require("express");

const path = require("path");

const server = express.Router();
const News = require("../models/News.model");

const ensureAuth = require("../helpers/ensureAuth");
const isAdmin = require("../helpers/isAdmin");
const imageUploader = require("../helpers/uploadImageHandler");

const Resize = require("../helpers/imageResizer");

// Get the list
server.get("/list", async (req, res) => {
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
server.post(
  "/",
  ensureAuth,
  isAdmin,
  imageUploader.single("image"),
  async (req, res) => {
    try {
      if (!req.file) {
        res.status(401).json({ message: "Please provide an image" });
      }

      let image = await saveImage(req.file.buffer);

      let { title, body, date, comments } = req.body;

      let newsItem = new News({
        title,
        body,
        date,
        image,
        comments
      });

      newsItem.save().then(record => {
        res.send(record);
        res.sendStatus(201);
      });
    } catch {
      throwError();
    }
  }
);

let saveImage = async (imageBuffer) => {
  const imagesPath = path.join(__dirname, "/public/images-upload");
  const resizer = new Resize(imagesPath);

  return await resizer.saveFile(imageBuffer);
}

// Edit the record
server.put("/:id", ensureAuth, isAdmin, (req, res) => {
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
server.delete("/:id", ensureAuth, isAdmin, (req, res) => {
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
