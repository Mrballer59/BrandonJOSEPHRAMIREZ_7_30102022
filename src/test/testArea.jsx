import React from "react";
import "./Table.css";
import MockData from "../../config/MOCK_DATA.json";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../data/DataContext";

const Table = () => {
  const userData = useContext(DataContext);
  //SORT colmns
  const [data, setData] = useState();
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = userData.UserInfo.sort((a, b) => {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = userData.UserInfo.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  // searchBar
  const [users, setUser] = useState("");
  const [searchPharse, setSearchPhrase] = useState("");

  const search = (event) => {
    const matchedUsers = userData.UserInfo.filter((users) => {
      return (
        users.firstName
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        users.lastName
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        users.startDate
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        users.departement
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        users.dateOfBirth
          .toLowerCase()
          .includes(event.target.value.toLowerCase()) ||
        users.street.toLowerCase().includes(event.target.value.toLowerCase()) ||
        users.city.toLowerCase().includes(event.target.value.toLowerCase())
      );
    });
    setUser(matchedUsers);

    console.log(matchedUsers);
    setSearchPhrase(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          type="search"
          placeholder="search"
          value={searchPharse}
          onChange={search}
        />
        {console.log(searchPharse)}
      </div>
      <table>
        <tbody>
          <tr className="col-title">
            <th onClick={() => sorting("firstName")}>First Name</th>
            <th onClick={() => sorting("lastName")}>Last Name</th>
            <th onClick={() => sorting("startDate")}>Start Date</th>
            <th onClick={() => sorting("departement")}>Departement </th>
            <th onClick={() => sorting("dateOfBirth")}>Date of Birth</th>
            <th onClick={() => sorting("street")}>Street</th>
            <th onClick={() => sorting("city")}>City </th>
            <th onClick={() => sorting("state")}>state </th>
            <th onClick={() => sorting("zipCode")}>Zip code </th>
          </tr>

          {userData.UserInfo.map((user, index) => (
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