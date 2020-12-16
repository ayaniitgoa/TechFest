import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#about-us" className="navbar-link">
        ABOUT US
      </a>
      <a href="/" className="navbar-link">
        EVENTS
      </a>
      <a href="#schedule-section" className="navbar-link">
        SCHEDULE
      </a>
      <a href="#sponsor-section" className="navbar-link">
        SPONSORS
      </a>
      <a href="#faq-section" className="navbar-link">
        FAQ
      </a>
      <a href="#contact-us-section" className="navbar-link last-link-nav">
        CONTACT US
      </a>
    </div>
  );
}

export default Navbar;
