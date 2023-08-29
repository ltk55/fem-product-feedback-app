"use client";

/* eslint-disable @typescript-eslint/no-misused-promises */
import { type SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

import useStore from "@/lib/store";
import { type Comment } from "@/types";

interface Inputs {
  comment: string;
}

export default function AddComment({
  feedbackId,
}: {
  feedbackId: string;
}): JSX.Element {
  const [currentUser, productRequests, setProductRequests] = useStore(
    (state) => [
      state.currentUser,
      state.productRequests,
      state.setProductRequests,
    ],
  );

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const updatedProductRequests = productRequests.map((request) => {
      if (request.id.toString() === feedbackId) {
        const newComment: Comment = {
          id: uuid(),
          content: data.comment,
          user: {
            image: currentUser.image,
            name: currentUser.name,
            username: currentUser.username,
          },
        };

        return {
          ...request,
          comments: [...(request.comments ?? []), newComment],
        };
      }
      return request;
    });

    setProductRequests(updatedProductRequests);
    reset();
  };

  const maxCommentLength = 250;
  const commentLength = watch("comment")?.length ?? 0;

  return (
    <form
      className="flex flex-col rounded-lg bg-white px-8 pb-8 pt-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h4 className="mb-6 text-lg font-bold text-slate-600">Add Comment</h4>
      <textarea
        placeholder="Type your comment here"
        maxLength={maxCommentLength}
        className={`mb-4 h-20 w-full resize-none rounded bg-slate-50 p-6 text-xs font-normal focus:outline-indigo-600 ${
          errors.comment != null
            ? "focus:outline-red-600"
            : "focus:outline-indigo-600"
        }`}
        {...register("comment", { required: true })}
      />
      {Boolean(errors.comment) && (
        <span className="text-sm font-normal text-red-600">
          Can&apos;t be empty
        </span>
      )}
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-slate-500 md:text-base">
          {maxCommentLength - commentLength} Characters left
        </div>
        <button className="h-11 w-36 rounded-lg bg-fuchsia-600 text-sm font-bold text-violet-50">
          Post Comment
        </button>
      </div>
    </form>
  );
}
