import { useState } from "react";

import { Link, useSearchParams } from "react-router-dom";

import recipes from "../data/recipes.json";

import "./AllRecipes.css";

const AllRecipes = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the category from the URL
  const categoryFromURL = searchParams.get("category") || "";

  // Extract unique categories
  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  // Filter recipes based on the URL category
  const filteredRecipes = categoryFromURL
    ? recipes.filter((recipe) => recipe.category === categoryFromURL)
    : recipes;

  // When dropdown changes
  const handleCategoryChange = (event) => {
    const category = event.target.value;

    if (category) {
      setSearchParams({ category: category });
    } else {
      // If "All" is selected, remove the category from the URL

      setSearchParams({});
    }
  };

  return (
    <div className="all-recipes">
      <h1>{categoryFromURL ? `${categoryFromURL} Recipes` : "All Recipes"}</h1>

      {/* Category Filter */}

      <div className="category-filter">
        <label>Select Category: </label>

        <select value={categoryFromURL} onChange={handleCategoryChange}>
          <option value="">All</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
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

      {filteredRecipes.length === 0 && (
        <p>No recipes found in this category.</p>
      )}
    </div>
  );
};

export default AllRecipes;
