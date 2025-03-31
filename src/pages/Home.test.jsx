import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter } from "react-router-dom";

describe("Home Page", () => {
  const renderWithRouter = (ui) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it("renders the Home header and key components", () => {
    renderWithRouter(<Home />);

    // verifica se o header está presente
    expect(screen.getByRole("heading", { name: /home/i })).toBeInTheDocument();

    // verifica se o PhaseIndicator está renderizado
    expect(screen.getByText(/current phase/i)).toBeInTheDocument();

    // verifica se os botoes de açoes rapidas (QuickActions) estao renderizados
    expect(screen.getByRole("button", { name: /log symptoms/i }));
    expect(screen.getByRole("button", { name: /view recipes/i }));
  });

  it("renders links to other sections such as UserProfile and PartnerDashboard", () => {
    renderWithRouter(<Home />);

    // verifica se os links para UserProfile e PartnerDashboard estao presentes
    expect(screen.getByRole("link", { name: /user profile/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /partner dashboard/i })).toBeInTheDocument();
  });
});
