import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
// import Sky from "./sky.svg";
// import Sand from "./sands.svg";
// import Building from "./buildings.svg";

import { variables } from "../../variables";
import Loader from "../../loader.svg";
import Axios from "axios";
import { withRouter } from "react-router-dom";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [college, setCollege] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  const register = (e) => {
    e.preventDefault();
    setShowLoader(true);
    Axios({
      method: "POST",
      data: {
        email: email,
        password: password,
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
            FirstName:
            <input
              name="firstName"
              type="text"
              // value={firstName}
              // onChange={firstNameHandler}
              className="input-field"
            />
          </label>
          <input
            name="Name"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <input
            name="Email"
            type="email"
            value={email}
            placeholder="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            name="college"
            type="text"
            value={college}
            placeholder="college"
            onChange={(e) => {
              setCollege(e.target.value);
            }}
          />
          <input
            name="contact"
            type="text"
            value={contact}
            placeholder="Contact"
            onChange={(e) => {
              setContact(e.target.value);
            }}
          />
          <input
            name="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" className="sign-up">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Register);
