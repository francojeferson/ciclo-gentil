import React from "react";
import { render, screen } from "@testing-library/react";
import PhaseLegend from "./PhaseLegend";

describe("PhaseLegend Component", () => {
  it("renders a legend item for each cycle phase", () => {
    render(<PhaseLegend />);
    expect(screen.getByText(/Menstrual/i)).toBeInTheDocument();
    expect(screen.getByText(/Follicular/i)).toBeInTheDocument();
    expect(screen.getByText(/Ovulatory/i)).toBeInTheDocument();
    expect(screen.getByText(/Luteal/i)).toBeInTheDocument();
  });

  it("renders a color indicator for each phase", () => {
    render(<PhaseLegend />);
    const indicators = screen.getAllByTestId("phase-indicator");
    expect(indicators.length).toBe(4);
  });
});
