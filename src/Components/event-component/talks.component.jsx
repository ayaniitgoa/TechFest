import React from "react";
import './events.styles.css';
import talksData from './talksData';

const TalksComp = () =>{
    return(
        <div className='eventdiv slideshow-container'>
            {talksData.map(data =>(
                <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
                    <button type="button" key={data.eventName} className="btn btn-light" style={{width: '11rem', height: '8rem'}}>{data.label}</button></a>
            ))}
        </div>
    )
}

export default TalksComp;