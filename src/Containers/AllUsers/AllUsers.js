import React, { useEffect, useState } from "react";
import "./AllUsers.css";
import axios from "axios";
import { variables } from "../../variables";

function AllUsers() {
  const [userData, setUserData] = useState({
    data: [],
  });
  useEffect(() => {
    axios
      .get(`${variables.backendURL}/api/allusers`)
      .then((res) => {
        console.log(res.data);
        setUserData(res.data);
        console.log(res.data.data.length);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="allusers">
      <p>All Users</p>
      <div className="container table-responsive">
        <table className="table table-hover table-bordered table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Contact</th>
              <th scope="col">College</th>
              <th scope="col">UID</th>
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
                        <td>{user.uid}</td>
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
