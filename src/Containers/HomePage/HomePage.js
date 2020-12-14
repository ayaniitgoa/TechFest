import React from "react";
import "./HomePage.css";
import iitlogo from "./Home/IIT-Goa-Logo-White.svg";
import cephlogo from "./Home/cepheus-logo-2.svg"
import moonimg from "./Home/moon.svg"
import sandimg from "./Home/sands.svg"
import buildimg from "./Home/buildings.svg"
import line from "./Home/Line 1@1X.png"

function HomePage() {
  return (
    <div>
      <div id="skyimg">
        <img src={iitlogo} id="iitlogo"></img>
        <img src={line} id="line"></img>
        <div id="cephlogocontainer">
          <img src={cephlogo} id="cephlogo"></img>
        </div>
        <div id="moonimgcontainer">
          <img src={moonimg} id="moonimg"></img>
        </div>
        <div id="sandimgcontainer">
          <img src={sandimg} id="sandimg"></img>
        </div>
        <div id="buildimgcontainer">
          <img src={buildimg} id="buildimg"></img>
        </div>
        <div id="sandimgcontainer">
          <img src={sandimg} id="sandimg"></img>
        </div>
        <div class="button1"><a>Sign Up</a></div>
        <div class="button2"><a>Login</a></div>
      </div>
    </div>
  );
}

export default HomePage;
