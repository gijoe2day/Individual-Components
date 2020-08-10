import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$8",
      id: 8783,
    },
    {
      name: "Angels Beginnings",
      price: "$9",
      id: 8787,
    },
    {
      name: "Hard Rock The Movie",
      price: "$15",
      id: 8723,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
