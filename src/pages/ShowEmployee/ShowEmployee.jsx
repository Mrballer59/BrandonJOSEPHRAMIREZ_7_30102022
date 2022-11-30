import React, { useContext, useState, useEffect } from "react";
import Table from "../../components/tableSummary/Table";
import { DataContext } from "../../data/DataContext";
import "./ShowEmployee.css";
import ReactPaginate from "react-paginate";

const ShowEmployee = () => {
  return (
    <div className="container">
      <h1>Current Emplyees</h1>
      <Table />
    </div>
  );
};

export default ShowEmployee;
