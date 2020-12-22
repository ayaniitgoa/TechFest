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
        <p id="event">CYBER EXPERT (TALK)</p>
        <p>|</p>
        <p id="time">11:00am to 12:00pm</p>
      </div>
      <div className="content-row">
        <p id="event">FIDUCIA (WORKSHOP) (LIVE)</p>
        <p>|</p>
        <p id="time">4:00pm to 5:00pm</p>
      </div>
      <div className="content-row">
        <p id="event">FIZZBUZZ (COMPETITION) (LIVE PLATFORM)</p>
        <p>|</p>
        <p id="time">7pm to 10pm</p>
      </div>
      <div className="content-row">
        <p id="event">HACKOVERFLOW (COMPETITION) (OFFLINE)</p>
        <p>|</p>
        <p id="time"> 12:00pm </p>
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
        <p id="event">CYBER EXPERT (TALK)</p>
        <p>|</p>
        <p id="time">11:00am to 12:00pm</p>
      </div>
      <div className="content-row">
        <p id="event">FIDUCIA (WORKSHOP) (LIVE)</p>
        <p>|</p>
        <p id="time">4:00pm to 5:00pm</p>
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
            <Day1Content />
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default Schedule;
