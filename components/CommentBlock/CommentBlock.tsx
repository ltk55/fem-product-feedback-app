import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { type Comment } from "@/types";

export default function CommentBlock({
  comment,
  className,
}: {
  comment: Comment;
  className?: string;
}): JSX.Element {
  const imagePath = comment.user.image.replace("./assets", "/img");

  return (
    <div className={twMerge(className, "py-6")}>
      <div className="flex items-center justify-between md:items-start">
        <Image
          className="h-10 w-10 rounded-full"
          src={imagePath}
          width={40}
          height={40}
          alt="user image"
        />

        <div className="ml-4 flex flex-1 flex-col">
          <div className="text-xs font-bold text-slate-600 md:text-sm">
            {comment.user.name}
          </div>
          <small className="text-xs font-normal text-slate-500 md:text-sm">
            @{comment.user.username}
          </small>
          <p className="mt-4 hidden self-start text-xs font-normal text-slate-500 md:block md:text-base">
            {comment.content}
          </p>
        </div>

        <button className="text-xs font-semibold text-indigo-600">Reply</button>
      </div>
      <p className="mt-4 self-start text-xs font-normal text-slate-500 md:hidden md:text-base">
        {comment.content}
      </p>
    </div>
  );
}
