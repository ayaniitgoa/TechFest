import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import { data } from "./eventData";
import "./IndividualEvent.css";
import pantheon from "./pantheon.svg";

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
          src="https://images.unsplash.com/photo-1511461744085-90a4d1c66be3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          alt=""
        />
        <div className="ind-event-text">
          <p>{eventData && eventData.eventText}</p>
        </div>
      </div>
      {/* <Link to={`/event/${props.match.params.eventName}/register`}>
        <button className="ind-register-btn">Register</button>
      </Link> */}
      <Link to={`/register`}>
        <button className="ind-register-btn">Register</button>
      </Link>
      <img className="ind-pantheon" src={pantheon} alt="" />
    </div>
  );
}

export default withRouter(IndividualEvent);
