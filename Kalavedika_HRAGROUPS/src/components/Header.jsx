import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Header.css";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="header">

      <div className="logo-section">
        <img src="/logo.png" alt="Sri Sri Kalavedika" className="logo" />

        <div>
          <h2>శ్రీ శ్రీ కళావేదిక</h2>
          <p>International Literary, Cultural & Social Service Organization</p>
        </div>
      </div>

      <button
        type="button"
        className="header-menu-toggle"
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle navigation menu"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        {isMobileMenuOpen ? "Close" : "Menu"}
      </button>

      <nav className={`header-nav ${isMobileMenuOpen ? "is-open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/founder">Founder</Link></li>
          <li><Link to="/executive-members">Executive Members</Link></li>
          <li><Link to="/chapters/andhra-pradesh">Committee Members</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/awards">Awards</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/publications">Publications</Link></li>
          <li><Link to="/membership">Membership</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      <div className={`header-social ${isMobileMenuOpen ? "is-open" : ""}`}>

        <a
          href="https://www.facebook.com/100068197433222/about/?_rdr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF />
        </a>

        <a
          href="https://www.youtube.com/@srisrikalavedika39"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>

      </div>

    </header>
  );
}

export default Header;