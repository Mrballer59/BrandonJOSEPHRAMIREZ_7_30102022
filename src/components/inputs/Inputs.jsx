import React from "react";

const Input = ({ name, type, onChangeInput }) => {
  const handleSubmit = (e) => {
    onChangeInput((save) => ({
      ...save,
      [e.target.name]: e.target.value,
    }));
  };
  return <input name={name} type={type} onChange={handleSubmit} />;
};
export default Input;
