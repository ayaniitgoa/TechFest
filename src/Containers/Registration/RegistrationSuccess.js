import React from "react";
import "./RegistrationSuccess.css";
import pantheon from "./pantheon.svg";
import cepeus from "./cepheus-logo.svg";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

function RegistrationSuccess() {
  return (
    <div className="reg-sec">
      <Link to="/">
        <i className="back-button fas fa-chevron-left"></i>
      </Link>
      <img className="building-reg" src={pantheon} alt="Building" />
      <div className="main-div">
        <img className="logo" src={cepeus} alt="" />
        <h1 className="heading">Registration SuccessFul!</h1>
        <div className="timer-div">
          <h4>COMING SOON</h4>
          <Row>
            <div className="cc-div">
              <div className="circle-div" id="days">
                <h1>-</h1>
              </div>
              <h5>Days</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="hours">
                <h1>-</h1>
              </div>
              <h5>Hours</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="minutes">
                <h1>-</h1>
              </div>
              <h5>Minutes</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="seconds">
                <h1>-</h1>
              </div>
              <h5>Seconds</h5>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default RegistrationSuccess;
