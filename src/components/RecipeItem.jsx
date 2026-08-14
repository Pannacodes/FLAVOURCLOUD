// RecipeItem.jsx

import { useNavigate } from "react-router-dom";

const RecipeItem = ({ recipe, onDelete }) => {
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

      {/* Conditional Rendering */}
      <span className="status">
       {recipe.veg ? "🌱 Vegetarian" : "🥩 Contains meat"}
      </span>
      

      {/* Delete Button */}
      <button className="delete-btn" onClick={() => onDelete(recipe.id)}>
        Delete
      </button>

      {/* Edit Button */}
      
      <button
        className="edit-btn"
        onClick={handleEdit}>
        Edit
      </button>

    </li>
  );
};


export default RecipeItem;
