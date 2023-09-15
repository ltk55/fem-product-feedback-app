import { render, screen } from "@testing-library/react";
import React from "react";

import Header from "./Header";

jest.mock("../Sidebar/Sidebar", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="sidebar">Sidebar Content</div>),
}));

describe("Header Component", () => {
  it("should render correctly", () => {
    render(<Header />);

    // Ensure the title and description are rendered
    expect(screen.getByText("Frontend Mentor")).toBeInTheDocument();
    expect(screen.getByText("Feedback Board")).toBeInTheDocument();

    // Ensure the hamburger icon is rendered
    expect(screen.getByAltText("hamburger icon")).toBeInTheDocument();
  });
});
