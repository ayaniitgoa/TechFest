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
          IIT Goa, into only it’s 5th year of existence has already grown to be
          a much sought-after institution for engineering students and a place
          that caters the development of their technical abilities. We are
          nestled into the vast and scenic expanse of GEC campus in Farmagudi,
          Goa with a vibrant population of over three thousand students and five
          hundred faculty and staff members. Pioneering comes with its own
          unique brand of enthusiasm, energy, ingenuity and fervour, which is
          what we foster in our campus. Each of these qualities are being
          reflected in an everlasting stride towards making a difference in
          technical education in our country. In addition, within a short span
          of existence we have already created two centers of excellence to
          cater to the pressing technological needs of Goa and our nation,
          through smart cutting-edge technological solutions. While we strive to
          achieve excellence in academic endeavors, we are certainly touched and
          influenced by the rich and unique culture of Goa which is emphasised
          through the first ever annual technical fest of IIT Goa - Cepheus.
          With an exciting array of technical events and workshops we hope to
          make this fest not only informative and intellectually enlightening,
          but also memorable for all. If you wish to have your own little piece
          of history, come aboard with us on a journey which is certainly going
          to plant a seed that shall bloom in your mind for a long, long time to
          come. Join us in being a part, for the very first time, of IIT Goa’s
          very own Technical Fest.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
