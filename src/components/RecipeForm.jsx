import { useState } from "react";

const AddRecipeForm = ({ recipes, setRecipes }) => {
  const [name, setName] = useState("");
  const [veg, setVeg] = useState(false);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now(),
      name: name,
      veg: veg,
      category: category,
      image: image,
      calories: Number(calories),
      servings: Number(servings),
    };

    setRecipes([...recipes, newRecipe]);

    // Reset form
    setName("");
    setVeg(false);
    setCategory("");
    setImage("");
    setCalories("");
    setServings("");
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

      <button type="submit">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
