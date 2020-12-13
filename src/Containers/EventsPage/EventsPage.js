import React from "react";
import "./EventsPage.css";
import pantheon from "./pantheon.svg";

function Events() {
  return (
    <div className='events-section' id='EVENTS'>
      <img
        className="building"
        src={pantheon}
        alt="Building"
      />
      <h2 className='events-title'>Events</h2>
      <div className="buttons">
        
        <p><button type="button" class="btn btn-light">Competitions</button></p>
        <p><button type="button" class="btn btn-light">Workshops</button></p>
        <p><button type="button" class="btn btn-light">Talks</button></p>
      </div>
    </div>
  );
}

export default Events;
