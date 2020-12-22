import React, { Component } from "react";
import Slider from "react-slick";
import "./EventsPage.css";
import pantheon from "./pantheon.svg";
import workshopData from "./workshopData.js";
import talksData from "./talksData";
import competitionData from "./competitionData";

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

export default class Events extends Component {
    state = {
        display1: true,
        display2: false,
        display3: false,
    };
    render() {
        const renderCompetitions = () =>  competitionData.map(data =>(
            <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
                <button type="button" key={data.eventName} className="btn btn-light" style={{width: 'calc(10rem / var(--size-divisor))', height: 'calc(8rem / var(--size-divisor))', fontSize: 'calc(1.2rem / var(--size-divisor))', transform: 'translate(35%, 30%)'}}>{data.label}</button></a>))

        const renderWorkshops = () =>  workshopData.map(data =>(
            <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
                <button type="button" key={data.eventName} className="btn btn-light" style={{width: 'calc(10rem / var(--size-divisor))', height: 'calc(8rem / var(--size-divisor))', fontSize: 'calc(1.2rem / var(--size-divisor))', transform: 'translate(35%, 30%)'}}>{data.label}</button></a>))

        const renderTalks = () =>  talksData.map(data =>(
            <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
                <button type="button" key={data.eventName} className="btn btn-light" style={{width: 'calc(10rem / var(--size-divisor))', height: 'calc(8rem / var(--size-divisor))', fontSize: 'calc(1.2rem / var(--size-divisor))', transform: 'translate(35%, 30%)'}}>{data.label}</button></a>))

        const settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 2, 
            rows: 2,
            responsive: [
            {
                breakpoint: 1100,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                rows: 1,
                },
            },
            ],
        };
        const settings2 = {
            infinite: false,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };
        return (
            <Container fluid className='events-section' id='EVENTS'>
                <img
                    className="building"
                    src={pantheon}
                    alt="Building"
                />
                <Row>
                    <Col>
                        <div className='leftDiv'>
                        <h1 className='events-title'>EVENTS</h1>
                        <div className='buttons'>
                            <button type="button" className="btn btn-light" id='eventdiv' onClick={() =>
                                this.setState({
                                    display1: true,
                                    display2: false,
                                    display3: false
                                })}>Competitions</button>
                            <button type="button" className="btn btn-light" href='#eventdiv' onClick={() =>
                                this.setState({
                                    display1: false,
                                    display2: true,
                                    display3: false
                                })}>Workshops</button>
                            <button type="button" className="btn btn-light" href='#eventdiv' onClick={() =>
                                this.setState({
                                    display1: false,
                                    display2: false,
                                    display3: true
                                })}>Talks</button>
                            </div>
                        </div> 
                    </Col>
                    <Col>
                    <div className='event-div'>
                        <div className='second'>
                        <button type="button" className="btn btn-light" 
                            style={{width: 'calc(15rem / var(--size-divisor))'}}>Rulebook  
                            <i className="fas fa-download"  style={{width: 'calc(2rem / var(--size-divisor))'}}></i></button>
                        </div>
                        <div className='slide-div'>
                        <div
                            style={{
                                width: 'calc(550px / (var(--div-divisor))',
                                display: this.state.display1 ? "block" : "none"
                            }}>
                            <Slider {...settings}>
                                {renderCompetitions()}
                            </Slider>
                        </div>
                        <div
                            style={{
                                width: 'calc(550px / var(--div-divisor))',
                                display: this.state.display2 ? "block" : "none"
                            }}>
                            <Slider {...settings}>
                                {renderWorkshops()}
                            </Slider>
                        </div>
                        <div
                            style={{
                                width: 'calc(550px / var(--size-divisor))',
                                display: this.state.display3 ? "block" : "none"
                            }}>
                            <Slider {...settings2}>
                                {renderTalks()}
                            </Slider>
                        </div>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
