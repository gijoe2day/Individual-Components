import React, { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="">
      <h3>Add your favourite movies here:</h3>
      <h2 className="pl-2">List of movies: {movies.length} </h2>
    </div>
  );
};

export default Nav;
