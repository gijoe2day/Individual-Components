import React from "react";
import MovieList from "./MovieList";
import Nav from "./Nav";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";

function MainMovie() {
  return (
    <div>
      <MovieProvider>
        <div className="">
          <Nav />
          <AddMovie />
          <MovieList />
        </div>
      </MovieProvider>
    </div>
  );
}

export default MainMovie;
