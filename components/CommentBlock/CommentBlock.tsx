import Image from "next/image";
import { useState } from "react";
import { Controller, type SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

import { type Reply, type User } from "@/types";

import Button from "../Button/Button";
import TextArea from "../FormElements/TextArea";

interface CommentBlockProps {
  className?: string;
  content: string;
  replyingTo?: string;
  commenter: User;
  currentUser: User;
  feedbackId: number;
  commentId: string;
  onAddReply: (feedbackId: number, commentId: string, newReply: Reply) => void;
}

interface Input {
  reply: string;
}

export default function CommentBlock({
  className,
  content,
  replyingTo,
  commenter,
  currentUser,
  feedbackId,
  commentId,
  onAddReply,
}: CommentBlockProps): JSX.Element {
  const [displayReplyInput, setDisplayReplyInput] = useState<boolean>(false);

  const imagePath = commenter.image.replace("./assets", "/img");

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<Input>({
    defaultValues: {
      reply: "",
    },
  });

  const onSubmit: SubmitHandler<Input> = async (data) => {
    const newReply: Reply = {
      content: data.reply,
      replyingTo: commenter.username,
      user: {
        image: currentUser.image,
        name: currentUser.name,
        username: currentUser.username,
      },
    };

    onAddReply(feedbackId, commentId, newReply);

    setDisplayReplyInput(false);

    reset();
  };

  return (
    <div className={twMerge(className, "py-6")}>
      <div className="flex items-center justify-between md:items-start">
        <div>
          <Image
            className="h-10 w-10 rounded-full"
            src={imagePath}
            width={40}
            height={40}
            alt="user image"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div className="text-xs font-bold text-slate-600 md:text-sm">
            {commenter.name}
          </div>
          <small className="text-xs font-normal text-slate-500 md:text-sm">
            @{commenter.username}
          </small>
          <p className="mt-4 hidden self-start break-all text-xs font-normal text-slate-500 md:block md:text-base">
            {replyingTo != null && (
              <span className="text-xs font-bold text-fuchsia-600 md:text-base">
                @{replyingTo}{" "}
              </span>
            )}
            {content}
          </p>
          {displayReplyInput && (
            <form className="mt-6 flex gap-4" onSubmit={handleSubmit(onSubmit)}>
              <Controller
                name="reply"
                control={control}
                rules={{
                  required: "Can't be empty",
                }}
                render={({ field: { onChange, value, onBlur } }) => (
                  <TextArea
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    errorMessage={errors.reply?.message}
                    maxLength={200}
                    className="w-full"
                  />
                )}
              />
              <Button
                colour="fuchsia"
                label="Post Reply"
                className="whitespace-nowrap"
              />
            </form>
          )}
        </div>

        <button
          className="text-xs font-semibold text-indigo-600"
          onClick={() => {
            setDisplayReplyInput(true);
          }}
        >
          Reply
        </button>
      </div>
      <p className="mt-4 self-start break-all text-xs font-normal text-slate-500 md:hidden md:text-base">
        {replyingTo != null && (
          <span className="text-xs font-bold text-fuchsia-600 md:text-base">
            @{replyingTo}{" "}
          </span>
        )}
        {content}
      </p>
    </div>
  );
}
