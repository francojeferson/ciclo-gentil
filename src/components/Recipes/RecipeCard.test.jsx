import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import RecipeCard from "./RecipeCard";

describe("RecipeCard Component", () => {
  const mockRecipe = {
    title: "Smoothie de Morango",
    description: "Uma receita refrescante para a fase folicular.",
    image: "https://criscardoso.com/wp-content/uploads/2023/05/smoothie-de-morango-com-amendoa-150x150.png",
  };

  it("renders the recipe title, description, and image", () => {
    render(<RecipeCard recipe={mockRecipe} onViewDetails={() => {}} />);

    expect(screen.getByText(/smoothie de morango/i)).toBeInTheDocument();
    expect(screen.getByText(/uma receita refrescante para a fase folicular/i)).toBeInTheDocument();
    expect(screen.getByAltText(/smoothie de morango/i)).toBeInTheDocument();
  });

  it("calls the onViewDetails handler when the 'View Details' button is clicked", () => {
    const handleViewDetails = vi.fn();
    render(<RecipeCard recipe={mockRecipe} onViewDetails={handleViewDetails} />);

    const viewDetailsButton = screen.getByRole("button", { name: /view details/i });
    fireEvent.click(viewDetailsButton);
    expect(handleViewDetails).toHaveBeenCalledTimes(1);
  });
});
