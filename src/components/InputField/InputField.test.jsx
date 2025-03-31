import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";
import { expect } from "vitest";

describe("InputField Component", () => {
  it("renders the label and input field", () => {
    render(<InputField label="Name" name="name" value="" onChange={() => {}} placeholder="Enter name" />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter name")).toBeInTheDocument();
  });

  it("calls onChange handler when input changes", () => {
    const handleChange = vi.fn();
    render(<InputField label="Email" name="email" value="" onChange={handleChange} placeholder="Enter email" />);

    const input = screen.getByPlaceholderText("Enter email");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    expect(handleChange).toHaveBeenCalled();
  });
});
