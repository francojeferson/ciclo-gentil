import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import UserProfile from "./UserProfile";
import { expect } from "vitest";

describe("UserProfile Page", () => {
  const mockPreferences = {
    dietaryPreference: "vegan",
    notifications: "enabled",
  };

  const mockDataSharing = {
    shareWithPartner: true,
    shareWithFamily: false,
  };

  it("renders the UserProfile header and all sections", () => {
    render(<UserProfile preferences={mockPreferences} dataSharing={mockDataSharing} />);

    // verifica se o header está presente
    expect(screen.getByRole("heading", { name: /user profile/i })).toBeInTheDocument();

    // verifica as seçoes de PreferencesForm e DataSharingSettings
    expect(screen.getByLabelText(/dietary preference/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/notifications/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/share data with partner/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/share data with family/i)).toBeInTheDocument();
  });

  it("calls the correct handlers when settings are updated", () => {
    const handleUpdatePreferences = vi.fn();
    const handleUpdateDataSharing = vi.fn();

    render(
      <UserProfile
        preferences={mockPreferences}
        dataSharing={mockDataSharing}
        onUpdatePreferences={handleUpdatePreferences}
        onUpdateDataSharing={handleUpdateDataSharing}
      />,
    );

    // altera a preferencia alimentar
    const dietarySelect = screen.getByLabelText(/dietary preference/i);
    fireEvent.change(dietarySelect, { target: { value: "gluten-free" } });
    expect(handleUpdatePreferences).toHaveBeenCalledWith({
      dietaryPreference: "gluten-free",
      notifications: "enabled",
    });

    // altera o compartilhamento de dados
    const partnerToggle = screen.getByLabelText(/share data with partner/i);
    fireEvent.click(partnerToggle);
    expect(handleUpdateDataSharing).toHaveBeenCalledWith({
      shareWithPartner: false,
      shareWithFamily: false,
    });
  });
});
