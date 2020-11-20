import React from "react";

import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    // <div className="d-flex justify-content-center">

    // </div>
    <div
      className="modal fade show"
      data-backdrop="static"
      tabIndex="-1"
      data-keyboard="false"
      aria-hidden="false"
      arial-aria-modal="true"
      role="dialog"
      style={{display: "block"}}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-body d-flex justify-content-center">
            <div className="spinner-border text-dark" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
