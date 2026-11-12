
import { Link, useParams } from "react-router-dom";
import movies from "../data/movies";
import collections from "../data/collections";
import MovieGrid from "../components/MovieGrid";
import "../styles/movie-details.css";

export default function MovieDetails() {
  const { id } = useParams();

  // Find the selected movie using its ID.
  const movie = movies.find((item) => item.id === Number(id));

  // Show a friendly message if the movie doesn't exist.
  if (!movie) {
    return (
      <main className="movie-details-page">
        <div className="movie-not-found">
          <h1>Movie Not Found</h1>
          <p>Sorry, we couldn't find this movie.</p>
          <Link to="/" className="details-button">
            ← Back to Explore
          </Link>
        </div>
      </main>
    );
  }

  // Find the collection containing this movie.
  const collection = collections.find((item) =>
    item.movieIds.includes(movie.id)
  );

  // Find other movies from the same collection.
  const relatedMovies = collection
    ? collection.movieIds
        .filter((movieId) => movieId !== movie.id)
        .map((movieId) =>
          movies.find((item) => item.id === movieId)
        )
        .filter(Boolean)
    : [];

  return (
    <main className="movie-details-page">
      <Link to="/" className="back-link">
        ← Back to Explore
      </Link>

      <section className="movie-details-hero">
        <div className="details-poster">
          <img
            src={movie.poster}
            alt={`Poster of ${movie.title}`}
          />
        </div>

        <div className="details-content">
          <span className="details-label">
            CINEVERSE ORIGINAL COLLECTION
          </span>

          <h1>{movie.title}</h1>

          <div className="details-meta">
            <span>{movie.releaseYear}</span>
            <span>{movie.genre}</span>
            <span>⭐ {movie.rating}/10</span>
          </div>

          <h2>About This Movie</h2>
          <p className="details-description">
            {movie.description}
          </p>

          {collection && (
            <div className="details-collection-info">
              <span>🎬 Part of</span>
              <strong>{collection.title}</strong>
              <p>
                Explore all {collection.movieIds.length} movies
                in this franchise.
              </p>
            </div>
          )}

          <Link to="/" className="details-button">
            Explore More Movies →
          </Link>
        </div>
      </section>

      {relatedMovies.length > 0 && (
        <section className="related-movies">
          <h2>More From This Collection</h2>
          <p>
            Continue exploring the story with other movies
            from {collection.title}.
          </p>

          <MovieGrid movies={relatedMovies} />
        </section>
      )}
    </main>
  );
}
