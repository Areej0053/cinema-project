
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="movie-card-link"
      aria-label={`View details for ${movie.title}`}
    >
      <article className="movie-card">
        <img
          src={movie.poster}
          alt={`Poster of ${movie.title}`}
        />

        <div className="movie-info">
          <h3>{movie.title}</h3>

          <p>
            {movie.genre} • {movie.releaseYear} • ⭐ {movie.rating}
          </p>

          <p className="movie-desc">
            {movie.description}
          </p>

          <span className="movie-view-details">
            View Movie Details →
          </span>
        </div>
      </article>
    </Link>
  );
}
