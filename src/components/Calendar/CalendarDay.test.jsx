import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CalendarDay from "./CalendarDay";
import { expect } from "vitest";

describe("CalendarDay Component", () => {
  it("renders the correct day number", () => {
    render(<CalendarDay day={15} phase="menstrual" />);

    const day = screen.getByText("15");
    expect(day).toBeInTheDocument();
  });

  it("applies the correct className for the phase", () => {
    render(<CalendarDay day={15} phase="follicular" />);

    const day = screen.getByText("15");
    expect(day.parentElement.className).toContain("phase-follicular");
  });

  it("highlights the current day", () => {
    render(<CalendarDay day={15} isToday={true} />);

    const day = screen.getByText("15");
    expect(day.parentElement.className).toContain("today");
  });

  it("calls onClick handler with the day number", () => {
    const handleClick = vi.fn();
    render(<CalendarDay day={10} onClick={handleClick} />);

    const day = screen.getByText("10");
    fireEvent.click(day);

    expect(handleClick).toHaveBeenCalledWith(10);
  });
});
