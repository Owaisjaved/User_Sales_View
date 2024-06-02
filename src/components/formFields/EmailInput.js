import React from "react";
import PropTypes from "prop-types";
import "./FormInputs.css";

const EmailInput = ({ label, name, value, onChange, placeholder, error }) => (
  <div className="form-group">
    <label htmlFor={name} className="label">
      {label}
    </label>
    <input
      id={name}
      type="email"
      name={name}
      value={value}
      className="input"
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

EmailInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

export default EmailInput;
