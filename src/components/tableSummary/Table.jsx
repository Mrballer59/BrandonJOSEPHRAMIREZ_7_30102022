import React from "react";
import "./Table.css";
import MockData from "../../config/MOCK_DATA.json";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../../data/DataContext";

const Table = () => {
  const userData = useContext(DataContext);
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("ASC");

  console.log(userData.UserInfo);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => {
        console.log(a);

        console.log(b);

        console.log(col);

        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };

  return (
    <div>
      <table>
        <tbody>
          <tr className="col-title">
            <th onClick={() => sorting("firstName")}>First Name</th>
            <th onClick={() => sorting("lastName")}>Last Name</th>
            <th>Start Date</th>
            <th>Departement </th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City </th>
            <th>state </th>
            <th>Zip code </th>
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

// const sorting = (col) => {
//   if (order === "ASC") {
//     const sorted = [...data].sort((a, b) => {
//       console.log(a);
//       return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
//     });

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

{
  /* <th onClick={() => sorting("first_name")}>First Name</th>
            <th onClick={() => sorting("last_name")}>Last Name</th>
            <th onClick={() => sorting("start_date")}>Start Date</th>
            <th onClick={() => sorting("departement")}>Departement </th>
            <th onClick={() => sorting("date_of_birth")}>Date of Birth</th>
            <th onClick={() => sorting("street")}>Street</th>
            <th onClick={() => sorting("city")}>City </th>
            <th onClick={() => sorting("first_name")}>state </th>
            <th onClick={() => sorting("first_name")}>Zip code </th> */
}

{
  /* {UserInfo.map((e,) => (
            <tr key={e.id}>
              <td>{e.first_name}</td>
              <td>{e.last_name}</td>
              <td>{e.start_date}</td>
              <td>{e.departement}</td>
              <td>{e.date_of_birth}</td>
              <td>{e.street}</td>
              <td>{e.city}</td>
            </tr>
          ))} */
}
