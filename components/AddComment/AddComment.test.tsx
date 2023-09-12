import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import data from "@/data/data.json";
import type { ProductRequest } from "@/types";

import AddComment from "./AddComment";

const productRequests = data.productRequests as ProductRequest[];

describe("AddComment", () => {
  const currentUser = {
    image: "user-image.jpg",
    name: "John Doe",
    username: "johndoe",
  };

  it("renders the component", () => {
    render(
      <AddComment
        feedbackId="feedback-1"
        currentUser={currentUser}
        productRequests={productRequests}
        onAddComment={() => {}}
      />,
    );

    expect(screen.getByText("Add Comment")).toBeInTheDocument();
    expect(screen.getByText(/Characters left/i)).toBeInTheDocument();
    expect(screen.getByText("Post Comment")).toBeInTheDocument();
  });

  it("allows adding a comment", async () => {
    const onAddComment = jest.fn();

    render(
      <AddComment
        feedbackId="feedback-1"
        currentUser={currentUser}
        productRequests={productRequests}
        onAddComment={onAddComment}
      />,
    );

    const commentInput = screen.getByRole("textbox");
    const postButton = screen.getByText("Post Comment");

    await userEvent.type(commentInput, "This is a test comment");

    fireEvent.click(postButton);

    await waitFor(() => {
      // Expect the onAddComment function to be called
      expect(onAddComment).toHaveBeenCalled();
    });
  });

  it("displays character count correctly", async () => {
    render(
      <AddComment
        feedbackId="feedback-1"
        currentUser={currentUser}
        productRequests={productRequests}
        onAddComment={() => {}}
      />,
    );

    const commentInput = screen.getByRole("textbox");

    await userEvent.type(commentInput, "Test characters");

    expect(screen.getByText(/Characters left/i)).toHaveTextContent(
      "235 Characters left",
    );
  });

  it("displays an error message for an empty comment", async () => {
    render(
      <AddComment
        feedbackId="feedback-1"
        currentUser={currentUser}
        productRequests={productRequests}
        onAddComment={() => {}}
      />,
    );

    const postButton = screen.getByText("Post Comment");

    // Click the Post Comment button without typing a comment
    fireEvent.click(postButton);

    await waitFor(() => {
      expect(screen.getByText("Can't be empty")).toBeInTheDocument();
    });
  });
});
