const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const path = require("path");

const app = express();

const { URI, SECRET_KEY } = require("./config/config-keys");

// Connect to the DB
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to DB"))
  .catch(err => console.log(err));

// Parse the body
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

// Allow cors
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

// Add the session
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
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

const clientsController = require("./controllers/clients.controller");
app.use("/api/clients", clientsController);

const careersController = require("./controllers/careers.controller");
app.use("/api/careers", careersController);

const messageController = require("./controllers/messages.controller");
app.use("/api/messages", messageController);

const dtpediaController = require("./controllers/dtpedia.controller");
app.use("/api/dtpedia", dtpediaController);

const newsController = require("./controllers/news.controller");
app.use("/api/news", newsController);

const userController = require("./controllers/user.controller");
app.use("/api/users", userController);

// Connect to port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`The app is listening on port ${PORT}!`));
