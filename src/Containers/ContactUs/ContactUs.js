import React from "react";
import "./ContactUs.css";
import underwaterCity from "./underwater-city.svg";
import contact from "./contact.jpg";

function ContactUs() {
  return (
    <div className="contact-us-section">
      <h2 className="contact-us-title">CONTACT US</h2>
      <div className="contacts">
        <div className="individual-contact">
          <img className="contact-photo" src={contact} alt="" />
          <p className="contact-text contact-name">John Doe</p>
          <p className="contact-text contact-number">9876543210</p>
        </div>
        <div className="individual-contact">
          <img className="contact-photo" src={contact} alt="" />
          <p className="contact-text contact-name">John Doe</p>
          <p className="contact-text contact-number">9876543210</p>
        </div>
        <div className="individual-contact">
          <img className="contact-photo" src={contact} alt="" />
          <p className="contact-text contact-name">John Doe</p>
          <p className="contact-text contact-number">9876543210</p>
        </div>
      </div>
      <div className="underwater-img-div">
        <img className="underwater-city" src={underwaterCity} alt="" />
      </div>
    </div>
  );
}

export default ContactUs;
