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
          <a href="https://www.facebook.com/pages/category/Festival/Cepheus-IIT-GOA-103726818293218/">
            <i className=" fab fa-facebook"></i>
          </a>
          <a href="https://instagram.com/cepheus_iitgoa?igshid=yi42u07kqfpa">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://twitter.com/cepheus_iitgoa?s=09">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <div className="copyright-info">
          <p>©2020 - All Rights Reserved - IIT-GOA</p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
