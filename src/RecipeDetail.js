import "./App.css";
import React, { useEffect, useState } from "react";

function RecipeDetail({}) {
  useEffect(() => {
    fetchRecipe();
  }, []);

  const [recipe, setRecipe] = useState([]);
}
