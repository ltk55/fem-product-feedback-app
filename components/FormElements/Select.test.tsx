import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Select from "./Select";

const options = [
  { label: "Option 1", value: "option1" },
  { label: "Option 2", value: "option2" },
  { label: "Option 3", value: "option3" },
];

describe("Select Component", () => {
  test("renders Select component with default option", () => {
    const onChange = jest.fn();

    render(
      <Select options={options} onChange={onChange} className="custom-class" />,
    );

    const selectButton = screen.getByRole("button", {
      name: "Option 1 open select menu",
    });
    const option1 = screen.getByText("Option 1");

    // Check if the select button and default option are present
    expect(selectButton).toBeInTheDocument();
    expect(option1).toBeInTheDocument();

    // Check if the select button has the correct class
    expect(selectButton).toHaveClass("bg-slate-50");
  });

  test("changes selected option on click", () => {
    const onChange = jest.fn();

    render(
      <Select options={options} onChange={onChange} className="custom-class" />,
    );

    const selectButton = screen.getByRole("button", {
      name: "Option 1 open select menu",
    });

    // Click the select button to open the dropdown
    fireEvent.click(selectButton);

    const option2 = screen.getByText("Option 2");

    // Click on the second option
    fireEvent.click(option2);

    // Check if the onChange handler was called with the correct value
    expect(onChange).toHaveBeenCalledWith("option2");
  });
});
