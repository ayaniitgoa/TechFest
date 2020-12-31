import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import "./HomePage.css";
import sky from "./sky.svg";
import buildings from "./buildingsv2.svg";
import sand from "./sands.svg";
import iitgoaLogo from "./IIT-Goa-Logo-White.png";
import cepheusLogo from "./cepheus-logo-2.svg";
import moonLogo from "./moon.svg";
import NavbarTwo from "../../Components/NavbarTwo/NavbarTwo";
import { motion } from "framer-motion";
import { GoogleLogin } from "react-google-login";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { variables } from "../../variables";
import Loader from "../../loader.svg";

function HomePage(props) {
  const [showNav, setShowNav] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const showNavbar = () => {
    setShowNav(!showNav);
  };

  const responseGoogle = (response) => {
    console.log(response);
    setShowLoader(true);
    axios
      .post(
        `${variables.backendURL}/api/checkuser`,

        {
          email: response.profileObj.email,
        }
      )
      .then((res) => {
        if (res.data.user.email) {
          localStorage.setItem("userID", res.data.user.uid);
          localStorage.setItem("userInfo", res.data.user.email);
          localStorage.setItem(
            "userEvents",
            JSON.stringify(res.data.user.events)
          );
          props.history.push("/~students/Cepheus/register/success");
        } else {
          localStorage.setItem("userInfo", response.profileObj.email);
          localStorage.setItem(
            "userInfo2",
            JSON.stringify([
              response.profileObj.name,
              response.profileObj.email,
            ])
          );
          // console.log(props);

          props.history.push("/~students/Cepheus/register");
        }

        setShowLoader(false);
      });
  };

  const errorResponseGoogle = (response) => {
    setShowLoader(false);
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
        {showLoader && <img className="homepage-loader" src={Loader} alt="" />}
        <div className="techfest-date">15th - 17th Jan 2021</div>

        <div className="auth-buttons">
          <GoogleLogin
            clientId="346424399983-t7glo1j3j3vbjdm8ou6uokvadsjoc309.apps.googleusercontent.com"
            buttonText="Register"
            onSuccess={responseGoogle}
            onFailure={errorResponseGoogle}
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
