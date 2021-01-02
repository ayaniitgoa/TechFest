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
        <p id="event">HackOverflow</p>
        <p>|</p>
        <p id="time">12:00PM Onwards (36 hour event)</p>
      </div>
      <div className="content-row">
        <p id="event">Unite For Unity</p>
        <p>|</p>
        <p id="time">12:00PM Onwards (48 hour event)</p>
      </div>
      <div className="content-row">
        <p id="event">Circuital Dilemma - Stage 1</p>
        <p>|</p>
        <p id="time">04:30PM - 6:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">OPENING CEREMONY</p>
        <p>|</p>
        <p id="time">6:00PM to 7:30PM</p>
      </div>
      <div className="content-row">
        <p id="event">Circuital Dilemma - Stage 2</p>
        <p>|</p>
        <p id="time">09:00PM Onwards (39 hour event)</p>
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
        <p id="event">Take Charge!</p>
        <p>|</p>
        <p id="time">12:00PM TO 1:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Arduino's Trial : Stage - 1</p>
        <p>|</p>
        <p id="time">2:00PM to 4:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Chit-Chat with Chat Bot</p>
        <p>|</p>
        <p id="time">4:00PM to 6:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Pandora's Box</p>
        <p>|</p>
        <p id="time">4:00PM Onwards (24 hour Event)</p>
      </div>
      <div className="content-row">
        <p id="event">Cyber Security Talk </p>
        <p>|</p>
        <p id="time">6:00PM to 7:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">FizzBuzz</p>
        <p>|</p>
        <p id="time">7:00PM to 10:00PM</p>
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
        <p id="event">Arduino's Trial : Stage - 2</p>
        <p>|</p>
        <p id="time">11:00AM to 01:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Pythonize Everything</p>
        <p>|</p>
        <p id="time">1:00PM to 2:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Talk AR-VR</p>
        <p>|</p>
        <p id="time">2:00PM to 4:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Fiducia</p>
        <p>|</p>
        <p id="time">4:00PM to 5:00PM</p>
      </div>
      <div className="content-row">
        <p id="event">Talk on ICE-EV</p>
        <p>|</p>
        <p id="time">6:30PM to 7:30PM</p>
      </div>
      <div className="content-row">
        <p id="event">CLOSING CEREMONY + Prize Distribution</p>
        <p>|</p>
        <p id="time">7:30PM to 11:00PM</p>
      </div>
    </div>
  );
};

const DayXContent = () => {
  return (
    <div className="content-container">
      <div className="content-row">
        <p id="event">EVENT</p>
        <p>|</p>
        <p id="time">TIME</p>
      </div>
      <div className="content-row">
        <p id="event">Cool Your Engine</p>
        <p>|</p>
        <p id="time">12:00PM on 12th Jan to 03:00PM on 16 Jan</p>
      </div>
      <div className="content-row">
        <p id="event">Frame The Crane</p>
        <p>|</p>
        <p id="time">12:00PM on 12th Jan to 03:00PM on 16 Jan</p>
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
          <div label="OPEN CHALLENGES">
            <DayXContent />
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Schedule;
