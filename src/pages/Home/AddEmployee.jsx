import React from "react";
import { useState, useContext } from "react";
import { states, departement } from "../../config/StateSelector";
import "./AddEmployee.css";
import Modal from "../../components/popup/PopUp";
import { DataContext } from "../../data/DataContext";
import Dropdown from "../../components/stateSelector/Dropdown";
import Input from "../../components/inputs/Inputs";

function AddEmployee() {
  //open modal
  const [isOpen, setIsOpen] = useState(false);
  // packaging datePicker
  const [startDate, setStartDate] = useState(new Date());
  //set up DataContext for users info globle Statemanager
  const data = useContext(DataContext);
  const { userInfo, setUserInfo } = data;
  //Dropdown list custom hook

  const [user, setUser] = useState({
    state: "",
    departement: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    zipCode: "",
  });

  // console.log("state inside User : ", User.state);

  // Saves the selected drop down list and uses concat to add the new array
  const onSave = () => {
    let employees = JSON.parse(localStorage.getItem("employees")) || [];
    employees.push(user);
    localStorage.setItem("employees", JSON.stringify(employees));
    setUserInfo(userInfo.concat(user));
    setIsOpen(true);
  };

  return (
    <section className="employee-Section">
      <h2>Create Employee </h2>
      <form action="#" id="form-employee">
        <label>First Name</label>
        <Input name="firstName" type="firstName" onChangeInput={setUser} />

        <label>Last Name</label>
        <Input name="lastName" type="lastName" onChangeInput={setUser} />

        <label>Date of Birth</label>
        <Input
          name="dateOfBirth"
          type="date"
          id="dateOfBirth"
          onChangeInput={setUser}
        />

        <label>Start Date</label>
        <Input
          name="startDate"
          type="date"
          id="startDate"
          onChangeInput={setUser}
        />
        <fieldset className="address">
          <legend>Adress</legend>

          <label>Street</label>
          <Input name="street" type="street" onChangeInput={setUser} />

          <label>City</label>
          <Input name="city" type="city" onChangeInput={setUser} />

          <label>State</label>
          <Dropdown
            name="state"
            type="state"
            selector={states}
            itemSelector={true}
            onChangeState={setUser}
          />
          <label>Zip Code</label>
          <Input name="zipCode" type="zipCode" onChangeInput={setUser} />
        </fieldset>

        <label>Department</label>
        <Dropdown
          name="departement"
          type="departement"
          selector={departement}
          itemSelector={false}
          onChangeDepart={setUser}
        />
      </form>
      <button className="btn" onClick={onSave}>
        Save
      </button>
      {isOpen ? <Modal setIsOpen={setIsOpen} /> : ""}
    </section>
  );
}

export default AddEmployee;
