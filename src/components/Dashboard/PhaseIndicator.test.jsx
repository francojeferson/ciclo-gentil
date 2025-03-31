import React from "react";
import { render, screen } from "@testing-library/react";
import PhaseIndicator from "./PhaseIndicator";

describe("PhaseIndicator Component", () => {
  it("renders the current phase correctly", () => {
    render(<PhaseIndicator phase="follicular" />);

    expect(screen.getByText(/follicular/i)).toBeInTheDocument();
  });
});
