import React from "react";
import { render, screen } from "@testing-library/react";
import ShoppingList from "./ShoppingList";
import { expect } from "vitest";

describe("ShoppingList Component", () => {
  it("renders the shopping list with items", () => {
    const mockItems = ["Spinach", "Almonds", "Avocado"];
    render(<ShoppingList items={mockItems} />);

    expect(screen.getByText(/spinach/i)).toBeInTheDocument();
    expect(screen.getByText(/almonds/i)).toBeInTheDocument();
    expect(screen.getByText(/avocado/i)).toBeInTheDocument();
  });

  it("renders a fallback message if the list is empty", () => {
    render(<ShoppingList items={[]} />);
    expect(screen.getByText(/no items in your shopping list/i)).toBeInTheDocument();
  });
});
