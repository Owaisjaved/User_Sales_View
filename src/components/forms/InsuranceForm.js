import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextInput from "../formFields/TextInput";
import EmailInput from "../formFields/EmailInput";
import NumberInput from "../formFields/NumberInput";
import SelectInput from "../formFields/SelectInput";
import { validateFormData, isFormValid } from "../../utils/validation";
import useFetchDevices from "../../hooks/useFetchDevices";
import ActionButton from "../buttons/ActionButton";
import "./InsuranceForm.css";

const InsuranceForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    product: "",
  });

  const [errors, setErrors] = useState({});
  const devices = useFetchDevices();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);

    if (isFormValid(validationErrors)) {
      onSubmit(formData);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        age: "",
        product: "",
      });
    }
  };

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  return (
    <form className="insurance-form" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <TextInput
            label="First Name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            error={errors.firstName}
          />
        </div>
        <div className="col">
          <TextInput
            label="Last Name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            error={errors.lastName}
          />
        </div>
      </div>
      <EmailInput
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        error={errors.email}
      />
      <div className="row">
        <div className="col">
          <NumberInput
            label="Age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Age"
            error={errors.age}
          />
        </div>
        <div className="col">
          <SelectInput
            label="Product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            options={devices.map((device) => ({
              label: device.label,
              value: device.label,
            }))}
            error={errors.product}
          />
        </div>
      </div>
      <ActionButton type="submit">Submit</ActionButton>
    </form>
  );
};

InsuranceForm.propTypes = {
  products: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.object,
};

export default InsuranceForm;
