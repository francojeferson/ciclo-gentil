import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import useCyclePhase from "./useCyclePhase";

// test component that renders the hook's output
const TestComponent = ({ lastPeriod, cycleLength }) => {
  const { phase, daysRemaining } = useCyclePhase(lastPeriod, cycleLength);

  return (
    <div>
      <p>Phase: {phase}</p>
      <p>Days Remaining: {daysRemaining}</p>
    </div>
  );
};

describe("useCyclePhase Hook", () => {
  it("calculates the correct phase and remaining days", () => {
    const lastPeriod = "2025-03-01"; // fixed date
    const cycleLength = 28;

    // mock 'today' as '2025-03-10' for the test
    const mockDate = new Date("2025-03-10T00:00:00Z");
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    render(<TestComponent lastPeriod={lastPeriod} cycleLength={cycleLength} />);

    expect(screen.getByText(/Phase: follicular/i)).toBeInTheDocument();
    expect(screen.getByText("Days Remaining: 4")).toBeInTheDocument();

    // clean up fake timer
    vi.useRealTimers();
  });

  it("handles invalid inputs gracefully", () => {
    render(<TestComponent lastPeriod="" cycleLength={28} />);

    expect(screen.getByText(/Phase:/i)).toBeInTheDocument();
    expect(screen.getByText(/Days Remaining:/i)).toBeInTheDocument();
  });
});
