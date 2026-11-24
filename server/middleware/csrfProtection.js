const csrfProtection = (req, res, next) => {
  // allow read-only requests
  if (["GET", "HEAD", "OPTIONS"].includes(req.method)) {
    return next();
  }

  // check request origin
  const origin = req.get("origin");

  if (!origin || origin !== process.env.CLIENT_URL) {
    return res.status(403).json({
      message: "Request origin is not allowed"
    });
  }

  next();
};

module.exports = csrfProtection;