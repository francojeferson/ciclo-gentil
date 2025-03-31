import React from "react";
import { vi } from "vitest";
import * as ReactDOM from "react-dom/client";
import Main from "../Main";

// Mock createRoot before importing the Main file
const mockCreateRoot = {
  render: vi.fn(),
};

vi.mock("react-dom/client", () => ({
  createRoot: vi.fn(() => mockCreateRoot),
}));

describe("Main Entry Point", () => {
  it("renders without crashing", () => {
    require("../Main");
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(document.getElementById("root"));
    expect(mockCreateRoot.render).toHaveBeenCalled();
  });
});
