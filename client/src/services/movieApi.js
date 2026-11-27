const API = import.meta.env.VITE_API_URL;

async function request(path, options = {}) {
  const res = await fetch(`${API}${path}`, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  const data = await res.json().catch(() => null);
  if (!res.ok) throw new Error(data?.message || "Something went wrong");
  return data;
}

export async function getMovies() {
  const data = await request("/movies");
  return Array.isArray(data) ? data : data.movies;
}

export const getMovie = (id) => request(`/movies/${id}`);

export const createMovie = (movie) =>
  request("/movies", { method: "POST", body: JSON.stringify(movie) });

export const updateMovie = (id, movie) =>
  request(`/movies/${id}`, { method: "PUT", body: JSON.stringify(movie) });

export const deleteMovie = (id) =>
  request(`/movies/${id}`, { method: "DELETE" });