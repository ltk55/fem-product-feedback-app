import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Input from "./Input";

const onChange = jest.fn();

describe("Input Component", () => {
  test("renders Input component with value and handles change", () => {
    const value = "Test Value";

    render(
      <Input value={value} onChange={onChange} className="custom-class" />,
    );

    const inputElement = screen.getByRole("textbox");

    // Check if the input element is present and has the correct value
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveValue(value);

    // Simulate a change event on the input
    fireEvent.change(inputElement, { target: { value: "Updated Value" } });

    // Check if the onChange handler was called
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test("renders Input component with error message", () => {
    const errorMessage = "This is an error message";

    render(
      <Input
        value=""
        errorMessage={errorMessage}
        className="custom-class"
        onChange={onChange}
      />,
    );

    const errorMessageElement = screen.getByText(errorMessage);

    // Check if the error message is present
    expect(errorMessageElement).toBeInTheDocument();
  });
});
