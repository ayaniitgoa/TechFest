import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { data } from "./eventData";
import "./IndividualEvent.css";
import pantheon from "./pantheon.svg";
// import cyber from "./posters/cyberSecurity.png";

function IndividualEvent(props) {
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    data.map((e, i) => {
      if (e.eventName === props.match.params.eventName) {
        setEventData(e);
      }
      return eventData;
    });
  }, [eventData, props.match.params.eventName]);
  return (
    <div className="ind-eve">
      <div className="ind-event-top">
        <a href="/#events-section">
          <i className="ind-event-back fas fa-chevron-left"></i>
        </a>
        <p className="ind-event-title">{eventData && eventData.label}</p>
      </div>
      <div className="ind-event-content">
        <img
          className="ind-event-poster"
          src={process.env.PUBLIC_URL + `/posters/${eventData.posterLink}`}
          alt=""
        />
        <div className="ind-event-text">
          <p>{eventData && eventData.eventText}</p>
        </div>
      </div>
      <Link to={`/event/${props.match.params.eventName}/register`}>
        <button className="ind-register-btn">Register</button>
      </Link>
      {/* <Link to={`/register`}>
        <button className="ind-register-btn">Register</button>
      </Link> */}
      <img className="ind-pantheon" src={pantheon} alt="" />
    </div>
  );
}

export default withRouter(IndividualEvent);
