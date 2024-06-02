import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import InsuranceForm from "../InsuranceForm";

describe("InsuranceForm", () => {
  const onSubmitMock = jest.fn();

  it("submits the form with valid data", async () => {
    const { getByLabelText, getByText } = render(
      <InsuranceForm onSubmit={onSubmitMock} />
    );

    fireEvent.change(getByLabelText("First Name"), {
      target: { value: "John" },
    });
    fireEvent.change(getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(getByLabelText("Age"), { target: { value: "25" } });
    fireEvent.change(getByLabelText("Product"), {
      target: { value: "iPhone 12 Pro" },
    });

    fireEvent.click(getByText("Submit"));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        age: "25",
        product: "iPhone 12 Pro",
      });
    });
  });

  it("displays error messages for invalid data", async () => {
    const { getByText } = render(<InsuranceForm onSubmit={onSubmitMock} />);

    fireEvent.click(getByText("Submit"));

    // await waitFor(() => {
    expect(getByText("First Name is required")).toBeInTheDocument();
    expect(getByText("Last Name is required")).toBeInTheDocument();
    expect(getByText("Email is required")).toBeInTheDocument();
    expect(getByText("Age is required")).toBeInTheDocument();
    expect(getByText("Product is required")).toBeInTheDocument();
    // });
  });
});
