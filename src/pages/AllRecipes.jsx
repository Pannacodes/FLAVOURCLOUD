import { useState } from "react";
import { Link } from "react-router-dom";
import recipes from "../data/recipes.json";
import "./AllRecipes.css"


const AllRecipes = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // Extract unique categories
  const categories = [...new Set(recipes.map((r) => r.category))];

  // Filter recipes by category
  const filteredRecipes = selectedCategory
    ? recipes.filter((r) => r.category === selectedCategory)
    : recipes;

  return (
    <div className="all-recipes">
      <h1>All Recipes</h1>

      {/* Category Filter */}
      <div className="category-filter">
        <label>Select Category: </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Recipe Titles */}
      <ul className="recipe-titles">
        {filteredRecipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllRecipes;