import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SymptomLogger from "./SymptomLogger";
import { expect, describe, it, vi } from "vitest";

describe("SymptomLogger Component", () => {
  it("renders a symptom logging form with fields", () => {
    render(<SymptomLogger onSave={() => {}} />);

    expect(screen.getByLabelText(/symptom/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/intensity/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /log symptom/i })).toBeInTheDocument();
  });

  it("calls onSave handler with correct data when submitted", () => {
    const handleSave = vi.fn();
    render(<SymptomLogger onSave={handleSave} />);

    const symptomInput = screen.getByLabelText(/symptom/i);
    const intensityInput = screen.getByLabelText(/intensity/i);
    const submitButton = screen.getByRole("button", { name: /log symptom/i });

    fireEvent.change(symptomInput, { target: { value: "Cramps" } });
    fireEvent.change(intensityInput, { target: { value: "High" } });
    fireEvent.click(submitButton);

    expect(handleSave).toHaveBeenCalledWith({
      symptom: "Cramps",
      intensity: "High",
    });
  });

  it("clears fields after submission", () => {
    const handleSave = vi.fn();
    render(<SymptomLogger onSave={handleSave} />);

    const symptomInput = screen.getByLabelText(/symptom/i);
    const intensityInput = screen.getByLabelText(/intensity/i);
    const submitButton = screen.getByRole("button", { name: /log symptom/i });

    fireEvent.change(symptomInput, { target: { value: "Fatigue" } });
    fireEvent.change(intensityInput, { target: { value: "Low" } });
    fireEvent.click(submitButton);

    expect(symptomInput.value).toBe("");
    expect(intensityInput.value).toBe("");
  });
});
