
import { useState } from "react";
import MovieCard from "./MovieCard";

export default function MovieCollection({ collection, movies }) {
  const [expanded, setExpanded] = useState(false);

  const firstMovie = movies[0];

  if (!firstMovie) return null;

  return (
    <section className="movie-collection">
      <div className="collection-header">
        <img
          className="collection-poster"
          src={firstMovie.poster}
          alt={`${collection.title} poster`}
        />

        <div className="collection-info">
          <span className="collection-label">
            MOVIE COLLECTION
          </span>

          <h2>{collection.title}</h2>

          <p>
            {movies.length} Movies • {firstMovie.genre}
          </p>

          <p className="collection-description">
            Explore every chapter of this movie series,
            from the beginning to the latest adventure.
          </p>

          <button
            type="button"
            className="collection-button"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
          >
            {expanded
              ? "Hide Parts ▲"
              : `View All ${movies.length} Parts ▼`}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="collection-movies movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}
