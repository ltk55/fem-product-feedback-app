import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import Button from "./Button";

describe("Button Component", () => {
  it("renders correctly with default type and label", () => {
    render(<Button colour="fuchsia" label="Click Me" />);
    const button = screen.getByText("Click Me");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-fuchsia-600");
  });

  it("renders with custom class name", () => {
    render(
      <Button colour="indigo" label="Custom Class" className="custom-class" />,
    );
    const button = screen.getByText("Custom Class");

    expect(button).toHaveClass("custom-class");
  });

  it("calls onClick when button is clicked", () => {
    const onClickMock = jest.fn();
    render(<Button colour="slate" label="Click Me" onClick={onClickMock} />);
    const button = screen.getByText("Click Me");

    fireEvent.click(button);

    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders as submit button when type is 'submit'", () => {
    render(<Button colour="red" label="Submit" type="submit" />);
    const button = screen.getByText("Submit");

    expect(button).toHaveAttribute("type", "submit");
  });
});
