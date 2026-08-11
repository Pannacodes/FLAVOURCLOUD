import logo from "../assets/FlavourCloud-logo.png"
import "./Navbar.css";

function Navbar() {
  return (
  <div className="home-container">
    <header className = "navbar">
        <img src={logo} alt="Flavour Cloud logo" className = "logo"/>
        <h1>
            Welcome to FlavourCloud !
        </h1>
    </header>
  </div>
  )
}

export default Navbar;
