import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Participants.css";
import { variables } from "../../variables";

function Participants(props) {
  const [participantData, setParticipantData] = useState([[]]);
  useEffect(() => {
    // console.log(props.match.params.eventName);
    axios
      .get(
        `${variables.backendURL}/api/teams/${props.match.params.eventName}/${variables.protectedToken}`
      )
      .then((res) => {
        console.log(res.data);
        if (res.data[0]) {
          setParticipantData(res.data);
        } else {
          setParticipantData([[]]);
        }
      });
  }, [props.match.params.eventName]);

  return (
    <div className="participants-div">
      <p>
        {props.match.params.eventName.charAt(0).toUpperCase() +
          props.match.params.eventName.slice(1)}{" "}
        Participants
      </p>
      <div className="container table-responsive">
        <table className="table table-bordered table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Team No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">UID</th>
            </tr>
          </thead>
          <tbody>
            {participantData.map((team, i) => {
              return (
                <React.Fragment key={i}>
                  <tr>
                    <th scope="row" rowSpan={team.length + 1}>
                      {i + 1}
                    </th>
                  </tr>
                  {team.map((each, j) => {
                    return (
                      <tr key={j}>
                        <td>{each.name}</td>
                        <td>{each.email}</td>
                        <td>{each.contact}</td>
                        <td>{each.uid}</td>
                      </tr>
                    );
                  })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withRouter(Participants);
