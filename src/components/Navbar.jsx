import { Link } from "react-router-dom";
import logo from "../assets/FlavourCloud-logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="home-container">
      <header className="navbar">
        <img src={logo} alt="Flavour Cloud logo" className="logo" />
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>

          <li>
            <Link to="/recipes">All Recipes</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default Navbar;
