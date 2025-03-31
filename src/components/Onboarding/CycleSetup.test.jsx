import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CycleSetup from "./CycleSetup";

describe("CycleSetup Component", () => {
  it("renders all fields for cycle setup", () => {
    const mockData = { lastPeriod: "2025-02-01", cycleLength: 28 };

    render(<CycleSetup data={mockData} onSubmit={() => {}} />);

    expect(screen.getByLabelText(/date of last period/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/cycle length/i)).toBeInTheDocument();
  });

  it("calls the onSubmit handler with the correct data", () => {
    const mockData = { lastPeriod: "", cycleLength: "" };
    const handleSubmit = vi.fn();

    render(<CycleSetup data={mockData} onSubmit={handleSubmit} />);

    fireEvent.change(screen.getByLabelText(/date of last period/i), { target: { value: "2025-02-01" } });
    fireEvent.change(screen.getByLabelText(/cycle length/i), { target: { value: 28 } });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleSubmit).toHaveBeenCalledWith({
      lastPeriod: "2025-02-01",
      cycleLength: 28,
    });
  });
});
