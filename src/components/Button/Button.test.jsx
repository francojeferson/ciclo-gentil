import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button Component", () => {
  it("renders correctly with provided text", () => {
    render(<Button>Click me</Button>);

    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = vi.fn(); // Mock function do Vitest
    render(<Button onClick={handleClick}>Click me</Button>);

    const button = screen.getByText("Click me");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the correct style for primary buttons", () => {
    render(<Button styleType="primary">Primary</Button>);

    const button = screen.getByText("Primary");
    expect(button.className).toContain("btnPrimary");
  });

  it("disables the button when disabled prop is true", () => {
    render(<Button disabled={true}>Disabled</Button>);

    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });
});
