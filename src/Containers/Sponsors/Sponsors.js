import React from "react";
import "./Sponsors.css";
import poseidon from "./poseidon.svg";
// import bubble from "./bubble.svg";

function Sponsors() {
  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">SPONSORS</h2>
      <img className="poseidon-img" src={poseidon} alt="" />
      {/* <div className="bubble">
        <img src={bubble} className="bubble-img bubble-img-1" alt="" />
        <img src={bubble} className="bubble-img bubble-img-2" alt="" />
        <img src={bubble} className="bubble-img bubble-img-3" alt="" />
        <img src={bubble} className="bubble-img bubble-img-4" alt="" />
      </div> */}
    </div>
  );
}

export default Sponsors;
