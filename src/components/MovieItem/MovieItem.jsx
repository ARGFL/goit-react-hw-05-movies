import { useState } from "react";
import { searchMovies } from "../services/movieAPI";
import MovieList from "../components/MovieList/MovieList";
import SearchBar from "../components/SearchBar/SearchBar";

function Movies() {
  const [movies, setMovies] = useState([]);
  
  const handleSearch = (query) => {
    searchMovies(query).then(setMovies);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <MovieList movies={movies} />
    </div>
  );
}

export default Movies;
