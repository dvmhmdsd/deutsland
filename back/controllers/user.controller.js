const express = require("express");
const bcrypt = require("bcryptjs");
const passport = require("passport");

const ensureAuth = require("../helpers/ensureAuth");
const isAdmin = require("../helpers/isAdmin");

const User = require("../models/User.model");

const server = express.Router();

server.get("/list", ensureAuth, isAdmin, async (request, response) => {
  let usersList;
  try {
    usersList = await User.find({});
  } catch (error) {
    throw error;
  }

  // Remove password from list
  let usersArray = [];
  usersList.map(user => {
    let { id, name, email, type } = user;

    usersArray.push({ id, name, email, type });
  });

  // Send the list
  response.send(usersArray);
});

server.post("/register", ensureAuth, isAdmin, async (request, response) => {
  let { name, email, password, type } = request.body;

  let user = new User({
    name,
    email,
    password,
    type
  });

  // Hash the password before save
  let salt, hash;
  try {
    salt = await bcrypt.genSalt(10);
    hash = await bcrypt.hash(user.password, salt);
  } catch (err) {
    throw err;
  }

  user.password = hash;

  // Save the user
  user.save().then(() => {
    response.sendStatus(201);
  });
});

server.put("/:id", ensureAuth, isAdmin, async (request, response) => {
  let { name, email, password, type } = request.body;
  let id = req.params.id;
  let user = new User({
    name,
    email,
    password,
    type
  });

  // Hash the password before save
  let salt, hash;
  try {
    salt = await bcrypt.genSalt(10);
    hash = await bcrypt.hash(user.password, salt);
  } catch (err) {
    throw err;
  }

  user.password = hash;

  // Save the user
  User.findByIdAndUpdate(id, user).then(() => {
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
