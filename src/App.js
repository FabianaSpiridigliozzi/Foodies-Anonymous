//import React, { useEffect, useState } from "react";
//import Recipe from "./Recipe";
import About from "./About";
import SearchRecipes from "./SearchRecipes";
import Nav from "./Nav";
import RecipeDetail from "./RecipeDetail";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RecipeProvider } from "./RecipesContext";

function App() {
  return (
    <RecipeProvider>
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/searchrecipes" exact component={SearchRecipes} />
            <Route path="/searchrecipes/:id" component={RecipeDetail} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </Router>
    </RecipeProvider>
  );
}

const Home = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default App;
