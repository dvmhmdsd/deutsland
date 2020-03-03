const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");

const app = express();

const { URI, SECRET_KEY } = require("./config/config-keys");

// Connect to the DB
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

// Parse the body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Add the session
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);

// Init the passport auth
require("./config/passport")(passport);
app.use(passport.initialize());
app.use(passport.session());

// Set the routes
app.get("*", (req, res, next) => {
  // get the authentication state of the user
  res.locals.user = req.user || null;

  next();
});

const newsController = require("./controllers/news.controller");
app.use("/api/news", newsController);

const userController = require("./controllers/user.controller");
app.use("/api/users", userController);

// Connect to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The app is listening on port ${PORT}!`));
