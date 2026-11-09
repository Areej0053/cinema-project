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