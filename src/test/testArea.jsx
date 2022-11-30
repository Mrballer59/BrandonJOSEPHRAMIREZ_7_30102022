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
      const sorted = userData.userInfo.sort((a, b) => {
        return a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1;
      });
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = userData.userInfo.sort((a, b) =>
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

//------------------------------------------------------------------------------------------//

import React, { useContext, useState } from "react";
import Table from "../components/tableSummary/Table";
import { DataContext } from "../data/DataContext";
import "./ShowEmployee.css";
import { sortType } from "../config/StateSelector";
import Pagination from "../components/pagination/Pagination";
import data from "../config/MOCK_DATA.json";
import ReactPaginate from "react-paginate";

const ShowEmployee = () => {
  const { userInfo: users } = useContext(DataContext);

  //@TODO : grab the number of entries dynamically

  const totalPages = Math.ceil(users.length / 5);
  const [currentPage, setCurrentPage] = useState(0);

  const [employeesPerPage, setEmployeesPerPage] = useState(5);

  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };
  // onChange={changeEntries}
  return (
    <div className="container">
      <h1>Current Emplyees</h1>
      <div>
        <div className="entries-selector">
          <div>
            Show{" "}
            <select>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
            </select>{" "}
            entries
          </div>
        </div>
      </div>
      <Table />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={totalPages}
        onPageChange={changePage}
        containerClassName={"navigationButtons"}
        previousLinkClassName={"previousButton"}
        nextLinkClassName={"nextButton"}
        disabledClassName={"navigationDisabled"}
        activeClassName={"navigationActive"}
      ></ReactPaginate>

      {/* Pagination
      <span className="paginationPart">
        <Pagination
          pages={pages}
          currentPage={currentPage}
          onChangePage={setCurrentPage}
        /> 
      </span>*/}
    </div>
  );
};

//------------------------------------------------------------------------------------------//

import React from "react";
import "./Table.css";
import MockData from "../../config/MOCK_DATA.json";
import { useState, useContext } from "react";
import { DataContext } from "../../data/DataContext";
import { ThElement } from "../TableElements/ThElement";
import fields from "../../utils/fields";
import { useEffect } from "react";

const Table = () => {
  const { userInfo: users } = useContext(DataContext);

  const [order, setOrder] = useState("ASC");
  const [term, setTerm] = useState("");
  const [dataLocal, setDataLocal] = useState([]);

  useEffect(() => {
    recupereData();
  }, []);

  function recupereData() {
    const employees = JSON.parse(localStorage.getItem("employees"));
    setDataLocal(employees);
  }

  const filteredUsers = term
    ? users.filter(
        (user) =>
          // Is there an easier or cleaner way to do this ?  using the && oparator?
          user.firstName.toLowerCase().includes(term.toLowerCase()) ||
          user.lastName.toLowerCase().includes(term.toLowerCase()) ||
          user.startDate.toLowerCase().includes(term.toLowerCase()) ||
          user.departement.toLowerCase().includes(term.toLowerCase()) ||
          user.dateOfBirth.toLowerCase().includes(term.toLowerCase()) ||
          user.street.toLowerCase().includes(term.toLowerCase()) ||
          user.city.toLowerCase().includes(term.toLowerCase()) ||
          user.state.toLowerCase().includes(term.toLowerCase()) ||
          user.zipCode.toLowerCase().includes(term.toLowerCase())
      )
    : users;

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = users.sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = users.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setOrder("ASC");
    }
  };

  return (
    <div>
      <div>
        <input
          placeholder="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
        {/* {console.log(filteredUsers)} */}
      </div>
      <table>
        <tbody>
          <tr className="col-title">
            <ThElement onSort={sorting} filter="firstName">
              First Name
            </ThElement>
            <ThElement onSort={sorting} filter="lastName">
              Last Name
            </ThElement>
            <ThElement onSort={sorting} filter="startDate">
              Start Date
            </ThElement>
            <ThElement onSort={sorting} filter="departement">
              Departement
            </ThElement>
            <ThElement onSort={sorting} filter="dateOfBirth">
              Date of Birth
            </ThElement>
            <ThElement onSort={sorting} filter="street">
              Street
            </ThElement>
            <ThElement onSort={sorting} filter="city">
              City
            </ThElement>
            <ThElement onSort={sorting} filter="state">
              State
            </ThElement>
            <ThElement onSort={sorting} filter="zipCode">
              Zip Code
            </ThElement>
          </tr>
          {filteredUsers.map(
            (
              {
                firstName,
                lastName,
                startDate,
                departement,
                dateOfBirth,
                street,
                city,
                state,
                zipCode,
              },
              idx
            ) => (
              <tr key={idx}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{startDate}</td>
                <td>{departement}</td>
                <td>{dateOfBirth}</td>
                <td>{street}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{zipCode}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
