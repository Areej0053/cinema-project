const requireAuth = (req, res, next) => {

  // check if user is logged in
  if (!req.session || !req.session.userId) {
    return res.status(401).json({
      message: "Please login first"
    });
  }

  next();
};

module.exports = requireAuth;