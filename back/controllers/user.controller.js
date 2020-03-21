const express = require("express");

const passport = require("passport");

const ensureAuth = require("../helpers/ensureAuth");
const isAdmin = require("../helpers/isAdmin");

const User = require("../models/User.model");

const server = express.Router();

server.get("/list", async (request, response) => {
  let usersList;
  try {
    usersList = await User.find({});
    response.send(usersList);
  } catch (error) {
    throw error;
  }
});

server.post("/register", async (request, response) => {
  let { name, email, password, type } = request.body;


  User.find({ email }).then((usr, err) => {
    if (usr.length > 0) {
      console.log("user existed")
      return response.status(400).json({ message: "User already exists" });
    } else {
      let user = new User({
        name,
        email,
        password,
        type
      });

      // Save the user
      user.save().then(() => {
        response.sendStatus(201);
      });
    }
  });
});

server.put("/:id", ensureAuth, isAdmin, async (request, response) => {
  let { name, email, password, type } = request.body;
  let id = request.params.id;

  // Save the user
  User.findByIdAndUpdate(id, { name, email, password, type }).then(() => {
    response.sendStatus(200);
  });
});

server.delete("/:id", ensureAuth, isAdmin, (request, response) => {
  let id = request.params.id;

  User.findByIdAndDelete(id).then(() => {
    response.sendStatus(200);
  });
});

server.post("/login", (request, response, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return response.sendStatus(400);

    if (!user) return response.status(404).json({ message: "User Not Found" });

    request.logIn(user, err => {
      if (err) return response.json({ message: err });

      return response
        .status(200)
        .json({ success: "User logged in", user: request.user });
    });
  })(request, response, next);
});

server.get("/isLoggedIn", (request, response) => {
  if (request.user) response.sendStatus(200);
  else response.sendStatus(404);
});

server.get("/logout", (req, res) => {
  req.logout();
  res.sendStatus(200);
});

module.exports = server;
