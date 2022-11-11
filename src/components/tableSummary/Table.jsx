import React from "react";
import "./Table.css";
import MockData from "../../config/MOCK_DATA.json";
import { useState } from "react";
const Table = ({ UserInfo }) => {
  //
  // const [data, setData] = useState(MockData);
  // const [order, setOrder] = useState("ASC");

  // const sortingFirstName = (col) => {
  //   if (order === "ASC") {
  //     const sorted = [...data].sort((a, b) =>
  //       a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
  //     );
  //     setData(sorted);
  //     setOrder("DSC");
  //   }
  //   if (order === "DSC") {
  //     const sorted = [...data].sort((a, b) =>
  //       a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
  //     );
  //     setData(sorted);
  //     setOrder("ASC");
  //   }
  // };

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
          {/* {data.map((e) => (
            <tr key={e.id}>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.start_date}</td>
              <td>{e.departement}</td>
              <td>{e.date_of_birth}</td>
              <td>{e.street}</td>
              <td>{e.city}</td>
            </tr>
          ))} */}

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
