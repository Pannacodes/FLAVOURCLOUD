import { useState } from "react";

const AddRecipeForm = ({ setRecipes }) => {
  const [name, setName] = useState("");

  const [veg, setVeg] = useState(false);

  const [category, setCategory] = useState("");

  const [image, setImage] = useState("");

  const [calories, setCalories] = useState("");

  const [servings, setServings] = useState("");

  const [ingredients, setIngredients] = useState("");

  const [steps, setSteps] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now(),

      name: name,

      veg: veg,

      category: category.trim(),

      image: image,

      calories: Number(calories),

      servings: Number(servings),

      // Convert text into arrays

      ingredients: ingredients

        .split(",")

        .map((ingredient) => ingredient.trim())

        .filter((ingredient) => ingredient !== ""),

      steps: steps

        .split(",")

        .map((step) => step.trim())

        .filter((step) => step !== ""),
    };

    setRecipes((currentRecipes) => [...currentRecipes, newRecipe]);

    // Reset form

    setName("");

    setVeg(false);

    setCategory("");

    setImage("");

    setCalories("");

    setServings("");

    setIngredients("");

    setSteps("");
  };

  return (
    <form className="add-recipe-form" onSubmit={handleSubmit}>
      <h2>Add a Recipe</h2>

      {/* Name */}

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
          placeholder="https://..."
          required
        />
      </label>

      {/* Calories */}

      <label>
        Calories:
        <input
          type="number"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
          min="0"
          required
        />
      </label>

      {/* Servings */}

      <label>
        Servings:
        <input
          type="number"
          value={servings}
          onChange={(event) => setServings(event.target.value)}
          min="1"
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
          placeholder="Sauté spices, Add tomato puree, Cook paneer, Add cream, Simmer"
          required
        />
      </label>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
