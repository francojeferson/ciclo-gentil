import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";
import { expect } from "vitest";

describe("Modal Component", () => {
  it("renders the modal content when open", () => {
    render(
      <Modal isOpen={true} onClose={() => {}}>
        <p>Modal Content</p>
      </Modal>,
    );

    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  it("does not render the modal when closed", () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <p>Modal Content</p>
      </Modal>,
    );

    expect(screen.queryByText(/modal content/i)).not.toBeInTheDocument();
  });

  it("calls the onClose handler when the close button is clicked", () => {
    const handleClose = vi.fn();
    render(
      <Modal isOpen={true} onClose={handleClose}>
        <p>Modal Content</p>
      </Modal>,
    );

    const closeButton = screen.getByRole("button", { name: /close modal/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
