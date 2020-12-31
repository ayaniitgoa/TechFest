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
import { withRouter } from "react-router-dom";
import Select from "react-select";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [msg, setMsg] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [selectedCollege, setSelectedCollege] = useState("");
  const [showLoader, setShowLoader] = useState(false);
  const [collegeOptions, setCollegeOptions] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("userInfo")) {
      setEmail(localStorage.getItem("userInfo"));

      const userInfo = JSON.parse(localStorage.getItem("userInfo2"));
      setName(userInfo[0]);
    } else {
      props.history.push("/Cepheus");
    }
  }, [props.history]);

  useEffect(() => {
    var collegeData = [];
    universities.map((u, i) => {
      collegeData.push({
        label: `${u.name + `${u.town ? ", " : ""}` + u.town}`,
        value: u.name,
      });
      return null;
    });

    setCollegeOptions(collegeData);
  }, []);

  const register = (e) => {
    e.preventDefault();
    setShowLoader(true);
    Axios({
      method: "POST",
      data: {
        email: email,
        name: name,
        contact: Number(contact).valueOf(),
        college: selectedCollege.value,
      },

      url: `${variables.backendURL}/api/register/mail`,
    }).then((res) => {
      // setMsg(res.data);
      setShowLoader(false);
      if (res.data.status >= 400) {
        setErrMsg(res.data.msg);
        setMsg("");
      } else {
        console.log(res.data.user);

        setMsg(res.data.msg);
        setErrMsg("");
        localStorage.setItem("userID", res.data.uid);
        localStorage.setItem("userEvents", JSON.stringify([]));
        props.history.push("/Cepheus/register/success");
      }
    });
  };

  const handleCollegeChange = (selectedOption) => {
    setSelectedCollege(selectedOption);
    console.log(`Option selected:`, selectedCollege);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "7vh",
      borderRadius: "30px",
    }),
  };
  return (
    <div className="register-div">
      <div className="background-register">
        <img src={Sky} className="sky" alt="" />
        <img src={Sand} className="sand" alt="" />
        <img src={Building} className="building-reg-1" alt="" />
      </div>
      <img src={Moon} className="moon" alt="" />

      <Link to="/Cepheus">
        <i className="reg-back-btn fas fa-chevron-left"></i>
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
            placeholder="Name"
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

          <Select
            value={selectedCollege}
            onChange={handleCollegeChange}
            options={collegeOptions}
            styles={customStyles}
            placeholder="College"
            noOptionsMessage={() =>
              "No colleges found, if your college is not found please choose the 'Other' option"
            }
          />

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
            placeholder="Contact"
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
