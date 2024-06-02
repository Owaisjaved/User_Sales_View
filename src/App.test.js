import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("checks the heading", () => {
    render(<App />);
    const insuranceFormHeading = screen.getByText(/Insurance Form/i);
    expect(insuranceFormHeading).toBeInTheDocument();
  });
});
