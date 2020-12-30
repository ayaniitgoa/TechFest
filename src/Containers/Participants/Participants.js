import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Participants.css";
import { variables } from "../../variables";

function Participants(props) {
  const [participantData, setParticipantData] = useState([]);
  useEffect(() => {
    // console.log(props.match.params.eventName);
    axios
      .get(`${variables.backendURL}/api/teams/${props.match.params.eventName}`)
      .then((res) => {
        console.log(res.data);
        setParticipantData(res.data);
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
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">Team No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {participantData.map((team, i) => {
              return (
                <React.Fragment key={i}>
                  {team.map((each, j) => {
                    return (
                      <tr key={j}>
                        <th scope="row">{i + 1}</th>
                        <td>{each.name}</td>
                        <td>{each.email}</td>
                        <td>{each.contact}</td>
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
