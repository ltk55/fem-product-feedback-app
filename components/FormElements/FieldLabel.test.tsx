import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import FieldLabel from "./FieldLabel";

describe("FieldLabel Component", () => {
  test("renders FieldLabel component with title and description", () => {
    const title = "Field Title";
    const description = "Field Description";

    render(
      <FieldLabel
        title={title}
        description={description}
        className="custom-class"
      />,
    );

    const titleLabel = screen.getByText(title);
    const descriptionLabel = screen.getByText(description);
    const filedLabelWrapper = screen.getByTestId("field-label-wrapper");

    // Check if the title and description are present
    expect(titleLabel).toBeInTheDocument();
    expect(descriptionLabel).toBeInTheDocument();

    // Check if the title and description have the expected class
    expect(filedLabelWrapper).toHaveClass("custom-class");
  });
});
