import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-box">
          <img src="/logo.png" alt="logo" className="footer-logo"/>

          <h2>శ్రీ శ్రీ కళావేదిక</h2>

          <p>
            International Literary, Cultural &
            Social Service Organization.
          </p>
        </div>

        <div className="footer-box">

          <h3>Quick Links</h3>

          <ul>

            <li><Link to="/home">Home</Link></li>

            <li><Link to="/about">About Us</Link></li>

            <li><Link to="/founder">Founder</Link></li>

            <li><Link to="/executive-members">Executive Members</Link></li>

            <li><Link to="/activities">Activities</Link></li>

            <li><Link to="/awards">Awards</Link></li>

          </ul>

        </div>

        <div className="footer-box">

          <h3>More</h3>

          <ul>

            <li><Link to="/gallery">Gallery</Link></li>

            <li><Link to="/events">Events</Link></li>

            <li><Link to="/publications">Publications</Link></li>

            <li><Link to="/membership">Membership</Link></li>

            <li><Link to="/contact">Contact</Link></li>

          </ul>

        </div>

        <div className="footer-box">

          <h3>Connect With Us</h3>

          <p>📍 Andhra Pradesh, India</p>

          <p>✉ info@srisrikalavedika.org</p>

          <p>📞 +91 XXXXX XXXXX</p>

          <div className="social">

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

        </div>

      </div>

      <hr />

      <div className="copyright">
  © {new Date().getFullYear()} Designed and Managed by{" "}
  <a
    href="https://www.hragroups.com/"
    target="_blank"
    rel="noopener noreferrer"
    className="hra-link"
  >
    HRA GROUPS PRIVATE LIMITED
  </a>
</div>

    </footer>
  );
}

export default Footer;