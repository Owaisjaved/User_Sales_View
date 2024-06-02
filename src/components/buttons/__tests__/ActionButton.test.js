import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ActionButton from "../ActionButton";

describe("ActionButton", () => {
  it("renders children and calls onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ActionButton onClick={onClickMock}>Click me</ActionButton>
    );

    const button = getByText("Click me");
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("disables the button when disabled prop is true", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <ActionButton onClick={onClickMock} disabled>
        Click me
      </ActionButton>
    );

    const button = getByText("Click me");
    fireEvent.click(button);

    expect(button).toBeDisabled();
    expect(onClickMock).toHaveBeenCalledTimes(0);
  });

  it("applies custom className to the button", () => {
    const { getByText } = render(
      <ActionButton className="custom-button">Click me</ActionButton>
    );

    const button = getByText("Click me");

    expect(button).toHaveClass("custom-button");
  });
});
