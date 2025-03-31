import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NotificationBanner from "./NotificationBanner";
import styles from "./NotificationBanner.module.css";
import { expect, describe, it, vi } from "vitest";

describe("NotificationBanner Component", () => {
  it("renders the notification message with the correct type", () => {
    render(<NotificationBanner message="Test notification" type="success" />);

    expect(screen.getByText(/test notification/i)).toBeInTheDocument();
    expect(screen.getByText(/test notification/i).parentNode).toHaveClass(`${styles.banner}`);
    expect(screen.getByText(/test notification/i).parentNode).toHaveClass(`${styles.success}`);
  });

  it("calls onClose when the close button is clicked", () => {
    const handleClose = vi.fn();
    render(<NotificationBanner message="Test notification" type="error" onClose={handleClose} />);

    const closeButton = screen.getByRole("button", { name: /close notification/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not render the close button if onClose is not provided", () => {
    render(<NotificationBanner message="Info only" type="info" />);
    expect(screen.queryByRole("button", { name: /close notification/i })).not.toBeInTheDocument();
  });

  it("handles unknown notification type gracefully", () => {
    render(<NotificationBanner message="Unknown type" type="unknown" />);
    expect(screen.getByText(/unknown type/i)).toBeInTheDocument();
  });
});
