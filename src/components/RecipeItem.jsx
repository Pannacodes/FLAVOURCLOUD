// RecipeItem.jsx
import React from "react";

const RecipeItem = ({ recipe, onDelete }) => {
  

  return (
    <li className="recipe-item">
      <div>
        <h3>{recipe.name}</h3>
        <p>Category: {recipe.category}</p>
      </div>

      {/* Conditional Rendering */}
      <span className="status">
       {recipe.veg ? "🌱 Vegetarian" : "🥩 Contains meat"}
      </span>

      {/* Delete Button */}
      <button className="delete-btn" onClick={() => onDelete(recipe.id)}>
        Delete
      </button>
    </li>
  );
};

export default RecipeItem;
