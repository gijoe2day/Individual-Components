import React from "react";
import Photo from "./home_react.png";

const Home = () => {
  return (
    <div>
      <div className="card">
        <img className="card-img" src={Photo} alt="Card image" />
        <div className="card-img-overlay">
          <h1 className="card-text mt-5 align-items-center text-primary"></h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
