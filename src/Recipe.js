import React from "react";
//Import a module of css. This means you can use a style in multiple files. "style" is just a name that we give it
import style from "./recipe.module.css";
import { Link } from "react-router-dom";

//The properties I'm going to use in the component
const Recipe = ({ title, calories, image, ingredients, id }) => {
  return (
    <Link to={`/searchrecipes/${id}`}>
      <div className={style.recipe}>
        <h1>{title}</h1>
        <p>{Math.round(calories)} K</p>
        {/* <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol> */}
        <img className={style.image} src={image} alt="" />
      </div>
    </Link>
  );
};

export default Recipe;
