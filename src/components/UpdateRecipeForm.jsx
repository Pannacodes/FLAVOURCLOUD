import { useState } from "react";

import { useNavigate, useParams } from "react-router-dom";

const UpdateRecipeForm = ({ recipes, setRecipes }) => {
  const { id } = useParams();

  const navigate = useNavigate();

  const recipe = recipes.find((recipe) => recipe.id === Number(id));

  // Hooks MUST be called before the conditional return

  const [name, setName] = useState(recipe?.name || "");

  const [veg, setVeg] = useState(recipe?.veg || false);

  const [category, setCategory] = useState(recipe?.category || "");

  const [image, setImage] = useState(recipe?.image || "");

  const [calories, setCalories] = useState(recipe?.calories || "");

  const [servings, setServings] = useState(recipe?.servings || "");

  const [ingredients, setIngredients] = useState(
    recipe?.ingredients?.join(", ") || "",
  );

  const [steps, setSteps] = useState(recipe?.steps?.join(", ") || "");

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

      ingredients: ingredients

        .split(",")

        .map((ingredient) => ingredient.trim())

        .filter((ingredient) => ingredient !== ""),

      steps: steps

        .split(",")

        .map((step) => step.trim())

        .filter((step) => step !== ""),
    };

    const updatedRecipes = recipes.map((recipe) =>
      recipe.id === Number(id) ? updatedRecipe : recipe,
    );

    setRecipes(updatedRecipes);

    navigate(`/recipes/${id}`);
  };

  return (
    <form className="update-recipe-form" onSubmit={handleSubmit}>
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
          onChange={(event) => setVeg(event.target.value === "true")}
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

      {/* Ingredients */}

      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(event) => setIngredients(event.target.value)}
          placeholder="Paneer, Butter, Tomatoes, Cream, Spices"
          required
        />
      </label>

      {/* Steps */}

      <label>
        Steps:
        <textarea
          value={steps}
          onChange={(event) => setSteps(event.target.value)}
          placeholder="Sauté spices, Add tomato puree, Cook paneer"
          required
        />
      </label>

      <button type="submit">Save Changes</button>
    </form>
  );
};

export default UpdateRecipeForm;
