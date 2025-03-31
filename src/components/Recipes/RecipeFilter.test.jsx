import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RecipeFilter from "./RecipeFilter";
import { expect } from "vitest";

describe("RecipeFilter Component", () => {
  const mockFilters = {
    phase: "follicular",
    dietaryPreference: "vegan",
  };

  it("renders all filter options", () => {
    render(<RecipeFilter filters={mockFilters} onUpdateFilters={() => {}} />);

    expect(screen.getByLabelText(/phase/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dietary preference/i)).toBeInTheDocument();
  });

  it("calls the onUpdateFilters handler when filters are changed", () => {
    const handleUpdateFilters = vi.fn();
    render(<RecipeFilter filters={mockFilters} onUpdateFilters={handleUpdateFilters} />);

    // change phase filter
    const phaseSelect = screen.getByLabelText(/phase/i);
    fireEvent.change(phaseSelect, { target: { value: "luteal" } });
    expect(handleUpdateFilters).toHaveBeenCalledWith({
      phase: "luteal",
      dietaryPreference: "vegan",
    });

    // change dietary preference filter
    const dietarySelect = screen.getByLabelText(/dietary preference/i);
    fireEvent.change(dietarySelect, { target: { value: "gluten-free" } });
    expect(handleUpdateFilters).toHaveBeenCalledWith({
      phase: "follicular",
      dietaryPreference: "gluten-free",
    });
  });
});
