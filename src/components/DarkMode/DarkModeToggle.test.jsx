import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DarkModeToggle from "./DarkModeToggle";
import { expect } from "vitest";

describe("DarkModeToggle Component", () => {
  it("toggles dark mode", async () => {
    render(<DarkModeToggle />);

    const button = screen.getByRole("button", { name: /toggle dark mode/i });

    // simulate click to enable dark mode
    userEvent.click(button);
    await waitFor(() => {
      expect(document.body.classList.contains("dark")).toBe(true);
    });

    // simulate another click to disable dark mode
    userEvent.click(button);
    await waitFor(() => {
      expect(document.body.classList.contains("dark")).toBe(false);
    });
  });
});
