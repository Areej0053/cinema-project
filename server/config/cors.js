const cors = require("cors");

// allow requests from the frontend
const corsConfig = cors({
  origin: process.env.CLIENT_URL,
  credentials: true
});

module.exports = corsConfig;