import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./IndividualEventRegistration.css";
import { data } from "../IndividualEvent/eventData";

function IndividualEventRegistraion(props) {
  const [numOfFields, setNumOfFields] = useState(0);
  useEffect(() => {
    data.map((e, i) => {
      if (e.eventName === props.match.params.eventName) {
        setNumOfFields(e.numOfFields);
      }
      return numOfFields;
    });
  }, [numOfFields, props]);
  return (
    <div>
      <div className="">
        <Link to="/">
          <i className="ind-event-back fas fa-chevron-left"></i>
        </Link>
        {numOfFields}
      </div>
    </div>
  );
}

export default withRouter(IndividualEventRegistraion);
