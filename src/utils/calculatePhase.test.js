import { calculatePhase } from "./calculatePhase";
import { describe, it, expect, vi } from "vitest";

describe("calculatePhase Util", () => {
  it("returns the correct phase and remaining days for menstrual phase", () => {
    const lastPeriod = "2025-03-01";
    const cycleLength = 28;
    const mockDate = new Date("2025-03-03T00:00:00Z");
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    const result = calculatePhase(lastPeriod, cycleLength);
    expect(result).toEqual({ phase: "menstrual", daysRemaining: 3 });

    vi.useRealTimers();
  });

  it("returns the correct phase and remaining days for follicular phase", () => {
    const lastPeriod = "2025-03-01";
    const cycleLength = 28;
    const mockDate = new Date("2025-03-08T00:00:00Z");
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    const result = calculatePhase(lastPeriod, cycleLength);
    expect(result).toEqual({ phase: "follicular", daysRemaining: 6 });

    vi.useRealTimers();
  });

  it("handles invalid inputs gracefully", () => {
    const result = calculatePhase("", 28);

    expect(result).toEqual({ phase: "", daysRemaining: null });
  });

  it("returns correct phase for day 0 of the cycle (start of menstrual phase)", () => {
    const lastPeriod = "2025-03-01";
    const cycleLength = 28;
    const mockDate = new Date("2025-03-01T00:00:00Z");
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);

    const result = calculatePhase(lastPeriod, cycleLength);
    expect(result).toEqual({ phase: "menstrual", daysRemaining: 5 });

    vi.useRealTimers();
  });
});
