import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NotificationCard from "./NotificationCard";
import { expect } from "vitest";

describe("NotificationCard Component", () => {
  it("renders the notification title and message", () => {
    render(<NotificationCard title="Reminder" message="Drink more water today!" />);
    expect(screen.getByText(/reminder/i)).toBeInTheDocument();
    expect(screen.getByText(/drink more water today/i)).toBeInTheDocument();
  });

  it("calls the onClose handler when the close button is clicked", () => {
    const handleClose = vi.fn();
    render(<NotificationCard title="Reminder" message="Drink more water today!" onClose={handleClose} />);

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
