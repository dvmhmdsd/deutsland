const User = require("../models/User.model");

const LocalStrategy = require("passport-local").Strategy;

module.exports = passport => {
  passport.use(
    new LocalStrategy(
      {
        passReqToCallback: true,
        usernameField: "email"
      },
      (request, email, password, done) =>
        authenticateUser(request, email, password, done)
    )
  );

  // Set user's id in the cookie
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Get the user's id from the cookie
  passport.deserializeUser(async (id, done) => {
    User.findById(id).then((user, error) => {
      done(error, user);
    });
  });
};

let authenticateUser = async (request, email, password, done) => {
  let emailQuery = { email };

  let user;

  try {
    // Find the user by email
    user = await User.findOne(emailQuery);
  } catch {
    throw new Error("An error occurred while searching the user");
  }

  if (!user) {
    return done(null, false, { message: "Wrong Email" });
  }
  if (password === user.password) {
    return done(null, user);
  } else {
    return done(null, false, { message: "Wrong password" });

  }
};
