import "./Footer.css";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      
      {/* Brand Section */}
      <div className="footer-brand">
        <h2>Flavour Cloud</h2>
        <p>Deploy Deliciousness</p>
      </div>

      {/* Quick Links */}
      <div className="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/recipes">Recipes</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <h4>Connect With Us</h4>
        <div className="social-icons">
          <a href="https://github.com/Pannacodes/FLAVOURCLOUD.git" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Flavour Cloud. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
