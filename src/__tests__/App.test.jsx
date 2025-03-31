import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App Component", () => {
  it("renders without crashing and displays the main heading", () => {
    render(<App />);
    expect(screen.getByText(/App with Notification Banner/i)).toBeInTheDocument();
  });
});
