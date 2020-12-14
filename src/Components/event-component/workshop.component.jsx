import React from "react";
import './events.styles.css';
import workshopData from './workshopData.js'

const WorkShopComp = () =>{
    return(
        <div className='eventdiv slideshow-container'>
            {workshopData.map(data =>(
                <a href={`http://techfestcepheus.netlify.app/event/${data.eventName}`} rel="noreferrer">
                    <button type="button" key={data.eventName} className="btn btn-light" style={{width: '11rem', height: '8rem'}}>{data.label}</button></a>
            ))}
        </div>
    )
}

export default WorkShopComp;
