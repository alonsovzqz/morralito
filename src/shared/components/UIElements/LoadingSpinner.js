import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
