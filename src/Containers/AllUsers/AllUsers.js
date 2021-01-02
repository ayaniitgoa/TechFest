import React, { useEffect, useState } from "react";
import "./AllUsers.css";
import axios from "axios";
import { variables } from "../../variables";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

function AllUsers() {
  const [userData, setUserData] = useState({
    data: [],
  });
  useEffect(() => {
    axios
      .get(`${variables.backendURL}/api/allusers/${variables.protectedToken}`)
      .then((res) => {
        // console.log(res.data);
        setUserData(res.data);
        // console.log(res.data.data.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="allusers">
      <p>All Users</p>

      <ReactHTMLTableToExcel
        id="export-to-excel-btn"
        className="button-excel download-table-xls-button"
        table="allusers-table"
        filename="allusers"
        sheet="sheet 1"
        buttonText="Download as XLS"
      />
      <div className=" table-responsive">
        <table
          className="table table-hover table-bordered table-dark"
          id="allusers-table"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">College</th>
              {/* <th scope="col">UID</th> */}
              <th scope="col">Events</th>
              <th scope="col">No. of events</th>
            </tr>
          </thead>
          <tbody>
            {userData.data.length > 0
              ? userData.data.map((user, i) => {
                  return (
                    <tr key={i}>
                      <React.Fragment>
                        <th scope="row">{i + 1}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.contact}</td>
                        <td>{user.college}</td>
                        {/* <td>{user.uid}</td> */}
                        <td>
                          {user.events.map((e, i) => {
                            return <li key={i}>{e}</li>;
                          })}
                        </td>
                        <td>{user.events.length}</td>
                      </React.Fragment>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllUsers;
