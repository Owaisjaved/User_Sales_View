import React from "react";
import PropTypes from "prop-types";
import "./FormInputs.css";

const SelectInput = ({ label, name, value, onChange, options, error }) => (
  <div className="form-group">
    <label htmlFor={name} className="label">
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="select"
    >
      <option value="">Select {label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <span className="error">{error}</span>}
  </div>
);

SelectInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
  error: PropTypes.string,
};

export default SelectInput;
