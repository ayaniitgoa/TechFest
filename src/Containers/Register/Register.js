import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import Sky from "./sky.svg";
import Sand from "./sands.svg";
import Building from "./buildings.svg";
import Moon from "./moon.svg";
import { universities } from "./colleges";

import { variables } from "../../variables";
import Loader from "../../loader.svg";
import Axios from "axios";
import axios from "axios";
import { withRouter } from "react-router-dom";
function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("Other");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      const email = localStorage.getItem("userInfo");

      axios
        .post(
          `${variables.backendURL}/api/checkuser`,

          {
            email,
          },
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data.user.email) {
            console.log("user", res.data);
            props.history.push("/register/success");
          }
        });
    }
  }, [props.history]);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setEmail(localStorage.getItem("userInfo"));
      const userInfo = JSON.parse(localStorage.getItem("userInfo2"));
      setName(userInfo[0]);
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
        props.history.push("/register/success");
      }
    });
  };
  return (
    <div className="register-div">
      <div className="background-register">
        <img src={Sky} className="sky" alt="" />
        <img src={Sand} className="sand" alt="" />
        <img src={Building} className="building-reg-1" alt="" />
      </div>
      <img src={Moon} className="moon" alt="" />

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
          <label className="label-register-form" htmlFor="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            value={name}
            required
            // placeholder="Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            className="form-control"
          />

          <label
            className="label-register-form"
            htmlFor="exampleFormControlSelect1"
          >
            College
          </label>
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

          <label className="label-register-form" htmlFor="contact">
            Contact
          </label>
          <input
            id="contact"
            className="form-control"
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

          <button type="submit" className="sign-up">
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(Register);
