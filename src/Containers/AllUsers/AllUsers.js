import React, { useEffect, useState } from "react";
import "./AllUsers.css";
import axios from "axios";
import { variables } from "../../variables";
import { CSVLink } from "react-csv";

function AllUsers() {
  const [userData, setUserData] = useState({
    data: [],
  });
  const [all, setAll] = useState([[]]);

  useEffect(() => {
    axios
      .get(`${variables.backendURL}/api/allusers/${variables.protectedToken}`)
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.data.length);
        setUserData(res.data);
        let allUserData = [["Name", "Email", "Contact", "College"]];
        // allUserData.push(res.data);
        res.data.data.map((user, i) => {
          return allUserData.push([
            user.name,
            user.email,
            user.contact,
            user.college,
          ]);
        });
        // console.log(allUserData);
        setAll(allUserData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="allusers">
      <p>All Users</p>

      <CSVLink
        data={all}
        filename={"allUsers.csv"}
        target="_blank"
        className="button-excel download-table-xls-button"
      >
        Download UserData in CSV
      </CSVLink>

      <div className=" table-responsive">
        <table
          className="table table-hover table-bordered table-dark"
          id="allusers-table"
        >
          <thead>
            <tr>
              <th scope="col">#</th>
              {/* <th scope="col">ID</th> */}
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">College</th>
              <th scope="col">Events</th>
              <th scope="col">No. of events</th>
              {/* <th scope="col">UID</th> */}
            </tr>
          </thead>
          <tbody>
            {userData.data.length > 0
              ? userData.data.map((user, i) => {
                  return (
                    <tr key={i}>
                      <React.Fragment>
                        <th scope="row">{i + 1}</th>
                        {/* <td>{user._id}</td> */}
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
