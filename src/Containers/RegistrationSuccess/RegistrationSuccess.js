import React, { useEffect, useState } from "react";
import "./RegistrationSuccess.css";
import pantheon from "./pantheon.svg";
import cepeus from "./cepheus-logo.svg";
import { Link, withRouter } from "react-router-dom";
import { data } from "../IndividualEvent/eventData";
import axios from "axios";
import { variables } from "../../variables";
import { CopyToClipboard } from "react-copy-to-clipboard";

function RegistrationSuccess(props) {
  const [userId, setUserID] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEvents, setUserEvents] = useState([]);
  const [copyId, setCopyId] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userID")) {
      setUserID(localStorage.getItem("userID"));
      setUserEmail(localStorage.getItem("userInfo"));

      axios
        .post(`${variables.backendURL}/api/checkuser`, {
          email: localStorage.getItem("userInfo"),
        })
        .then((res) => {
          if (res.data.user) {
            setUserID(res.data.user.uid);
            setUserEvents([]);
            for (var i = 0; i < res.data.user.events.length; i++) {
              for (var j = 0; j < data.length; j++) {
                if (data[j].eventName === res.data.user.events[i]) {
                  const label = data[j].label.replace(/\w\S*/g, function (txt) {
                    return (
                      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                    );
                  });
                  setUserEvents((userEvents) => [...userEvents, label]);
                }
              }
            }
          } else {
            setUserID("");
            // setUserEmail([]);
            setUserEmail("");
          }
        });
    } else {
      props.history.push("/Cepheus");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="reg-sec">
      <Link to="/Cepheus">
        <i className="back-button fas fa-chevron-left"></i>
      </Link>
      <img className="building-reg" src={pantheon} alt="Building" />
      <div className="main-div">
        <img className="logo" src={cepeus} alt="" />
        <p className="heading">Registration Details</p>
        <div className="user-id">
          Your Email: {userEmail}
          <br />
          Your ID:
          <span className="user-id-reg-suc">{userId}</span>
          <CopyToClipboard text={userId} onCopy={() => setCopyId(true)}>
            {/* <Tippy content="Click to copy"> */}
            <button
              style={{ backgroundColor: `${copyId ? " #d2f4ff" : "white"}` }}
              type="button"
              className="id-button-reg-suc"
            >
              <i className="far fa-copy"></i>
            </button>
            {/* </Tippy> */}
          </CopyToClipboard>
          <p className="copy-text">{copyId ? "ID Copied!" : ""}</p>
          <br />
          {userEvents.length > 0 ? "Events registered:" : null}
          <ul>
            {userEvents.length > 0 &&
              userEvents.map((e, i) => {
                return <li key={i}>{e}</li>;
              })}
          </ul>
          Please do not share your id with anyone other than your teammates!
          <br />
          Go to the Events Section to register for individual events.
        </div>
      </div>
    </div>
  );
}

export default withRouter(RegistrationSuccess);
