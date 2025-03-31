import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SymptomForm from "./SymptomForm";

describe("SymptomForm Component", () => {
  it("renders the form with all fields", () => {
    render(<SymptomForm onSubmit={() => {}} />);
    expect(screen.getByLabelText(/pain level/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mood/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/bloating/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("calls the onSubmit handler with form data when submitted", () => {
    const handleSubmit = vi.fn();
    render(<SymptomForm onSubmit={handleSubmit} />);

    // fill out the form
    fireEvent.change(screen.getByLabelText(/pain level/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/mood/i), { target: { value: "happy" } });
    fireEvent.change(screen.getByLabelText(/bloating/i), { target: { value: "yes" } });

    fireEvent.click(screen.getByRole("button", { name: /submit/i }));
    expect(handleSubmit).toHaveBeenCalledWith({
      painLevel: "2",
      mood: "happy",
      bloating: "yes",
    });
  });
});
