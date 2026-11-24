const Movie = require("../models/Movie");

const requireOwner = async (req, res, next) => {
  try {
    // find the movie
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found"
      });
    }

    // check movie ownership
    if (movie.owner.toString() !== req.session.userId) {
      return res.status(403).json({
        message: "You are not allowed to modify this movie"
      });
    }

    req.movie = movie;
    next();

  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        message: "Invalid movie ID"
      });
    }

    return res.status(500).json({
      message: "Something went wrong"
    });
  }
};

module.exports = requireOwner;