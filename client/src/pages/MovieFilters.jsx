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