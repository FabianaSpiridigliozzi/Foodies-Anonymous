import React, { useEffect, useState, useContext } from "react";
import Recipe from "./Recipe";
import { RecipeContext } from "./RecipesContext";
import "./App.css";

const SearchRecipes = () => {
  //Because I passed an object of 2 values in Context.Provider. Get them from "RecipeContext" and pass them as values to "query" and "recipes"
  const { value, value2 } = useContext(RecipeContext);
  const [query, setQuery] = value;
  const [recipes, setRecipes] = value2;

  //Run getSearch whenever is submitted the form
  const getSearch = event => {
    //stop page refresh
    event.preventDefault();
    //set the query to event (submit of form), target (form, with "input" and "button" ), firstChild(input), value (what the user wrote in the input)
    setQuery(event.target.firstChild.value);
    event.target.firstChild.value = "";
  };

  return (
    <div className="App">
      <h1 className="title">Search recipes!</h1>
      {/*When user submits search, get it, pass it to query and send that fetch request to the API */}
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            id={recipe.recipe.label}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchRecipes;
