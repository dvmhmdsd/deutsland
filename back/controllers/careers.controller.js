const express = require("express");

const server = express.Router();
const Career = require("../models/Career.model");

const ensureAuth = require("../helpers/ensureAuth");

// Get the list
server.get("/list", async (req, res) => {
  try {
    let careerList = await Career.find({});
    res.send(careerList);
  } catch {
    throwError();
  }
});

// Get single news
// server.get("/:id", async (req, res) => {
//   try {
//     let careerItem = await Career.findById(req.params.id);
//     res.send(careerItem);
//   } catch {
//     throwError();
//   }
// });

// Create a new record
server.post("/", ensureAuth, (req, res) => {
  let { title, body } = req.body;
  console.log(body)
  let careerItem = new Career({
    title,
    body
  });

  careerItem.save().then(record => {
    res.send(record);
  }).catch(() => {
    res.send(400)
  })
});

// Edit the record
server.put("/:id", ensureAuth, (req, res) => {
  try {
    let id = req.params.id;

    let { title, body } = req.body;

    Career.findByIdAndUpdate(id, { title, body }).then(() => {
      res.sendStatus(204);
    });
  } catch {
    throwError();
  }
});

// Delete the record
server.delete("/:id", ensureAuth, (req, res) => {
  let id = req.params.id;

  Career.findByIdAndRemove(id)
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
