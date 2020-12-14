import React from "react";
import "./ContactUs.css";
import underwaterCity from "./underwater-city.svg";
import contact from "./contact.jpg";
import aadilPhoto from "./aadil.jpeg";
import shreyasPhoto from "./shreyas.jpg";
import AnmoldeepPhoto from "./Anmoldeep.jpg";

function ContactUs() {
  return (
    <div id="contact-us-section" className="contact-us-section">
      <h2 className="contact-us-title">CONTACT US</h2>
      <div className="contacts">
        <div className="individual-contact">
          <img className="contact-photo" src={AnmoldeepPhoto} alt="" />
          <p className="contact-text contact-name">Anmoldeep Singh, PR Head </p>
          <p className="contact-text contact-number">+91 9682118778</p>
          <p className="contact-text contact-number">
            anmoldeep.singh.18003@iitgoa.ac.in
          </p>
        </div>
        <div className="individual-contact">
          <img className="contact-photo" src={shreyasPhoto} alt="" />
          <p className="contact-text contact-name">
            Shreyas Pawar, Overall Coordinator
          </p>
          <p className="contact-text contact-number">+91 9730587495</p>
          <p className="contact-text contact-number">
            shreyas.pawar.18002@iitgoa.ac.in
          </p>
        </div>
        <div className="individual-contact">
          <img className="contact-photo" src={aadilPhoto} alt="" />
          <p className="contact-text contact-name">
            Aadil Khan Pathan, Events Head
          </p>
          <p className="contact-text contact-number">+91 8652845505</p>
          <p className="contact-text contact-number">
            aadil.khan.18001@iitgoa.ac.in
          </p>
        </div>
      </div>
      <div className="underwater-img-div">
        <img className="underwater-city" src={underwaterCity} alt="" />
      </div>
    </div>
  );
}

export default ContactUs;
