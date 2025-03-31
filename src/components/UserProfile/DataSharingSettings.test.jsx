import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import DataSharingSettings from "./DataSharingSettings";
import { expect } from "vitest";

describe("DataSharingSettings Component", () => {
  const mockSettings = {
    shareWithPartner: true,
    shareWithFamily: false,
  };

  it("renders all sharing options", () => {
    render(<DataSharingSettings settings={mockSettings} onUpdateSettings={() => {}} />);

    expect(screen.getByLabelText(/share data with partner/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/share data with family/i)).toBeInTheDocument();
  });

  it("calls the onUpdateSettings handler when sharing options are changed", () => {
    const handleUpdateSettings = vi.fn();
    render(<DataSharingSettings settings={mockSettings} onUpdateSettings={handleUpdateSettings} />);

    const partnerToggle = screen.getByLabelText(/share data with partner/i);
    fireEvent.click(partnerToggle);
    expect(handleUpdateSettings).toHaveBeenCalledWith({
      shareWithPartner: false,
      shareWithFamily: false,
    });

    const familyToggle = screen.getByLabelText(/share data with family/i);
    fireEvent.click(familyToggle);
    expect(handleUpdateSettings).toHaveBeenCalledWith({
      shareWithPartner: true,
      shareWithFamily: true,
    });
  });
});
