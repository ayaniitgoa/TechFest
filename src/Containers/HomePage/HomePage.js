import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import sky from "./sky.svg";
import buildings from "./buildings.svg";
import sand from "./sands.svg";
import iitgoaLogo from "./IIT-Goa-Logo-White.svg";
import cepheusLogo from "./cepheus-logo-2.svg";
import moonLogo from "./moon.svg";
import NavbarTwo from "../../Components/NavbarTwo/NavbarTwo";

function HomePage() {
  const [showNav, setShowNav] = useState(false);
  const showNavbar = () => {
    setShowNav(!showNav);
  };

  return (
    <div id="home-page" className="home-page">
      <div className={`navbar-two ${showNav && "active"}`}>
        <div onClick={showNavbar} className="nav-cross-div">
          <i className="fas fa-times nav-cross"></i>
        </div>
        <NavbarTwo />
      </div>

      <div className="top-bar">
        <img className="iitgoa-top" src={iitgoaLogo} alt="" />
        <div className="nav-white-line"></div>
        <img className="cepheus-top" src={cepheusLogo} alt="" />
        <img onClick={showNavbar} className="moon-logo" src={moonLogo} alt="" />
      </div>
      <Navbar />
      <div className="image-container-home">
        <img className="sky-img" src={sky} alt="" />
        <div className="auth-buttons">
          <a href="/">
            <button>Sign Up</button>
          </a>
          <a href="/">
            <button>Login</button>
          </a>
        </div>
        <div className="buildings-div">
          <img className="buildings-img" src={buildings} alt="" />
          <img src={sand} className="sand-img" alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
