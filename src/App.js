import React, { useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import MainTodo from "./Components/Todo";
import MovieList from "./Components/MovieList";
import Nav from "./Components/Nav";
import AddMovie from "./AddMovie";
import { MovieProvider } from "./MovieContext";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-5">
          <MainTodo />
        </div>
        <div className="col-5">
          <Weather />
        </div>
      </div>
      <div></div>
      <MovieProvider>
        <div className="movies">
          <Nav />
          <AddMovie />
          <MovieList />
        </div>
      </MovieProvider>
    </div>
  );
}

export default App;
