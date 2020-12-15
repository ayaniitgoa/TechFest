import React, { useEffect, useState } from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
// import EventsPage from "../EventsPage/EventsPage";
import FAQ from "../FAQ/FAQ";
import HomePage from "../HomePage/HomePage";
// import Schedule from "../Schedule/Schedule";
import SocialMedia from "../SocialMedia/SocialMedia";
import Sponsors from "../Sponsors/Sponsors";
import "./SiteContainer.css";

function SiteContainer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    });
  }, [showBackToTop]);

  return (
    <div>
      <a
        href="#home-page"
        className={`back-to-top-btn ${showBackToTop && " active"} `}
      >
        <i className="fas fa-chevron-up"></i>
      </a>
      <HomePage />
      <AboutUs />
      {/* <EventsPage />
      <Schedule /> */}
      <Sponsors />
      <FAQ />
      <ContactUs />
      <SocialMedia />
    </div>
  );
}

export default SiteContainer;
