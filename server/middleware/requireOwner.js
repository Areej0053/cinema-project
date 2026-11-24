const mongoose = require("mongoose");
const Movie = require("../models/Movie");

const requireOwner = async (req, res, next) => {
  try {
    // check if user is logged in
    if (!req.session || !req.session.userId) {
      return res.status(401).json({
        message: "Please login first"
      });
    }

    // validate movie id
    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        message: "Invalid movie ID"
      });
    }

    // find the movie
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    // check movie ownership
    if (
      !movie.owner ||
      movie.owner.toString() !== req.session.userId
    ) {
      return res.status(403).json({
        message: "You are not allowed to modify this movie"
      });
    }

    req.movie = movie;
    next();

  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong"
    });
  }
};

module.exports = requireOwner;