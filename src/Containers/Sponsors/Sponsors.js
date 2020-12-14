import React from "react";
import "./Sponsors.css";
import poseidon from "./poseidon.svg";
import bubble from "./bubble.svg";

function Sponsors() {
  return (
    <div id="sponsor-section" className="sponsors-section">
      <h2 className="sponsors-title">SPONSORS</h2>
      <div className="bubble">
        <div className="bubble-col-1">
          <img src={bubble} className="bubble-img bubble-img-1" alt="" />
          <img src={bubble} className="bubble-img bubble-img-2" alt="" />
        </div>
        <div className="bubble-col-2">
          <img src={bubble} className="bubble-img bubble-img-3" alt="" />
          <img src={bubble} className="bubble-img bubble-img-4" alt="" />
        </div>
      </div>
      <img className="poseidon-img" src={poseidon} alt="" />
    </div>
  );
}

export default Sponsors;
