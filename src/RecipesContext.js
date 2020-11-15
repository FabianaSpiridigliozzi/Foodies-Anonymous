import React, { useState, useEffect, createContext } from "react";

export const RecipeProvider = props => {
  const APP_ID = "21696a8b";
  const APP_KEY = "7e1961925719f2b1b73bf76081ed761f";

  //Create the variables and the "set" methods that you'll use in "SearchRecipes"
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  //Call the data from the API
  const getRecipes = async () => {
    //We are returned promises, so we need to use "await"
    const response = await fetch(
      //Use backticks
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    //Transform that data into a json
    const data = await response.json();
    //Only save as a state the hits (recipes) of the data
    setRecipes(data.hits);
  };

  return (
    //Pass 2 values to the provider by creating an object of values
    <RecipeContext.Provider
      value={{ value: [query, setQuery], value2: [recipes, setRecipes] }}
    >
      {props.children}
    </RecipeContext.Provider>
  );
};

export const RecipeContext = createContext();
