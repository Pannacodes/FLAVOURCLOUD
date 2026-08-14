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

        <li>Categories</li>
      </ul>
    </aside>
  );
}
