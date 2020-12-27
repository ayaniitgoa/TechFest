import React from "react";

function EventRegistrationSuccess() {
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime(); //set the events date here

  var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  }, 1000);

  return (
    <div className="reg-sec">
      <Link to="/">
        <i className="back-button fas fa-chevron-left"></i>
      </Link>
      <img className="building" src={pantheon} alt="Building" />
      <div className="main-div">
        <img className="logo" src={cepeus} alt="Building" />
        <h1 className="heading">Registration SuccessFul!</h1>
        <div className="timer-div">
          <h4>COMING SOON</h4>
          <Row>
            <div className="cc-div">
              <div className="circle-div" id="days">
                <h1>-</h1>
              </div>
              <h5>Days</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="hours">
                <h1>-</h1>
              </div>
              <h5>Hours</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="minutes">
                <h1>-</h1>
              </div>
              <h5>Minutes</h5>
            </div>
            <div className="cc-div">
              <div className="circle-div" id="seconds">
                <h1>-</h1>
              </div>
              <h5>Seconds</h5>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default EventRegistrationSuccess;
