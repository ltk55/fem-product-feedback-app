import "@testing-library/jest-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { RouterMock } from "@/__mocks__/routeMock";

import GoBackBtn from "./GoBackBtn";

const back = jest.fn();

describe("GoBackBtn", () => {
  it("renders correctly with white color", () => {
    render(
      <RouterMock router={{ back }}>
        <GoBackBtn colour="white" />
      </RouterMock>,
    );
    expect(screen.getByText("Go Back")).toBeInTheDocument();
    expect(screen.getByText("Go Back")).toHaveClass("text-white");
  });

  it("renders correctly with blue color", () => {
    render(
      <RouterMock router={{ back }}>
        <GoBackBtn colour="blue" />
      </RouterMock>,
    );
    expect(screen.getByText("Go Back")).toBeInTheDocument();
    expect(screen.getByText("Go Back")).toHaveClass("text-[#647196]");
  });

  it("calls router.back() when clicked", () => {
    render(
      <RouterMock router={{ back }}>
        <GoBackBtn colour="blue" />
      </RouterMock>,
    );
    fireEvent.click(screen.getByText("Go Back"));
    expect(back).toHaveBeenCalled();
  });
});
