export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <img src={movie.poster} alt={`Poster of ${movie.title}`} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.genre} • {movie.releaseYear} • ⭐ {movie.rating}</p>
        <p className="movie-desc">{movie.description}</p>
      </div>
    </article>
  );
}