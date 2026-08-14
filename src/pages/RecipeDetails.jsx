import { useParams, useNavigate } from "react-router-dom";


const ItemDetails = ({recipes}) => {

  const { id } = useParams();
  const navigate = useNavigate();
  const recipe = recipes.find((r) => r.id === Number(id));

  if (!recipe) return <h2>Recipe not found</h2>;

  return (
    <div className="item-details" >
      <button className="back-to-recipe-btn" onClick={() => navigate("/recipes")}>
      ← Back to Recipes
    </button>
      <h1>{recipe.name}</h1>

      <img src={recipe.image} alt={recipe.name} className="recipe-img" />

      <p><strong>Category:</strong> {recipe.category}</p>
      <p><strong>Calories:</strong> {recipe.calories}</p>
      <p><strong>Servings:</strong> {recipe.servings}</p>

      {recipe.description && <p>{recipe.description}</p>}


      {recipe.ingredients && (
        <>
          <h3>Ingredients</h3>
          <ul>
            {recipe.ingredients.map((ing, index) => (
              <li key={index}>{ing}</li>
            ))}
          </ul>
        </>
      )}

      {recipe.steps && (
        <>
          <h3>Steps</h3>
          <ol>
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
};

export default ItemDetails;