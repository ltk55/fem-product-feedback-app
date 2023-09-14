import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import SortingMenu from "./SortingMenu";

const mockOnChange = jest.fn();

describe("SortingMenu Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component with default options", () => {
    render(<SortingMenu onChange={mockOnChange} />);

    // Assert that the default option is displayed
    expect(screen.getByText("Most Upvotes")).toBeInTheDocument();
  });

  it("calls the onChange prop when an option is selected", () => {
    render(<SortingMenu onChange={mockOnChange} />);

    // Open the dropdown
    fireEvent.click(screen.getByText("Most Upvotes"));

    // Click an option
    fireEvent.click(screen.getByText("Least Comments"));

    // Assert that onChange was called with the correct value
    expect(mockOnChange).toHaveBeenCalledWith("leastComments");
  });

  it("displays the check icon for the selected option", () => {
    render(<SortingMenu onChange={mockOnChange} />);

    // Open the dropdown
    fireEvent.click(screen.getByText("Most Upvotes"));

    // Assert that the check icon is displayed for the selected option
    expect(screen.getByAltText("check-icon")).toBeInTheDocument();
  });

  it("rotates the arrow icon when the menu is open", () => {
    render(<SortingMenu onChange={mockOnChange} />);

    // Initially, the arrow should not be rotated
    const arrowIcon = screen.getByAltText("open select menu");
    expect(arrowIcon).not.toHaveClass("rotate-180");

    // Open the dropdown
    fireEvent.click(screen.getByText("Most Upvotes"));

    // After opening, the arrow should be rotated
    expect(arrowIcon).toHaveClass("rotate-180");
  });
});
