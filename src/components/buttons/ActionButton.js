import React from "react";
import PropTypes from "prop-types";
import "./ActionButton.css"; // Assuming you want to add some styles

const ActionButton = ({ type, onClick, disabled, children, className }) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={`action-button ${className}`}
  >
    {children}
  </button>
);

ActionButton.propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ActionButton.defaultProps = {
  type: "button",
  onClick: () => {},
  disabled: false,
  className: "",
};

export default ActionButton;
