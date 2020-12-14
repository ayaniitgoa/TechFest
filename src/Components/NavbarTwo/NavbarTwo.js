import React from "react";
import "./NavbarTwo.css";

function NavbarTwo() {
  return (
    <div className="navbartwo">
      <a href="#about-us" className="nav-two-link">
        ABOUT US
      </a>
      <a href="/" className="nav-two-link">
        EVENTS
      </a>
      <a href="/" className="nav-two-link">
        SCHEDULE
      </a>
      <a href="#sponsor-section" className="nav-two-link">
        SPONSORS
      </a>
      <a href="#faq-section" className="nav-two-link">
        FAQ
      </a>
      <a href="#contact-us-section" className="nav-two-link">
        CONTACT US
      </a>
    </div>
  );
}

export default NavbarTwo;
