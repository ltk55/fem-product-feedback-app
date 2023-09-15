import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Sidebar from "./Sidebar";

describe("Sidebar Component", () => {
  const setIsOpenMock = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  it("should render correctly when isOpen is true", () => {
    render(
      <Sidebar isOpen={true} setIsOpen={setIsOpenMock}>
        <p>Test Sidebar Content</p>
      </Sidebar>,
    );

    // Ensure the sidebar is rendered
    expect(screen.getByAltText("close icon")).toBeInTheDocument();
  });

  it("should not render when isOpen is false", () => {
    render(
      <Sidebar isOpen={false} setIsOpen={setIsOpenMock}>
        <p>Test Sidebar Content</p>
      </Sidebar>,
    );

    // Ensure the sidebar is not rendered
    expect(screen.queryByText("Test Sidebar Content")).not.toBeInTheDocument();
  });

  it("should call setIsOpen when the close icon is clicked", () => {
    render(
      <Sidebar isOpen={true} setIsOpen={setIsOpenMock}>
        <p>Test Sidebar Content</p>
      </Sidebar>,
    );

    // Click the close icon
    fireEvent.click(screen.getByAltText("close icon"));

    // Ensure setIsOpenMock is called
    expect(setIsOpenMock).toHaveBeenCalledWith(false);
  });
});
