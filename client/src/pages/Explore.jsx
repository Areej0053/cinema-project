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
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
export default function MovieFilters({
  search, setSearch, genre, setGenre, sort, setSort, genres,
}) {
  return (
    <div className="movie-filters">
      <label>
        Search
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by title..."
        />
      </label>
      <label>
        Genre
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {genres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </label>
      <label>
        Sort by
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="rating">Highest rating</option>
          <option value="year">Newest first</option>
          <option value="title">Title A-Z</option>
        </select>
      </label>
    </div>
  );
}
import { useState } from "react";
import movies from "../data/movies";
import MovieFilters from "../components/MovieFilters";
import MovieGrid from "../components/MovieGrid";
import "../styles/explore.css";

export default function Explore() {
  const [allMovies] = useState(movies);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("rating");

  const genres = ["All", ...new Set(allMovies.map((m) => m.genre))];

  const filtered = allMovies
    .filter((m) => m.title.toLowerCase().includes(search.trim().toLowerCase()))
    .filter((m) => genre === "All" || m.genre === genre);

  const result = [...filtered].sort((a, b) => {
    if (sort === "rating") return b.rating - a.rating;
    if (sort === "year") return b.releaseYear - a.releaseYear;
    return a.title.localeCompare(b.title);
  });

  const resetFilters = () => {
    setSearch("");
    setGenre("All");
    setSort("rating");
  };

  return (
    <main className="explore">
      <h1>Featured Movies</h1>
      <MovieFilters
        search={search} setSearch={setSearch}
        genre={genre} setGenre={setGenre}
        sort={sort} setSort={setSort}
        genres={genres}
      />
      <p className="result-count">{result.length} movies found</p>

      {result.length === 0 ? (
        <div className="empty-state">
          <p>No movies found.</p>
          <button onClick={resetFilters}>Reset filters</button>
        </div>
      ) : (
        <MovieGrid movies={result} />
      )}
    </main>
  );
}