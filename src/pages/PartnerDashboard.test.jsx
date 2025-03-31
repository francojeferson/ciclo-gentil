import React from "react";
import { render, screen } from "@testing-library/react";
import PartnerDashboard from "./PartnerDashboard";

describe("PartnerDashboard Page", () => {
  it("renders the partner dashboard header and all components", () => {
    render(<PartnerDashboard />);

    // verifica o header
    expect(screen.getByRole("heading", { name: /partner dashboard/i })).toBeInTheDocument();

    // verifica se os botoes de QuickActions estao renderizados
    expect(screen.getByRole("button", { name: /log symptoms/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /view recipes/i })).toBeInTheDocument();

    // verifica o titulo da seçao Support Tips
    expect(screen.getByText(/phase:/i)).toBeInTheDocument();

    // verifica o titulo da seçao Shopping List usando data-testid
    expect(screen.getByTestId("shopping-list-title")).toBeInTheDocument();
  });
});
