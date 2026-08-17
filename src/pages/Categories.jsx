import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    "Indian",

    "Breakfast",

    "Healthy",

    "Seafood",

    "Italian",

    "Western",

    "Fast Food",

    "Middle Eastern",

    "Asian",
  ];

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
