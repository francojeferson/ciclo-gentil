import React from "react";
import { render, screen } from "@testing-library/react";
import PartnerTips from "./PartnerTips";

describe("PartnerTips Component", () => {
  it("renders the tips for the current phase", () => {
    const mockTips = {
      phase: "follicular",
      tips: ["Prepare a meal rich in leafy greens.", "encourage light physical activity."],
    };

    render(<PartnerTips tips={mockTips} />);

    expect(screen.getByText(/follicular/i)).toBeInTheDocument();
    expect(screen.getByText(/prepare a meal rich in leafy greens/i)).toBeInTheDocument();
    expect(screen.getByText(/encourage light physical activity/i)).toBeInTheDocument();
  });

  it("renders a fallback message if no tips are provided", () => {
    render(<PartnerTips tips={{ phase: "", tips: [] }} />);

    expect(screen.getByText(/no tips available for this phase/i)).toBeInTheDocument();
  });
});
