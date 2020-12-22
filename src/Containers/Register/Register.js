import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  return (
    <div className="no-register-div">
      <div className="no-register-text">
        <p>Registration Process Will Start Soon!</p>
      </div>
      <Link to="/">
        <button className="go-back">Go Back</button>
      </Link>
    </div>
  );
}

export default Register;
