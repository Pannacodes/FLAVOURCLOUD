import { useState } from "react";

const AddRecipeForm = ({ setRecipes }) => {
  const [name, setName] = useState("");
  const [veg, setVeg] = useState(false);
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(""); // URL or Base64
  const [calories, setCalories] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  // NEW: toggle between URL upload and file upload
  const [uploadType, setUploadType] = useState("url");

  // Convert uploaded file → Base64
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result); // Base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      id: Date.now(),
      name,
      veg,
      category: category.trim(),
      image, // URL or Base64
      calories: Number(calories),
      servings: Number(servings),

      ingredients: ingredients
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i !== ""),

      steps: steps
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== ""),
    };

    setRecipes((prev) => [...prev, newRecipe]);

    // Reset form
    setName("");
    setVeg(false);
    setCategory("");
    setImage("");
    setCalories("");
    setServings("");
    setIngredients("");
    setSteps("");
    setUploadType("url");
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
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      {/* Vegetarian */}
      <label>
        Vegetarian:
        <select
          value={veg}
          onChange={(e) => setVeg(e.target.value === "true")}
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
          onChange={(e) => setCategory(e.target.value)}
          required
        />
      </label>

      {/* Image Upload Type */}
      <label>
        Image Upload:
        <select
          value={uploadType}
          onChange={(e) => {
            setUploadType(e.target.value);
            setImage("");
          }}
        >
          <option value="url">Upload via URL</option>
          <option value="file">Upload from device</option>
        </select>
      </label>

      {/* Image URL */}
      {uploadType === "url" && (
        <label>
          Image URL:
          <input
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://..."
            required
          />
        </label>
      )}

      {/* Local File Upload */}
      {uploadType === "file" && (
        <label>
          Upload Image:
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            required
          />
        </label>
      )}

      {/* Calories */}
      <label>
        Calories:
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
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
          onChange={(e) => setServings(e.target.value)}
          min="1"
          required
        />
      </label>

      {/* Ingredients */}
      <label>
        Ingredients:
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Paneer, Butter, Tomatoes, Cream"
          required
        />
      </label>

      {/* Steps */}
      <label>
        Steps:
        <textarea
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          placeholder="Sauté spices, Add tomato puree, Cook paneer"
          required
        />
      </label>

      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
