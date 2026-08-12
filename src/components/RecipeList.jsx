// RecipeList.jsx
import { useState } from "react";
import RecipesData from "../data/recipes.json";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  const [recipes, setRecipes] = useState(RecipesData);

  const handleDelete = (id) => {
    setRecipes(recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>

      <ul>
        {recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            onDelete={handleDelete}
          />
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
