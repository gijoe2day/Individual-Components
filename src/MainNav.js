import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/home">
          React Components
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link class="nav-link" to="/weather">
                Weather <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/todos">
                Todos
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/count">
                Counter
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/expensetracker">
                ExpenseTracker
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/movies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/instagram-react">
                Instagram React
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainNav;
