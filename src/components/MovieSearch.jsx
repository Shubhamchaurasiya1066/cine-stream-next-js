"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import MovieGrid from "./MovieGrid";

export default function MovieSearch({ movies }) {
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleSearch = (query) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredMovies(filtered);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />

      {filteredMovies.length > 0 ? (
        <MovieGrid movies={filteredMovies} />
      ) : (
        <div className="text-center text-gray-400 text-2xl py-20">
          No movies found.
        </div>
      )}
    </>
  );
}