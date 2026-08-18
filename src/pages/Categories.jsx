import { useNavigate } from "react-router-dom";
import "./Categories.css";

const Categories = ({ recipes }) => {
  const navigate = useNavigate();

  const categories = [...new Set(recipes.map((recipe) => recipe.category))];

  return (
    <div className="categories-page">
      <h1>Recipe Categories</h1>

      <div className="categories-grid">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() =>
              navigate(`/recipes?category=${encodeURIComponent(category)}`)
            }
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
