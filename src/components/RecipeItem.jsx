// RecipeItem.jsx

import { useNavigate } from "react-router-dom";

const RecipeItem = ({ recipe, onDelete, toggleFavorite, isFav }) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/recipes/${recipe.id}/edit`);
  };

  return (
    <li className="recipe-item">
      <div>
        <h3>{recipe.name}</h3>
        <p>Category: {recipe.category}</p>
      </div>

      <div className="recipe-actions">
        <span className="status">
          {recipe.veg ? "🌱 Vegetarian" : "🥩 Contains meat"}
        </span>
        <button className="delete-btn" onClick={() => onDelete(recipe.id)}>
          Delete
        </button>
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
        <button onClick={() => toggleFavorite(recipe)}>
          {isFav ? "❤️ Remove Favorite" : "🤍 Add to Favorites"}
        </button>
      </div>

    </li>
  );
};


export default RecipeItem;
