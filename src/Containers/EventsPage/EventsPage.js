import React, { Component } from "react";
import Slider from "react-slick";
import "./EventsPage.css";
import pantheon from "./pantheon.svg";
import workshopData from './workshopData.js';
import talksData from './talksData';
import competitionData from "./competitionData";

export default class Events extends Component {
  state = {
    display1: false,
    display2: false,
    display3: false,
  };

  render() {
    const renderCompetitions = () =>  competitionData.map(data =>(
      <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
          <button type="button" key={data.eventName} className="btn btn-light" style={{width: 'calc(10rem / var(--size-divisor))', height: 'calc(8rem / var(--size-divisor))', fontSize: 'calc(1.2 / var(--size-divisor))', transform: 'translate(22%, 30%)'}}>{data.label}</button></a>))

    const renderWorkshops = () =>  workshopData.map(data =>(
      <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
          <button type="button" key={data.eventName} className="btn btn-light" style={{width: 'calc(10rem / var(--size-divisor))', height: 'calc(8rem / var(--size-divisor))', fontSize: 'calc(1.2 / var(--size-divisor))', transform: 'translate(22%, 30%)'}}>{data.label}</button></a>))

    const renderTalks = () =>  talksData.map(data =>(
      <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
          <button type="button" key={data.eventName} className="btn btn-light" style={{width: 'calc(10rem / var(--size-divisor))', height: 'calc(8rem / var(--size-divisor))', fontSize: 'calc(1.2 / var(--size-divisor))', transform: 'translate(50%, 30%)'}}>{data.label}</button></a>))

    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2
    };
    const settings2 = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1
    };
  return (
    <div className='events-section' id='EVENTS'>
      <img
        className="building"
        src={pantheon}
        alt="Building"
      />
      <div style={{paddingTop: '2rem'}}>
        <div className='row left'>
          <nav className='event-content'>
            <h1 className='events-title'>EVENTS</h1>
              <div className='buttons'>
                <button type="button" className="btn btn-light" href='#eventdiv' onClick={() =>
                  this.setState({
                    display1: !this.state.display1,
                    display2: false,
                    display3: false
                  })}>Competitions</button>
                <button type="button" className="btn btn-light" href='#eventdiv' onClick={() =>
                  this.setState({
                    display1: false,
                    display2: !this.state.display2,
                    display3: false
                  })}>Workshops</button>
                <button type="button" className="btn btn-light" href='#eventdiv' onClick={() =>
                  this.setState({
                    display1: false,
                    display2: false,
                    display3: !this.state.display3
                  })}>Talks</button>
              </div>
          </nav>
          <article className='right'>
            <div className='second'>
              <button type="button" className="btn btn-light" style={{width: 'calc(15rem / var(--size-divisor))'}}>Rulebook  <i class="fas fa-download"  style={{width: 'calc(2rem / var(--size-divisor));'}}></i></button>
            </div>
            <div className='event-div' id='eventdiv'>
            <div
              style={{
                width: 'calc(600px / var(--size-divisor))',
                display: this.state.display1 ? "block" : "none"
              }}>
              <Slider {...settings}>
                {renderCompetitions()}
              </Slider>
            </div>
            <div
              style={{
                width: 'calc(600px / var(--size-divisor))',
                display: this.state.display2 ? "block" : "none"
              }}>
              <Slider {...settings}>
                {renderWorkshops()}
              </Slider>
            </div>
            <div
              style={{
                width: 'calc(600px / var(--size-divisor))',
                display: this.state.display3 ? "block" : "none"
              }}>
              <Slider {...settings2}>
                {renderTalks()}
              </Slider>
            </div>
            </div>
          </article>
          </div>
        </div>
      </div>
  );
}
}