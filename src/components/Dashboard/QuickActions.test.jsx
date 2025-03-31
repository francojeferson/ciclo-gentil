import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import QuickActions from "./QuickActions";
import { expect } from "vitest";

describe("QuickActions Component", () => {
  it("renders all action buttons", () => {
    render(<QuickActions />);
    expect(screen.getByText(/log symptoms/i)).toBeInTheDocument();
    expect(screen.getByText(/view recipes/i)).toBeInTheDocument();
  });

  it("calls the correct handler when buttons are clicked", () => {
    const onLogSymptoms = vi.fn();
    const onViewRecipes = vi.fn();

    render(<QuickActions onLogSymptoms={onLogSymptoms} onViewRecipes={onViewRecipes} />);

    const logSymptomsButton = screen.getByText(/log symptoms/i);
    fireEvent.click(logSymptomsButton);
    expect(onLogSymptoms).toHaveBeenCalledTimes(1);

    const viewRecipesButton = screen.getByText(/view recipes/i);
    fireEvent.click(viewRecipesButton);
    expect(onViewRecipes).toHaveBeenCalledTimes(1);
  });
});
