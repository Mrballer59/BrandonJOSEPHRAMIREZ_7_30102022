import React from "react";
import "./Table.css";
import MockData from "../../config/MOCK_DATA.json";
import { useState, useContext } from "react";
import { DataContext } from "../../data/DataContext";
import { ThElement } from "../TableElements/ThElement";
import { useEffect } from "react";
import ReactPaginate from "react-paginate";

const Table = () => {
  const { userInfo: users } = useContext(DataContext);

  const [order, setOrder] = useState("ASC");
  const [term, setTerm] = useState("");
  //Pagination
  const [currentPage, setCurrentPage] = useState(0);

  const [employeesPerPage, setEmployeesPerPage] = useState(10);
  const [numberOfEmployeesVisited, setNumberOfEmployeesVisited] = useState(
    currentPage * employeesPerPage
  );
  const [employeeFiltered, setEmployeeFiltered] = useState([]);
  const totalPages = Math.ceil(users.length / employeesPerPage);

  useEffect(() => {
    setNumberOfEmployeesVisited(currentPage * employeesPerPage);
  }, [currentPage, employeesPerPage]);

  function changeEntries(event) {
    setEmployeesPerPage(event.target.value);
  }
  const changePage = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    setEmployeeFiltered(
      users
        .filter(
          (employee) =>
            employee.firstName.toLowerCase().includes(term.toLowerCase()) ||
            employee.lastName.toLowerCase().includes(term.toLowerCase()) ||
            employee.startDate.toLowerCase().includes(term.toLowerCase()) ||
            employee.departement.toLowerCase().includes(term.toLowerCase()) ||
            employee.dateOfBirth.toLowerCase().includes(term.toLowerCase()) ||
            employee.street.toLowerCase().includes(term.toLowerCase()) ||
            employee.city.toLowerCase().includes(term.toLowerCase()) ||
            employee.state.toLowerCase().includes(term.toLowerCase()) ||
            employee.zipCode.toLowerCase().includes(term.toLowerCase())
        )
        .slice(
          numberOfEmployeesVisited,
          numberOfEmployeesVisited + employeesPerPage
        )
    );
  }, [users, term, employeesPerPage, numberOfEmployeesVisited]);

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = employeeFiltered.sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = employeeFiltered.sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setOrder("ASC");
    }
  };

  return (
    <div className="wrapper">
      <div className="employee-table">
        <div>
          Show{" "}
          <select className="smallSelect" onChange={changeEntries}>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>{" "}
          entries
        </div>

        <input
          placeholder="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </div>
      <div className="tableBody">
        {employeeFiltered.length === 0 ? (
          <p className="peeTag">No matching Employee is found</p>
        ) : (
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
              {employeeFiltered.map(
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
        )}
      </div>
      {/* here pagination */}
      <div className="pagination-Part">
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
      </div>
    </div>
  );
};

export default Table;
