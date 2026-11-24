const session = require("express-session");
const MongoStore = require("connect-mongo");

const isProduction = process.env.NODE_ENV === "production";

// shared cookie settings
const cookieOptions = {
  httpOnly: true,
  secure: isProduction,
  sameSite: isProduction ? "none" : "lax",
  path: "/"
};

const sessionConfig = session({
  name: "cineverse.sid",
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,

  // store sessions in mongodb
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),

  cookie: {
    ...cookieOptions,
    maxAge: 24 * 60 * 60 * 1000
  }
});

module.exports = { sessionConfig, cookieOptions };