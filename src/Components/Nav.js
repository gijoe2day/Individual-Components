import React, { useContext } from "react";
import { MovieContext } from "../MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div className="nav nav-bar container-fluid">
      <h3>My name</h3>
      <h2>List of movies: {movies.length} </h2>
    </div>
  );
};

export default Nav;
