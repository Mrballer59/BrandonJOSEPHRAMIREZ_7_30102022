import React, { useContext } from "react";
import Table from "../components/tableSummary/Table";
import { DataContext } from "../data/DataContext";
import "./SummaryList.css";
import { sortType } from "../config/StateSelector";
// import StateSeletor from "../components/stateSelector/StateSeletor";

const SummaryList = () => {
  const data = useContext(DataContext);
  const { UserInfo } = data;
  return (
    <div className="container">
      <h1>Current Emplyees</h1>
      <div>
        <div className="entries-selector">
          <span>Show</span>
          <select>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
            <option>30</option>
          </select>
          <span>entries</span>
        </div>
      </div>
      <Table UserInfo={UserInfo} />
    </div>
  );
};

export default SummaryList;
