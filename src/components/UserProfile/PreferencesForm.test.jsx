import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import PreferencesForm from "./PreferencesForm";

describe("PreferencesForm Component", () => {
  const mockPreferences = {
    dietaryPreference: "vegan",
    notifications: "enabled",
  };

  it("renders all preferences fields", () => {
    render(<PreferencesForm preferences={mockPreferences} onUpdatePreferences={() => {}} />);

    expect(screen.getByLabelText(/dietary preference/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/notifications/i)).toBeInTheDocument();
  });

  it("calls the onUpdatePreferences handler when fields are changed", () => {
    const handleUpdatePreferences = vi.fn();
    render(<PreferencesForm preferences={mockPreferences} onUpdatePreferences={handleUpdatePreferences} />);

    // change dietary preference
    const dietarySelect = screen.getByLabelText(/dietary preference/i);
    fireEvent.change(dietarySelect, { target: { value: "gluten-free" } });
    expect(handleUpdatePreferences).toHaveBeenCalledWith({
      dietaryPreference: "gluten-free",
      notifications: "enabled",
    });

    // change notification preference
    const notificationsSelect = screen.getByLabelText(/notifications/i);
    fireEvent.change(notificationsSelect, { target: { value: "disabled" } });
    expect(handleUpdatePreferences).toHaveBeenCalledWith({
      dietaryPreference: "vegan",
      notifications: "disabled",
    });
  });
});
