import "./Schedule.css";
import React from "react";
import Tabs from "./Tabs";
import ScheduleBg from "./ScheduleBg";

const Day1Content = () => {
  return (
    <div className="content-container">
      <div className="content-row">
        <p id="event">EVENT</p>
        <p>|</p>
        <p id="time">TIME</p>
      </div>
      <div className="content-row">
        <p id="event">HACKATHON</p>
        <p>|</p>
        <p id="time">12:00PM to 12:00AM</p>
      </div>
      <div className="content-row">
        <p id="event">OPENING CEREMONY</p>
        <p>|</p>
        <p id="time">6:00PM to 7:30PM</p>
      </div>
      <div className="content-row">
        <p id="event">Declaration of all open challenges</p>
        <p>|</p>
        <p id="time">8:00PM to 10:00PM</p>
      </div>
    </div>
  );
};

const Day2Content = () => {
  return (
    <div className="content-container">
      <div className="content-row">
        <p id="event">EVENT</p>
        <p>|</p>
        <p id="time">TIME</p>
      </div>
      <div className="content-row">
        <p id="event">Linux CLI</p>
        <p>|</p>
        <p id="time">12:00PM TO 1:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Arduino Challenge</p>
        <p>|</p>
        <p id="time">2:00PM to 3:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Chat Bot</p>
        <p>|</p>
        <p id="time">4:00PM to 5:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">CyberTalk </p>
        <p>|</p>
        <p id="time">6:00PM to 6:30PM</p>
      </div>
      <div className="content-row">
        <p id="event">Coding competition</p>
        <p>|</p>
        <p id="time">7:00PM to 7:30PM</p>
      </div>
    </div>
  );
};

const Day3Content = () => {
  return (
    <div className="content-container">
      <div className="content-row">
        <p id="event">EVENT</p>
        <p>|</p>
        <p id="time">TIME</p>
      </div>
      <div className="content-row">
        <p id="event">Arduino Challenge</p>
        <p>|</p>
        <p id="time">11:00AM to 12:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Auto-py</p>
        <p>|</p>
        <p id="time">1:00PM to 2:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Talk AR-VR</p>
        <p>|</p>
        <p id="time">2:00PM to 4:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Web/App Sec.</p>
        <p>|</p>
        <p id="time">4:00PM to 5:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Kelly Talk</p>
        <p>|</p>
        <p id="time">6:30PM to 7:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">CLOSING CEREMONY + Prize Distribution</p>
        <p>|</p>
        <p id="time">7:30PM to 11:00PM</p>
      </div>
    </div>
  );
};

function Schedule() {
  return (
    <div id="schedule-section" className="schedule">
      <div className="schedule-title">
        <p>SCHEDULE</p>
      </div>
      {/* <img alt="fish-bg" className="fish" src={Fish} /> */}
      <ScheduleBg />
      <div className="schedule-container">
        <Tabs>
          <div label="Day 1">
            <Day1Content />
          </div>
          <div label="Day 2">
            <Day2Content />
          </div>
          <div label="Day 3">
            <Day3Content />
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Schedule;
