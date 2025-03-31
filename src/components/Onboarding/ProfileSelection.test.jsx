import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProfileSelection from "./ProfileSelection";
import { expect } from "vitest";

describe("ProfileSelection Component", () => {
  it("renders both profile options", () => {
    render(<ProfileSelection onSelect={() => {}} />);

    expect(screen.getByRole("button", { name: /woman/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /partner/i })).toBeInTheDocument();
  });

  it("calls the onSelect handler with the correct profile option", () => {
    const handleSelect = vi.fn();
    render(<ProfileSelection onSelect={handleSelect} />);

    const womanButton = screen.getByRole("button", { name: /woman/i });
    const partnerButton = screen.getByRole("button", { name: /partner/i });

    fireEvent.click(womanButton);
    expect(handleSelect).toHaveBeenCalledWith("woman");

    fireEvent.click(partnerButton);
    expect(handleSelect).toHaveBeenCalledWith("partner");
  });
});
