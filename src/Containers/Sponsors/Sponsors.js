import React from "react";
import "./Sponsors.css";
import poseidon from "./poseidon.svg";
import snpm from "./snpm.png";
import AI from "./AI.png";
import AM from "./AM.png";
import Convergent from "./Convergent.png";
function Sponsors() {
  return (
    <div id="sponsor-section" className="sponsors-section">
      <h2 className="sponsors-title">SPONSORS</h2>
      {/* {/<p className="coming-soon-text">Coming Soon..</p>/} */}
      <div className="bubble">
        <div className="bubble-col-1">
          <div>
            <p className="bubble-img-1-title">Title Sponsor</p>
            <img src={snpm} className="bubble-img bubble-img-1" alt="" />
          </div>
        </div>
        <div className="bubble-col-2">
          <div>
            <p className="bubble-img-2-title">Platform Partner</p>
            <img src={AM} className="bubble-img bubble-img-2" alt="" />
          </div>
          <div>
            <p className="bubble-img-3-title">Talk partner</p>
            <img src={Convergent} className="bubble-img bubble-img-3" alt="" />
          </div>
        </div>
        <div className="bubble-col-3">
          <div>
            <p className="bubble-img-4-title">Event Sponsor</p>
            <img src={AI} className="bubble-img bubble-img-4" alt="" />
          </div>
        </div>
      </div>
      <img className="poseidon-img" src={poseidon} alt="" />
    </div>
  );
}

export default Sponsors;
