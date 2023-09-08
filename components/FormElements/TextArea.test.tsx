import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import TextArea from "./TextArea";

describe("TextArea Component", () => {
  test("renders TextArea component with default props", () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();

    render(
      <TextArea
        value=""
        onChange={onChange}
        onBlur={onBlur}
        className="custom-class"
        placeholder="test"
      />,
    );

    const textarea = screen.getByRole("textbox");

    // Check if the textarea is present
    expect(textarea).toBeInTheDocument();

    // Check if the textarea has the correct class
    expect(textarea).toHaveClass("bg-slate-50");

    // Check if the textarea has the placeholder attribute
    expect(textarea).toHaveAttribute("placeholder", "test");

    // Check if the onChange and onBlur handlers are working
    fireEvent.change(textarea, { target: { value: "New Value" } });
    fireEvent.blur(textarea);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test("renders TextArea component with an error message", () => {
    const onChange = jest.fn();
    const errorMessage = "This is an error message";

    render(
      <TextArea
        value=""
        onChange={onChange}
        className="custom-class"
        errorMessage={errorMessage}
      />,
    );

    const errorText = screen.getByText(errorMessage);

    // Check if the error message is displayed
    expect(errorText).toBeInTheDocument();
  });
});
