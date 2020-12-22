import React from "react";
import "./AboutUs.css";
import bulidingimg from "./buildings-reflection.svg";

function AboutUs() {
  return (
    <div id="about-us" className="about-us-section">
      <img
        className="building-reflection"
        src={bulidingimg}
        alt="Building Reflection"
      />
      <h2 className="about-us-title">ABOUT US</h2>
      <div className="about-us-text">
        <p>
          IIT Goa, nestled in the scenic campus of GEC Farmagudi, into only its
          fifth year of existence, has become a sought-after institute of
          engineering aspirants that caters to the development of their
          technical abilities. Pioneering comes with its unique brand of
          enthusiasm, ingenuity and fervour; each of these qualities enable us
          to further the level of technical education in the country. Within a
          short span of existence we have created two centers of excellence for
          the pressing technological needs of our nation, through smart
          cutting-edge technological solutions. While we strive to achieve
          eminence in academic endeavours, we are greatly influenced by the
          unique culture of Goa which we hope to emphasise through Cepheus. With
          an exciting array of technical events and workshops, we hope to make
          this fest not only informative and intellectually enlightening, but
          also memorable for all. We look forward to you joining us in this
          groundbreaking step.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
