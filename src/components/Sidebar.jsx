import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Deploy Deliciousness</h3>

      <ul className="sidebar-list">
        <li onClick={() => navigate("/recipes/add")}>Add Recipes</li>
        <li onClick={() => navigate("/categories")}>Categories</li>
        <li onClick={() => navigate("/favorites")}>Favorites ❤️</li>
        <li onClick={() => navigate("/recipes?veg=all")}>Veg 🌱/ Non-Veg 🥩</li>
      </ul>
    </aside>
  );
}
