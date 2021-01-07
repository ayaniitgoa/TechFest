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
          <a
            href="https://www.facebook.com/pages/category/Festival/Cepheus-IIT-GOA-103726818293218/"
            target="_blank"
            rel="noreferrer"
          >
            <i className=" fab fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com/cepheus_iitgoa?igshid=yi42u07kqfpa"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/cepheus_iitgoa?s=09"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/cepheus-iit-goa-311230203?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT1%2FFqBdvTpmsgqSSbdbDEA%3D%3D"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://discord.gg/bbnt3RFxzH"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-discord"></i>
          </a>
        </div>
        <div className="copyright-info">
          <p>©2020 - All Rights Reserved - IIT GOA</p>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
