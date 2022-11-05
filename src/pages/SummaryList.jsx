import React, { useContext } from "react";
import Table from "../components/tableSummary/Table";
import { DataContext } from "../data/DataContext";

const SummaryList = () => {
  const data = useContext(DataContext);
  const { UserInfo } = data;
  return (
    <div className="container">
      <h1>Current Emplyees</h1>
      <div>
        <div>
          <span>Show</span>
          <span>entries</span>
        </div>
      </div>
      <Table UserInfo={UserInfo} />
    </div>
  );
};

export default SummaryList;
