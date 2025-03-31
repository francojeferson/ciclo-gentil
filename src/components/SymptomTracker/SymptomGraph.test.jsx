import React from "react";
import { render, screen } from "@testing-library/react";
import SymptomGraph from "./SymptomGraph";

describe("SymptomGraph Component", () => {
  it("renders the graph with the provided data", () => {
    const mockData = [
      { date: "2025-02-01", painLevel: 2, mood: "happy", bloating: "no" },
      { date: "2025-02-02", painLevel: 3, mood: "neutral", bloating: "yes" },
      { date: "2025-02-03", painLevel: 1, mood: "sad", bloating: "no" },
    ];

    render(<SymptomGraph data={mockData} />);
    expect(screen.getByText(/2025-02-01/i)).toBeInTheDocument();
    expect(screen.getByText(/2025-02-02/i)).toBeInTheDocument();
    expect(screen.getByText(/2025-02-03/i)).toBeInTheDocument();
  });

  it("displays 'No data available' if no data is provided", () => {
    render(<SymptomGraph data={[]} />);
    expect(screen.getByText(/No data available/i)).toBeInTheDocument();
  });
});
