import React from "react";
import { render, screen } from "@testing-library/react";
import Loader from "./Loader";

describe("Loader Component", () => {
  it("renders the loader with the default message", () => {
    render(<Loader />);
    expect(screen.getByText(/loading.../i)).toBeInTheDocument();
  });

  it("renders the loader with a custom message", () => {
    render(<Loader message="Fetching data..." />);
    expect(screen.getByText(/fetching data.../i)).toBeInTheDocument();
  });
});
