import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { v4 as uuid } from "uuid";

import Button from "@/components/Buttons/Button";
import TextArea from "@/components/FormElements/TextArea";
import { type Comment, type ProductRequest, type User } from "@/types";

interface Input {
  comment: string;
}

export default function AddComment({
  feedbackId,
  currentUser,
  productRequests,
  onAddComment,
}: {
  feedbackId: string;
  currentUser: User;
  productRequests: ProductRequest[];
  onAddComment: (updatedProductRequests: ProductRequest[]) => void;
}): JSX.Element {
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Input>();
  const onSubmit: SubmitHandler<Input> = async (data) => {
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

    onAddComment(updatedProductRequests);

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
      <Controller
        name="comment"
        control={control}
        rules={{
          required: "Can't be empty",
        }}
        render={({ field: { onChange, value, onBlur } }) => (
          <TextArea
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            errorMessage={errors.comment?.message}
            maxLength={250}
          />
        )}
      />
      <div className="mt-4 flex items-center justify-between">
        <div className="text-xs font-normal text-slate-500 md:text-base">
          {maxCommentLength - commentLength} Characters left
        </div>

        <Button label="Post Comment" colour="fuchsia" />
      </div>
    </form>
  );
}
