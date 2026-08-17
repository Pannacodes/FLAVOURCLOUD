import { Link, useSearchParams } from "react-router-dom";
import "./AllRecipes.css";

const AllRecipes = ({ recipes }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCategory = searchParams.get("category") || "";
  const selectedVeg = searchParams.get("veg") || "";

  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory = !selectedCategory || recipe.category === selectedCategory;
    const matchesVeg =
      !selectedVeg ||
      selectedVeg === "all" ||
      recipe.veg === (selectedVeg === "true");

    return matchesCategory && matchesVeg;
  });

  const updateFilters = (filters) => {
    const nextFilters = {
      category: selectedCategory,
      veg: selectedVeg,
      ...filters,
    };

    Object.keys(nextFilters).forEach((key) => {
      if (!nextFilters[key] || nextFilters[key] === "all") {
        delete nextFilters[key];
      }
    });

    setSearchParams(nextFilters);
  };

  return (
    <div className="all-recipes">
      <h1>All Recipes</h1>

      {/* Category Filter */}
      <div className="category-filter">
        <label>Select Category: </label>

        <select
          value={selectedCategory}
          onChange={(event) => {
            updateFilters({ category: event.target.value });
          }}
        >
          <option value="">All</option>

          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="category-filter">
        <label htmlFor="veg-filter">Diet: </label>
        <select
          id="veg-filter"
          value={selectedVeg}
          onChange={(event) => updateFilters({ veg: event.target.value })}
        >
          <option value="">All</option>
          <option value="all">Vegetarian & non-vegetarian</option>
          <option value="true">Vegetarian</option>
          <option value="false">Non-vegetarian</option>
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
