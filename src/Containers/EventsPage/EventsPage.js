import React from "react";
import "./EventsPage.css";
import pantheon from "./pantheon.svg";
import WorkShopComp from '../../Components/event-component/workshop.component.jsx';
import TalksComp from '../../Components/event-component/talks.component.jsx';
import CompetitionComp from '../../Components/event-component/competition.component.jsx';

function Events() {
  return (
    <div className='events-section' id='EVENTS'>
      <img
        className="building"
        src={pantheon}
        alt="Building"
      />
      <div className='row left'>
        <nav className='buttons'>
        <h1 className='events-title'>EVENTS</h1>
          <button type="button" className="btn btn-light">Competitions</button>
          <button type="button" className="btn btn-light">Workshops</button>
          <button type="button" className="btn btn-light">Talks</button>
        </nav>
        <article className='column right'>
          <div className='second'>
            <button type="button" className="btn btn-light" style={{width: '20rem'}}>Rulebook</button>
          </div>
          <div className='event-div'>
            <WorkShopComp />
          </div>
        </article>
        </div>
      </div>
  );
}

export default Events;
