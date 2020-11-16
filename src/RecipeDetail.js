import "./App.css";
import React, { useEffect, useState, useContext } from "react";
import { RecipeContext } from "./RecipesContext";

function RecipeDetail({ match }) {
  useEffect(() => {}, []);

  const { value, value2 } = useContext(RecipeContext);
  const [recipes, setRecipes] = value2;

  const idRecipe = match.params.id;

  const getRecipeById = () => {
    const detailOfRecipe = recipes.find(
      recipe => recipe.recipe.label === idRecipe
    ).recipe;
    return detailOfRecipe;
  };

  const recipeDetail = getRecipeById();

  console.log("idRecipe");
  console.log(idRecipe);
  console.log(recipes);
  console.log(getRecipeById());

  return (
    <div className="recipeDetail text">
      <h1>{recipeDetail.label}</h1>
      <h2>Made by {recipeDetail.source}</h2>
      <h3>{Math.round(recipeDetail.calories)} K</h3>
      <h4>Ingredients</h4>
      <ul>
        {recipeDetail.ingredients.map(ingredient => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
      <div className="tableAndImage">
        <table className="nutritionTable">
          <thead>
            <th colSpan="2">Nutrition Facts</th>
          </thead>
          <tbody>
            {recipeDetail.digest.map(item => (
              <tr>
                <td>{item.label}</td>
                <td>
                  {Math.round(item.total)} {item.unit}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <img className="imageRecipeDetail" src={recipeDetail.image} alt="" />
      </div>
      <a href={recipeDetail.url} className="instructionButton">
        Go to instructions
      </a>
    </div>
  );
}

export default RecipeDetail;
