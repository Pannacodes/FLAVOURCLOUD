import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Deploy Deliciousness</h3>

      <ul className="sidebar-list">
        <li onClick={() => navigate("/recipes/add")}>
          Add Recipes
        </li>

        <li onClick={() => navigate("/categories")}>
          Categories
          </li>

          <li onClick={() => navigate("/Favorites")}>
          Favorites
          </li>

          <li onClick={() => navigate("/Veg-nonveg")}>
          Veg / Non-Veg
          </li>
      </ul>
    </aside>
  );
}
