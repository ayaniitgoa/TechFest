import React from "react";
import './events.styles.css';
import competitionData from './competitionData'

const CompetitionComp = () =>{
    return(
        <div className='eventdiv slideshow-container'>
            {competitionData.map(data =>(
                <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
                    <button type="button" key={data.eventName} className="btn btn-light" style={{width: '11rem', height: '8rem'}}>{data.label}</button></a>
            ))}
        </div>
    )
}

export default CompetitionComp;