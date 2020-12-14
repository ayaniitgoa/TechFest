import React from "react";
import "./Navbar.css";
const current = "#";

function Navbar() {
  return (
    <div class="navbar-section">
      <nav>
        <div class="nav-fields">
          <div class="nav-text" id="nav-text">
            <div class="nav-title"><a href={current}>ABOUT US</a></div>
            <div class="vline"></div>
            <div class="nav-title"><a href={current}>EVENTS</a></div>
            <div class="vline"></div>
            <div class="nav-title"><a href={current}>SCHEDULE</a></div>
            <div class="vline"></div>
            <div class="nav-title"><a href={current}>SPONSORS</a></div>
            <div class="vline"></div>
            <div class="nav-title"><a href={current}>FAQ</a></div>
            <div class="vline"></div>
            <div class="nav-title"><a href={current}>CONTACT US</a></div>
          </div>
        </div>
        <div class="ham-div">
          <i id="ham" class="fas fa-bars hamburger"></i>
        </div>
  
        
      </nav>
      
    </div>
  );
}

export default Navbar;
