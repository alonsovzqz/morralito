import React from "react";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1 className="text-center py-3">Operaciones</h1>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="operations"></div>
        <div className="options d-flex justify-content-end w-100"></div>
      </div>
    </div>
  );
};

export default Dashboard;
