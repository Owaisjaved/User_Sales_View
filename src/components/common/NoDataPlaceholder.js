import React from "react";
import "./NoDataPlaceholder.css";

const NoDataPlaceholder = ({ message }) => {
  return (
    <div className="no-data-placeholder">
      <p>{message}</p>
    </div>
  );
};

NoDataPlaceholder.defaultProps = {
  message: "No data available",
};

export default NoDataPlaceholder;
