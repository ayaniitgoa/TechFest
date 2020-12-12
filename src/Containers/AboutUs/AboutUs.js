import React from "react";
import "./AboutUs.css";
import bulidingimg from "./buildings-reflection.svg";

function AboutUs() {
  return (
    <div className="about-us-section">
      <img
        className="building-reflection"
        src={bulidingimg}
        alt="Building Reflection"
      />
      <h2 className="about-us-title">ABOUT US</h2>
      <div className="about-us-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          repellendus ullam deserunt sunt vel fugiat iure temporibus impedit
          inventore assumenda possimus reiciendis, blanditiis minus voluptates
          tempora dolores doloremque fugit porro debitis. Quaerat ipsam corporis
          a nesciunt quibusdam quisquam iste sapiente ratione est qui tempore,
          error, illo hic modi animi rerum similique quidem temporibus id amet.
          Ipsum laudantium at inventore pariatur dignissimos, porro alias nihil
          hic nulla commodi corporis facilis. Veritatis suscipit fugit fugiat
          necessitatibus cumque! Facilis doloremque itaque saepe enim molestias
          ex ab quibusdam voluptatum accusantium! Sequi veritatis officia
          blanditiis, ex iure voluptates modi nulla corporis nostrum recusandae
          corrupti minima.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
