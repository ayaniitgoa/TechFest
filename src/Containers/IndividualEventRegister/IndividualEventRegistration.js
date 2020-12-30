import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./IndividualEventRegistration.css";
import { data } from "../IndividualEvent/eventData";
import pantheon from "./pantheon.svg";
import axios from "axios";
import Loader from "../../loader.svg";
import { variables } from "../../variables";

function IndividualEventRegistraion(props) {
  const [numOfFields, setNumOfFields] = useState(0);
  const [eventLabel, setEventLabel] = useState("");
  const [eventname, setEventName] = useState("");
  const [email, setEmail] = useState([]);
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const updateEmails = (index, val) => {
    // console.log(index, val);
    const updatedArray = [...email];
    updatedArray[index] = val;
    setEmail(updatedArray);
  };

  const onEmailSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    var filteredEmail = [];
    console.log(email);
    for (var i = 0; i < email.length; i++) {
      if (email[i]) {
        if (email[i].length > 0) {
          filteredEmail.push(email[i]);
        }
      }
    }
    axios
      .post(`${variables.backendURL}/api/${eventname}/register`, {
        email: filteredEmail,
      })
      .then((res) => {
        if (res.data.status >= 400) {
          setErrMsg(res.data.msg);
          setMsg("");
        }
        if (res.data.status < 400) {
          setMsg(res.data.msg);
          setErrMsg("");
        }
        setLoader(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    data.map((e, i) => {
      if (e.eventName === props.match.params.eventName) {
        setNumOfFields(e.numOfFields);
        setEventLabel(e.label);
        setEventName(e.eventName);
      }
      return numOfFields;
    });
  }, [numOfFields, props]);
  return (
    <div>
      <div className="ind-eve-register">
        <Link to="/~students/Cepheus">
          <i className="ind-event-back-register fas fa-chevron-left"></i>
        </Link>
        <div className="ind-eve-register-main">
          <div className="ind-eve-title-register">
            <p>{eventLabel} Registration</p>
          </div>
          {loader && <img src={Loader} alt="" />}
          {msg && (
            <div className="alert alert-success alert-class" role="alert">
              {msg}
            </div>
          )}
          {errMsg && (
            <div className="alert alert-danger alert-class" role="alert">
              {errMsg}
            </div>
          )}
          {
            <form onSubmit={onEmailSubmit}>
              <div className="ind-eve-register-fields">
                {Array.apply(null, { length: numOfFields }).map((e, i) => (
                  <div key={i} className="">
                    <label className="ind-register-label">
                      {numOfFields === 1
                        ? "Please enter your email"
                        : i === 0
                        ? "Team Leader"
                        : `Team Member ${i + 1}`}
                    </label>
                    <input
                      className="form-control"
                      name={`email${i + 1}`}
                      placeholder={`email`}
                      autoComplete="none"
                      type="email"
                      onChange={(e) => {
                        updateEmails(i, e.target.value);
                      }}
                    />
                  </div>
                ))}
              </div>
              <button type="submit" className="ind-submit">
                Submit
              </button>
            </form>
          }
        </div>
      </div>
      <img className="ind-pantheon-register" src={pantheon} alt="" />
    </div>
  );
}

export default withRouter(IndividualEventRegistraion);
