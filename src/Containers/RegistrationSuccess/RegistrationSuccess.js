import React, { useEffect, useState } from "react";
import "./RegistrationSuccess.css";
import pantheon from "./pantheon.svg";
import cepeus from "./cepheus-logo.svg";
import Row from "react-bootstrap/Row";
import { Link, withRouter } from "react-router-dom";

function RegistrationSuccess(props) {
  const [userId, setUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      setUserID(localStorage.getItem("userID"));
      setUserEmail(localStorage.getItem("userInfo"));
    } else {
      props.history.push("/~students/Cepheus");
    }
  }, [props.history]);

  const calculateTimeLeft = () => {
    var countDownDate = new Date("Jan 15, 2021 00:00:00").getTime();
    var now = new Date().getTime();

    const difference = countDownDate - now;
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
      return timeLeft;
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="reg-sec">
      <Link to="/~students/Cepheus">
        <i className="back-button fas fa-chevron-left"></i>
      </Link>
      <img className="building-reg" src={pantheon} alt="Building" />
      <div className="main-div">
        <img className="logo" src={cepeus} alt="" />
        <p className="heading">Registration Successful!</p>
        <div
          className="user-id"
          style={{ position: "relative", zIndex: 1000000000000 }}
        >
          Your Email: {userEmail}
          <br />
          Your ID: {userId}
          <br />
          Please do not share this with anyone other than your teammates!
        </div>
        <div className="timer-div">
          <h4 className="timer-div-title">COMING SOON</h4>

          <Row>
            <div className="cc-div">
              <div className="circle-div" id="days">
                <p>{timeLeft.days}</p>
              </div>
              <h5>Days</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="hours">
                <p>{timeLeft.hours}</p>
              </div>
              <h5>Hours</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="minutes">
                <p>{timeLeft.minutes}</p>
              </div>
              <h5>Minutes</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="seconds">
                <p>{timeLeft.seconds}</p>
              </div>
              <h5>Seconds</h5>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegistrationSuccess);
