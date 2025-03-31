import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Onboarding from "./Onboarding";

describe("Onboarding Page", () => {
  it("initially renders the ProfileSelection component", async () => {
    render(<Onboarding />);

    // usa findByRole para aguardar até que o componente lazy seja renderizado
    const womanButton = await screen.findByRole("button", { name: /woman/i });
    expect(womanButton).toBeInTheDocument();
  });

  it("renders the CycleSetup component after selecting the 'woman' profile", async () => {
    render(<Onboarding />);

    // aguarda a renderizaçao do botao 'woman' e clica nele
    const womanButton = await screen.findByRole("button", { name: /woman/i });
    fireEvent.click(womanButton);

    // aguarda até que os campos do CycleSetup apareçam
    const dateInput = await screen.findByLabelText(/date of last period/i);
    const cycleLengthInput = await screen.getByLabelText(/cycle length/i);

    expect(dateInput).toBeInTheDocument();
    expect(cycleLengthInput).toBeInTheDocument();
  });
});
