import React from "react";
import "./stateSelector.css";

function Dropdown({
  name,
  type,
  selector,
  itemSelector,
  onChangeState,
  onChangeDepart,
}) {
  const handleChange = (e) => {
    onChangeState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleChangeDe = (e) => {
    onChangeDepart((prevDepart) => ({
      ...prevDepart,
      [e.target.name]: e.target.value,
    }));
  };
  return itemSelector ? (
    <select name={name} type={type} onChange={handleChange}>
      {selector.map((elm) => (
        <option key={`${type}-${elm.abbreviation}`} value={elm.abbreviation}>
          {elm.name}
        </option>
      ))}
    </select>
  ) : (
    <select name={name} type={type} onChange={handleChangeDe}>
      {selector.map((elm) => (
        <option key={`${type}-${elm}`}>{elm}</option>
      ))}
    </select>
  );
}

export default Dropdown;
