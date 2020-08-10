import React from "react";
import Bootstrap from "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Movie = ({ name, price }) => {
  return (
    <div className="card">
      <div className="card-title justify-content-center d-flex">
        <h3>{name}</h3>
      </div>
      <div className="justify-content-center d-flex">
        <h2>{price}</h2>
      </div>
    </div>
  );
};

export default Movie;
