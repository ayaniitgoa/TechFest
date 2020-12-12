import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import ContactUs from "../ContactUs/ContactUs";
import EventsPage from "../EventsPage/EventsPage";
import FAQ from "../FAQ/FAQ";
import HomePage from "../HomePage/HomePage";
import Schedule from "../Schedule/Schedule";
import SocialMedia from "../SocialMedia/SocialMedia";
import Sponsors from "../Sponsors/Sponsors";
import "./SiteContainer.css";

function SiteContainer() {
  return (
    <div>
      <HomePage />
      <AboutUs />
      <EventsPage />
      <Schedule />
      <Sponsors />
      <FAQ />
      <ContactUs />
      <SocialMedia />
    </div>
  );
}

export default SiteContainer;
