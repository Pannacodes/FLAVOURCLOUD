import { useParams, useNavigate } from "react-router-dom";
import "./RecipeDetails.css";

const ItemDetails = ({ recipes }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  const handleEdit = () => {
    navigate(`/recipes/${recipe.id}/edit`);
  };

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="item-details">
      <button
        className="back-to-recipe-btn"
        onClick={() => navigate("/recipes")}
      >
        ← Back to Recipes
      </button>

      <h1>{recipe.name}</h1>

      <img src={recipe.image} alt={recipe.name} className="recipe-img" />

      <p>
        <strong>Category:</strong> {recipe.category}
      </p>

      <p>
        <strong>Calories:</strong> {recipe.calories}
      </p>

      <p>
        <strong>Servings:</strong> {recipe.servings}
      </p>

      <p>
        <strong>Type:</strong>{" "}
        {recipe.veg ? "🌱 Vegetarian" : "🥩 Contains meat"}
      </p>

      {/* Ingredients */}

      <h2>Ingredients</h2>

      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Steps */}

      <h2>Steps</h2>

      <ol>
        {recipe.steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ol>
      
      <div className="recipe-actions">
        <button className="edit-btn" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
