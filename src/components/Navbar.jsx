import logo from "../assets/FlavourCloud-logo.png"
import "./Navbar.css";

function Navbar() {
  return (
  <div className="home-container">
    <header className = "navbar">
        <img src={logo} alt="Flavour Cloud logo" className = "logo"/>
         <ul className="nav-links">
        <li>Home</li>
        <li>About Us</li>
        <li>Contact</li>
        <li>Recipe List</li>
      </ul>
    </header>
  </div>
  )
}

export default Navbar;
