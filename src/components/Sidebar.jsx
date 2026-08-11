import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h3 className="sidebar-title">Menu</h3>

      <ul className="sidebar-list">
        <li>Home</li>
        <li>Recipes</li>
        <li>Categories</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Privacy Policy</li>
        <li>Terms & Conditions</li>
      </ul>
    </aside>
  );
};



export default Sidebar