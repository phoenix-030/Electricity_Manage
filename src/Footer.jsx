import React from "react";
import "./assets/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-section">
          <h4>EB Reducer</h4>
          <p>
            Smart electricity bill calculator based on Tamil Nadu EB tariff.
          </p>
        </div>

        {/* Middle Section */}
        <div className="footer-section">
          <h4>Connect</h4>
          <a
            href="https://www.linkedin.com/in/harishkumar-v-3a34942a8/"  target="_blank"           rel="noreferrer"         >
            LinkedIn
          </a>
          <a
            href="https://github.com/phoenix-030"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        {/* Right Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><a href="mailto:hariskumar28950@gmail.com"> Email:  hariskumar28950@gmail.com</a> </p>
          <p>  <a href="tel:7845870038">Phone: 7845870038</a></p>
          <p>Location: Tamil Nadu, India</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} EB Reducer | Designed & Developed by Harish Kumar⚡
      </div>
    </footer>
  );
};

export default Footer;
