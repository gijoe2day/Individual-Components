import React, { useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

function MovieList() {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} key={movie.id} price={movie.price} />
      ))}
    </div>
  );
}

export default MovieList;
