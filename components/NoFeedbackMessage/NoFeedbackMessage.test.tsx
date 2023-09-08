import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { RouterMock } from "@/__mocks__/routeMock";

import NoFeedbackMessage from "./NoFeedbackMessage";

const push = jest.fn();

describe("NoFeedbackMessage Component", () => {
  test("renders NoFeedbackMessage component with correct content", () => {
    render(
      <RouterMock router={{ push }}>
        <NoFeedbackMessage />
      </RouterMock>,
    );

    // Check if the image is present
    const image = screen.getByAltText("illustration-empty");
    expect(image).toBeInTheDocument();

    // Check if the heading and description texts are present
    expect(screen.getByText("There is no feedback yet.")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.",
      ),
    ).toBeInTheDocument();

    // Check if the "+ Add Feedback" button is present
    const addButton = screen.getByText("+ Add Feedback");
    expect(addButton).toBeInTheDocument();

    // Simulate a button click
    fireEvent.click(addButton);

    // Check if the router.push function was called with the correct route
    expect(push).toHaveBeenCalledWith("/new-feedback");
  });
});
