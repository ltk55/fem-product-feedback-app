import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";
import React from "react";

import CategoryTag from "./CategoryTag";

describe("CategoryTag Component", () => {
  test("renders CategoryTag component with active tag and hover effect", () => {
    render(
      <CategoryTag
        categoryName="feature"
        selectedCategory="feature"
        hoverEffect={true}
      />,
    );

    const categoryTag = screen.getByTestId("category-tag-wrapper");

    // Check if the category tag has the expected class for an active tag with hover effect
    expect(categoryTag).toHaveClass(
      "bg-indigo-600 text-white hover:bg-indigo-200",
    );
  });

  test("renders CategoryTag component with inactive tag and without hover effect", () => {
    render(
      <CategoryTag
        categoryName="bug"
        selectedCategory="feature"
        hoverEffect={false}
      />,
    );

    const categoryTag = screen.getByTestId("category-tag-wrapper");

    // Check if the category tag has the expected class for an inactive tag without hover effect
    expect(categoryTag).toHaveClass("bg-violet-50 text-indigo-600");
  });
});
