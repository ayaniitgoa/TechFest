import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#about-us" className="navbar-link">
        <button className="nav-btn">
          <p>ABOUT US</p>
        </button>
      </a>
      <a href="#events-section" className="navbar-link">
        <button className="nav-btn">
          <p>EVENTS</p>
        </button>
      </a>
      <a href="#schedule-section" className="navbar-link">
        <button className="nav-btn">
          <p>SCHEDULE</p>
        </button>
      </a>
      <a href="#sponsor-section" className="navbar-link">
        <button className="nav-btn">
          <p>SPONSORS</p>
        </button>
      </a>
      <a href="#faq-section" className="navbar-link">
        <button className="nav-btn">
          <p>FAQ</p>
        </button>
      </a>
      <a href="#contact-us-section" className="navbar-link last-link-nav">
        <button className="nav-btn">
          <p className="nav-text-last">CONTACT US</p>
        </button>
      </a>
    </div>
  );
}

export default Navbar;
