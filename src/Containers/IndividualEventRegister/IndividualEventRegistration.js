import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./IndividualEventRegistration.css";
import { data } from "../IndividualEvent/eventData";
import pantheon from "./pantheon.svg";

function IndividualEventRegistraion(props) {
  const [numOfFields, setNumOfFields] = useState(0);
  const [eventname, setEventName] = useState("");
  const [uid, setUID] = useState([]);

  const updateIDs = (index, val) => {
    // console.log(index, val);
    const updatedArray = [...uid];
    updatedArray[index] = val;
    setUID(updatedArray);
  };

  const onIDSubmit = (e) => {
    e.preventDefault();
    console.log(uid);
  };

  // const [uuidArray, setUUIDArray] = useState([]);
  useEffect(() => {
    data.map((e, i) => {
      if (e.eventName === props.match.params.eventName) {
        setNumOfFields(e.numOfFields);
        setEventName(e.label);
      }
      return numOfFields;
    });
  }, [numOfFields, props]);
  return (
    <div>
      <div className="ind-eve-register">
        <Link to="/">
          <i className="ind-event-back-register ind-event-back fas fa-chevron-left"></i>
        </Link>
        <div className="ind-eve-register-main">
          <div className="ind-eve-title-register">
            <p>{eventname} Registeration</p>
          </div>
          {
            <form onSubmit={onIDSubmit}>
              <div className="ind-eve-register-fields">
                {Array.apply(null, { length: numOfFields }).map((e, i) => (
                  <div key={i} className="">
                    <input
                      placeholder="title"
                      onChange={(e) => {
                        updateIDs(i, e.target.value);
                      }}
                    />
                  </div>
                ))}
              </div>
              <button type="submit">Submit</button>
            </form>
          }
        </div>
      </div>
      <img className="ind-pantheon-register" src={pantheon} alt="" />
    </div>
  );
}

export default withRouter(IndividualEventRegistraion);
