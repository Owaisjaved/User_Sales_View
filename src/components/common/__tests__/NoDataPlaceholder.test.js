import React from "react";
import { render } from "@testing-library/react";
import NoDataPlaceholder from "../NoDataPlaceholder";

describe("NoDataPlaceholder", () => {
  it("renders with default message when no message prop is provided", () => {
    const { getByText } = render(<NoDataPlaceholder />);
    const defaultMessage = getByText("No data available");
    expect(defaultMessage).toBeInTheDocument();
  });

  it("renders with provided message", () => {
    const customMessage = "Custom message";
    const { getByText } = render(<NoDataPlaceholder message={customMessage} />);
    const customMessageElement = getByText(customMessage);
    expect(customMessageElement).toBeInTheDocument();
  });
});
