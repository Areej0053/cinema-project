
import { useState } from "react";
import movies from "../data/movies";
import collections from "../data/collections";
import MovieFilters from "../components/MovieFilters";
import MovieGrid from "../components/MovieGrid";
import MovieCollection from "../components/MovieCollection";
import "../styles/explore.css";

export default function Explore() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");
  const [sort, setSort] = useState("rating");

  const genres = ["All", ...new Set(movies.map((m) => m.genre))];

  const searchText = search.trim().toLowerCase();

  // Apply search and genre filters to individual movies.
  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(searchText);

    const matchesGenre =
      genre === "All" || movie.genre === genre;

    return matchesSearch && matchesGenre;
  });

  // Sort movies using the selected sorting option.
  const sortMovies = (items) => {
    return [...items].sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating;
      if (sort === "year") return b.releaseYear - a.releaseYear;
      return a.title.localeCompare(b.title);
    });
  };

  // Identify movies that belong to a collection.
  const collectionMovieIds = new Set(
    collections.flatMap((collection) => collection.movieIds)
  );

  // Build collections using the filtered movies.
  const visibleCollections = collections
    .map((collection) => {
      const collectionMovies = movies.filter((movie) =>
        collection.movieIds.includes(movie.id)
      );

      const matchesCollectionName = collection.title
        .toLowerCase()
        .includes(searchText);

      const matchingMovies = collectionMovies.filter((movie) => {
        const matchesSearch =
          matchesCollectionName ||
          movie.title.toLowerCase().includes(searchText);

        const matchesGenre =
          genre === "All" || movie.genre === genre;

        return matchesSearch && matchesGenre;
      });

      return {
        ...collection,
        movies: sortMovies(matchingMovies),
      };
    })
    .filter((collection) => collection.movies.length > 0);

  // Movies without a franchise remain standalone cards.
  const standaloneMovies = sortMovies(
    filteredMovies.filter(
      (movie) => !collectionMovieIds.has(movie.id)
    )
  );

  // Sort collections using their highest-rated or newest movie.
  const sortedCollections = [...visibleCollections].sort((a, b) => {
    if (sort === "rating") {
      return b.movies[0].rating - a.movies[0].rating;
    }

    if (sort === "year") {
      return b.movies[0].releaseYear - a.movies[0].releaseYear;
    }

    return a.title.localeCompare(b.title);
  });

  const totalResults =
    standaloneMovies.length +
    visibleCollections.reduce(
      (total, collection) => total + collection.movies.length,
      0
    );

  const resetFilters = () => {
    setSearch("");
    setGenre("All");
    setSort("rating");
  };

  return (
    <main className="explore">
      <h1>Explore CineVerse</h1>

      <MovieFilters
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        sort={sort}
        setSort={setSort}
        genres={genres}
      />

      <p className="result-count">
        {totalResults} movies found
      </p>

      {totalResults === 0 ? (
        <div className="empty-state">
          <p>No movies found.</p>
          <button onClick={resetFilters}>
            Reset filters
          </button>
        </div>
      ) : (
        <>
          {sortedCollections.length > 0 && (
            <section className="collections-section">
              <h2>Movie Collections</h2>
              <p className="section-subtitle">
                Discover your favorite movie franchises
                and explore every chapter.
              </p>

              <div className="collections-grid">
                {sortedCollections.map((collection) => (
                  <MovieCollection
                    key={collection.id}
                    collection={collection}
                    movies={collection.movies}
                  />
                ))}
              </div>
            </section>
          )}

          {standaloneMovies.length > 0 && (
            <section className="standalone-section">
              <h2>More Movies to Explore</h2>
              <MovieGrid movies={standaloneMovies} />
            </section>
          )}
        </>
      )}
    </main>
  );
}
