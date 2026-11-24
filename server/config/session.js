const session = require("express-session");
const MongoStore = require("connect-mongo");

const isProduction = process.env.NODE_ENV === "production";

const sessionConfig = session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,

  // save sessions in mongodb
  store: MongoStore.create({
    mongoUrl: process.env.MONGO_URI
  }),

  // cookie settings
  cookie: {
    httpOnly: true,
    secure: isProduction,
    sameSite: isProduction ? "none" : "lax",
    maxAge: 24 * 60 * 60 * 1000
  }
});

module.exports = sessionConfig;