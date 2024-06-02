export const validateFormData = (formData) => {
  let errors = {};

  errors.firstName = formData.firstName ? "" : "First Name is required";
  errors.lastName = formData.lastName ? "" : "Last Name is required";
  errors.email = formData.email
    ? formData.email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
      ? ""
      : "Email is not valid"
    : "Email is required";
  errors.age = formData.age
    ? formData.age >= 18
      ? ""
      : "Age must be 18 or above"
    : "Age is required";
  errors.product = formData.product ? "" : "Product is required";

  return errors;
};

export const isFormValid = (errors) => {
  return Object.values(errors).every((error) => error === "");
};
