import React from "react";
import "./ContactUs.css";
// import underwaterCity from "./underwater-city.svg";
import aadilPhoto from "./aadil.jpeg";
import shreyasPhoto from "./shreyas.jpg";
import AnmoldeepPhoto from "./Anmoldeep.jpg";
import DarshayPhoto from "./Darshay.jpg";
import AaryanPhoto from "./Aaryan.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactBg from "./ContactBg";

function ContactUs() {
  var settings = {
    // dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1224,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div id="contact-us-section" className="contact-us-section">
      <h2 className="contact-us-title">CONTACT US</h2>
      <div className="contacts">
        <Slider {...settings}>
          <div className="individual-contact">
            <img className="contact-photo" src={AnmoldeepPhoto} alt="" />
            <p className="contact-text contact-name">
              Anmoldeep Singh, PR Head{" "}
            </p>
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
          <div className="individual-contact">
            <img className="contact-photo" src={DarshayPhoto} alt="" />
            <p className="contact-text contact-name">
              Darshay Naik, Events Head
            </p>
            <p className="contact-text contact-number">+91 9913759592</p>
            <p className="contact-text contact-number">
              darshay.naik.18003@iitgoa.ac.in
            </p>
          </div>
          <div className="individual-contact">
            <img className="contact-photo" src={AaryanPhoto} alt="" />
            <p className="contact-text contact-name">
              Aaryan Kadam, Events Head
            </p>
            <p className="contact-text contact-number">+91 9137901402</p>
            <p className="contact-text contact-number">
              aaryan.kadam.18002@iitgoa.ac.in
            </p>
          </div>
        </Slider>
      </div>
      <div className="underwater-img-div">
        {/* <img className="underwater-city" src={underwaterCity} alt="" /> */}
        <ContactBg />
      </div>
    </div>
  );
}

export default ContactUs;
