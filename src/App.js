import React, { useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import MainTodo from "./Components/Todo";
import Count from "./Components/Count";
import MainNav from "./MainNav";
import MainExpense from "./Components/ExpenseTrackerFolder/MainExpense";
import MainMovie from "./Components/MovieFolder/MainMovie";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import MainInstagram from "./Components/instagram/MainInstagram";

function App() {
  return (
    <Router>
      <div>
        <MainNav />
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/todos" component={MainTodo} />
          <Route path="/movie" component={MainMovie} />
          <Route path="/count" component={Count} />
          <Route path="/expensetracker" component={MainExpense} />
          <Route path="/movies" component={MainMovie} />
          <Route path="/instagram-react" component={MainInstagram} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
