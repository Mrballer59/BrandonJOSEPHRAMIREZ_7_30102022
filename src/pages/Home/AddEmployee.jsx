import React from "react";
// import { DataContext } from "../../data/dataContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState, useContext } from "react";
import { states, departement } from "../../config/StateSelector";
import "./AddEmployee.css";
import Modal from "../../components/popup/popUp";
import StateSeletor from "../../components/stateSelector/StateSeletor";

function AddEmployee() {
  const [isOpen, setIsOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const [User, setUser] = useState({
    state: "",
    department: "",
  });

  return (
    <section className="employee-Section">
      <h2>Create Employee </h2>
      <form action="#" id="form-employee">
        <label htmlFor="FirstName">First Name</label>
        <input type="text" id="FirstName" />

        <label htmlFor="LastName">Last Name</label>
        <input type="text" id="LastName" />

        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />

        <label htmlFor="Start-date">Start Date</label>
        <DatePicker
          id="start-date"
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        />

        <fieldset className="address">
          <legend>Adress</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="street">City</label>
          <input id="street" type="text" />

          <StateSeletor
            title="states"
            type={states}
            setUser={setUser}
            User={User}
          />
          <label htmlFor="street">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <StateSeletor
          title="Departement"
          type={departement}
          setUser={setUser}
          User={User}
        />
      </form>
      <button className="btn" onClick={() => setIsOpen(true)}>
        Save
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </section>
  );
}

export default AddEmployee;
