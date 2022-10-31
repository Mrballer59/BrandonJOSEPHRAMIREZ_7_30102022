import React from "react";
//import DatePicker from "react";
import { useState } from "react";
import "./AddEmployee.css";

function AddEmployee() {
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

        <fieldset className="address">
          <legend>Adress</legend>

          <label htmlFor="street">Street</label>
          <input id="street" type="text" />

          <label htmlFor="street">City</label>
          <input id="street" type="text" />

          <label htmlFor="street">State</label>
          <input id="state" type="text" />

          <label htmlFor="street">Zip Code</label>
          <input id="zip-code" type="number" />
        </fieldset>

        <label htmlFor="departement">Departement</label>
        <select name="department" id="department">
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>
      </form>
      <button>Save</button>
    </section>
  );
}

export default AddEmployee;
