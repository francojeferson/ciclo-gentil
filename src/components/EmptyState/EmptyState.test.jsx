import React from "react";
import { render, screen } from "@testing-library/react";
import EmptyState from "./EmptyState";

describe("EmptyState Component", () => {
  it("renders the provided message", () => {
    render(<EmptyState message="No recipes available" />);
    expect(screen.getByText(/no recipes available/i)).toBeInTheDocument();
  });

  it("displays the default message if no message is provided", () => {
    render(<EmptyState />);
    expect(screen.getByText(/nothing to display/i)).toBeInTheDocument();
  });
});
