import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./Participants.css";
import { variables } from "../../variables";

function Participants(props) {
  useEffect(() => {
    // console.log(props.match.params.eventName);
    axios
      .get(`${variables.backendURL}/api/teams/${props.match.params.eventName}`)
      .then((res) => {
        console.log(res.data);
      });
  }, [props.match.params.eventName]);

  return (
    <div className="participants-div">
      <h1>Participants</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default withRouter(Participants);
