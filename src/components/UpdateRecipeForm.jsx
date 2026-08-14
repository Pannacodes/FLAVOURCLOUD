import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateRecipeForm = ({ recipes, setRecipes }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const recipe = recipes.find(
    (recipe) => recipe.id === Number(id)
  );

  const [name, setName] = useState(recipe?.name || "");
  const [veg, setVeg] = useState(recipe?.veg || false);
  const [category, setCategory] = useState(recipe?.category || "");
  const [image, setImage] = useState(recipe?.image || "");
  const [calories, setCalories] = useState(recipe?.calories || "");
  const [servings, setServings] = useState(recipe?.servings || "");

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedRecipe = {
      id: recipe.id,
      name: name,
      veg: veg,
      category: category,
      image: image,
      calories: Number(calories),
      servings: Number(servings),
    };

    // Replace the old recipe with the updated one
    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === Number(id) ? updatedRecipe : recipe
    );

    setRecipes(updatedRecipes);

    // Go back to the recipe details page
    navigate(`/recipes/${id}`);
  };

  return (
    <form
      className="update-recipe-form"
      onSubmit={handleSubmit}
    >
      <h1>Update Recipe</h1>

      {/* Recipe Name */}
      <label>
        Recipe name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </label>

      {/* Vegetarian */}
      <label>
        Vegetarian:
        <select
          value={veg}
          onChange={(event) =>
            setVeg(event.target.value === "true")
          }
        >
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </label>

      {/* Category */}
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        />
      </label>

      {/* Image */}
      <label>
        Image URL:
        <input
          type="url"
          value={image}
          onChange={(event) => setImage(event.target.value)}
          required
        />
      </label>

      {/* Calories */}
      <label>
        Calories:
        <input
          type="number"
          value={calories}
          min="0"
          onChange={(event) => setCalories(event.target.value)}
          required
        />
      </label>

      {/* Servings */}
      <label>
        Servings:
        <input
          type="number"
          value={servings}
          min="1"
          onChange={(event) => setServings(event.target.value)}
          required
        />
      </label>

      <button type="submit">
        Save Changes
      </button>
    </form>
  );
};

export default UpdateRecipeForm;