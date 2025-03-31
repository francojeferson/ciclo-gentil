import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NotificationSettings from "./NotificationSettings";

describe("NotificationSettings Component", () => {
  it("renders all toggle options", () => {
    const mockSettings = {
      symptoms: true,
      phases: false,
      reminders: true,
    };
    render(<NotificationSettings settings={mockSettings} onUpdateSettings={() => {}} />);

    expect(screen.getByLabelText(/notify about symptoms/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/notify about phases/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/notify about reminders/i)).toBeInTheDocument();
  });

  it("calls the onUpdateSettings function when toggles are changed", () => {
    const mockSettings = {
      symptoms: true,
      phases: false,
      reminders: true,
    };
    const handleUpdateSettings = vi.fn();

    render(<NotificationSettings settings={mockSettings} onUpdateSettings={handleUpdateSettings} />);

    const symptomsToggle = screen.getByLabelText(/notify about symptoms/i);
    fireEvent.click(symptomsToggle);
    expect(handleUpdateSettings).toHaveBeenCalledWith({
      symptoms: false,
      phases: false,
      reminders: true,
    });

    const phasesToggle = screen.getByLabelText(/notify about phases/i);
    fireEvent.click(phasesToggle);
    expect(handleUpdateSettings).toHaveBeenCalledWith({
      symptoms: true,
      phases: true,
      reminders: true,
    });
  });
});
