import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import sky from "./sky.svg";
import buildings from "./buildingsv2.svg";
import sand from "./sands.svg";
import iitgoaLogo from "./IIT-Goa-Logo-White.svg";
import cepheusLogo from "./cepheus-logo-2.svg";
import moonLogo from "./moon.svg";
import NavbarTwo from "../../Components/NavbarTwo/NavbarTwo";
import { motion } from "framer-motion";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { variables } from "../../variables";

function HomePage(props) {
  const [showNav, setShowNav] = useState(false);

  const showNavbar = () => {
    setShowNav(!showNav);
  };

  const responseGoogle = (response) => {
    console.log(response);
    axios
      .post(
        `${variables.backendURL}/api/checkuser`,

        {
          email: response.profileObj.email,
        }
      )
      .then((res) => {
        if (res.data.user.email) {
          console.log("user", res.data);
          props.history.push("/~students/Cepheus/register/success");
        } else {
          JSON.stringify([response.profileObj.name, response.profileObj.email]);
          localStorage.setItem("userInfo", response.profileObj.email);
          localStorage.setItem(
            "userInfo2",
            JSON.stringify([
              response.profileObj.name,
              response.profileObj.email,
            ])
          );
          console.log(props);
          props.history.push("/~students/Cepheus/register");
        }
      });
  };

  return (
    <div id="home-page" className="home-page">
      <div className={`navbar-two ${showNav && "active"}`}>
        <div onClick={showNavbar} className="nav-cross-div">
          <i className="fas fa-times nav-cross"></i>
        </div>
        <NavbarTwo />
      </div>

      <div className="top-bar">
        <img className="iitgoa-top" src={iitgoaLogo} alt="" />
        <div className="nav-white-line"></div>
        <img className="cepheus-top" src={cepheusLogo} alt="" />
        <img onClick={showNavbar} className="moon-logo" src={moonLogo} alt="" />
      </div>
      <Navbar />
      <div className="image-container-home">
        <motion.img
          initial={{ opacity: 0, y: "-100vh" }}
          animate={{ opacity: 0.1, y: "0" }}
          transition={{ duration: 1 }}
          className="sky-img"
          src={sky}
          alt=""
        />

        <div className="auth-buttons">
          <GoogleLogin
            clientId="346424399983-t7glo1j3j3vbjdm8ou6uokvadsjoc309.apps.googleusercontent.com"
            buttonText="Register"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className="google-button"
          />
        </div>

        <motion.img
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          src={sand}
          className="sand-img"
          alt=""
        />
        <div className="buildings-div">
          <motion.img
            initial={{ x: "100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="buildings-img"
            src={buildings}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default withRouter(HomePage);
