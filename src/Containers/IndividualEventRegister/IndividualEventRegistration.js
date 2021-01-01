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
  const [ids, setIDS] = useState([]);
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loader, setLoader] = useState(false);

  const updateIDs = (index, val) => {
    // console.log(index, val);
    const updatedArray = [...ids];
    updatedArray[index] = val;
    setIDS(updatedArray);
  };

  const onIDSSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    var filteredIDS = [];
    console.log(ids);
    for (var i = 0; i < ids.length; i++) {
      if (ids[i]) {
        if (ids[i].length > 0) {
          filteredIDS.push(ids[i]);
        }
      }
    }
    axios
      .post(`${variables.backendURL}/api/${eventname}/register`, {
        ids: filteredIDS,
      })
      .then((res) => {
        if (res.data.status >= 400) {
          console.log(res.data);
          var msgInvalid = "";
          if (res.data.userId) {
            res.data.userId.map((id, i) => {
              return (msgInvalid += `${i > 0 ? `, ` : ""} ${id} `);
            });

            setErrMsg(
              `Following id(s) are already registered:   ${msgInvalid}`
            );
          } else {
            console.log(msg);
            setErrMsg(res.data.msg);
          }
          setMsg("");
        }
        if (res.data.status < 400) {
          setMsg(`${res.data.msg} Please  `);
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
        <Link to="/Cepheus">
          <i className="ind-event-back-register fas fa-chevron-left"></i>
        </Link>
        <div className="ind-eve-register-main">
          <div className="ind-eve-title-register">
            <p>{eventLabel} Registration</p>
          </div>
          {loader && <img src={Loader} alt="" />}
          <p className="please-text">
            Please enter your ID(s) <br /> You can get your ID(s) by registering
            on the Home Page.{" "}
          </p>
          {msg && (
            <div className="alert alert-success alert-class" role="alert">
              Registration Successfull! Please join our{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://discord.gg/bbnt3RFxzH"
              >
                Discord Server
              </a>{" "}
              for more information.
            </div>
          )}
          {errMsg && (
            <div className="alert alert-danger alert-class" role="alert">
              {errMsg}
            </div>
          )}
          {
            <form onSubmit={onIDSSubmit}>
              <div className="ind-eve-register-fields">
                {Array.apply(null, { length: numOfFields }).map((e, i) => (
                  <div key={i} className="">
                    <div className="ind-reg-inp">
                      <label className="ind-register-label">
                        {numOfFields === 1
                          ? "Please enter your ID"
                          : i === 0
                          ? "Team Leader"
                          : `Team Member ${i + 1}`}
                      </label>
                      <input
                        className="form-control"
                        name={`ID ${i + 1}`}
                        placeholder={`ID ${i + 1}`}
                        autoComplete="none"
                        type="text"
                        onChange={(e) => {
                          updateIDs(i, e.target.value);
                        }}
                      />
                    </div>
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
