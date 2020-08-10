import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const AddMovie = (e) => {
    e.preventDefault();
    setMovies((prevmovies) => [...prevmovies, { name: name, price: price }]);
  };

  return (
    <form onSubmit={AddMovie}>
      <input
        type="text"
        name="name"
        value={name}
        onChange={updateName}
        placeholder="Add Movie Name"
      />
      <input
        type="text"
        name="price"
        value={price}
        onChange={updatePrice}
        placeholder="Add Movie Price"
      />
      <button className="btn btn-info">Submit</button>
    </form>
  );
};

export default AddMovie;
