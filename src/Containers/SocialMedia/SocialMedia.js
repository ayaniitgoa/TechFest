import React from "react";
import "./SocialMedia.css";
import techfestlogo from "./techfestlogo.svg";

function SocialMedia() {
  return (
    <div className="social-media-section">
      <div className="social-media-box">
        <div className="social-left-section">
          <img src={techfestlogo} alt="" />
          <p>techfest@iitgoa.ac.in</p>
        </div>
        <div className="social-icons">
          <i className=" fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-discord"></i>
        </div>
        <div className="copyright-info">
          <p>copyright info</p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
