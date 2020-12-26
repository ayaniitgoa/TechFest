import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
// import Sky from "./sky.svg";
// import Sand from "./sands.svg";
// import Building from "./buildings.svg";
import { universities } from "./colleges";

import { variables } from "../../variables";
import Loader from "../../loader.svg";
import Axios from "axios";
import { withRouter } from "react-router-dom";
function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setEmail(localStorage.getItem("userInfo"));
    } else {
      props.history.push("/");
    }
  }, [props.history]);

  const register = (e) => {
    e.preventDefault();
    console.log(college);
    setShowLoader(true);
    Axios({
      method: "POST",
      data: {
        email: email,
        name: name,
        contact: Number(contact).valueOf(),
        college: college,
      },
      withCredentials: true,
      url: `${variables.backendURL}/api/register/mail`,
    }).then((res) => {
      console.log(res);
      // setMsg(res.data);
      setShowLoader(false);
      if (res.data.status >= 400) {
        setErrMsg(res.data.msg);
        setMsg("");
      } else {
        setMsg(res.data.msg);
        setErrMsg("");
      }
    });
  };
  return (
    <div className="register-div">
      {/* <img src={Sky} className="sky"/>
        <img src={Sand} className="sand"/>
        <img src={Building} className="building"/> */}
      <Link to="/">
        <i className="ind-event-back fas fa-chevron-left"></i>
      </Link>

      <p className="title">Cepheus Registration</p>
      {showLoader && <img src={Loader} alt="" />}
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
      <form onSubmit={register}>
        <div className="registration-form">
          <label className="input-container">
            Name:
            <input
              className="input-field"
              name="Name"
              type="text"
              value={name}
              required
              // placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </label>
          <div className="input-container">
            <label htmlFor="exampleFormControlSelect1">College</label>
            <select
              className="form-control college-select"
              id="exampleFormControlSelect1"
              onChange={(e) => {
                setCollege(e.target.value);
              }}
            >
              {universities.map((university, i) => {
                return (
                  <option key={i}>
                    {" "}
                    {university.name}
                    {university.town ? "," : null} {university.town}{" "}
                  </option>
                );
              })}
            </select>
          </div>

          {/* <label className="input-container">
            College:
            <input
              className="input-field"
              name="college"
              type="text"
              value={college}
              required
              onChange={(e) => {
                setCollege(e.target.value);
              }}
            />
          </label> */}
          <label className="input-container">
            Contact:
            <input
              className="input-field"
              title="Enter 10 digit mobile number"
              name="contact"
              type="text"
              value={contact}
              required
              pattern="[1-9]{1}[0-9]{9}"
              onChange={(e) => {
                setContact(e.target.value);
              }}
            />
          </label>

          <button type="submit" className="sign-up">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Register);
