import React from "react";
import "./Table.css";
const Table = ({ UserInfo }) => {
  console.log("userinfo inside table = ", UserInfo);
  return (
    <div>
      <table>
        <tbody>
          <tr className="col-title">
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Departement </th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City </th>
            <th>state </th>
            <th>Zip code </th>
          </tr>
          {UserInfo.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.startDate}</td>
              <td>{user.departement}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.street}</td>
              <td>{user.city}</td>
              <td>{user.state}</td>
              <td>{user.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
