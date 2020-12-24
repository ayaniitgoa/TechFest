import React from "react";
import "./Register.css";
import { useHistory } from "react-router-dom";

function Register() {
  let history = useHistory();
  return (
    <div className="no-register-div">
      <div className="no-register-text">
        <p>Registration Process Will Start Soon!</p>
      </div>
      <button onClick={() => history.goBack()} className="go-back">
        Go Back
      </button>
    </div>
  );
}

export default Register;
