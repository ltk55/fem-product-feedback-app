import Image from "next/image";
import { twMerge } from "tailwind-merge";

import { type User } from "@/types";

interface CommentBlockProps {
  className?: string;
  content: string;
  replyingTo?: string;
  user: User;
}

export default function CommentBlock({
  className,
  content,
  replyingTo,
  user,
}: CommentBlockProps): JSX.Element {
  const imagePath = user.image.replace("./assets", "/img");

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
            {user.name}
          </div>
          <small className="text-xs font-normal text-slate-500 md:text-sm">
            @{user.username}
          </small>
          <p className="mt-4 hidden self-start break-all text-xs font-normal text-slate-500 md:block md:text-base">
            {replyingTo != null && (
              <span className="text-xs font-bold text-fuchsia-600 md:text-base">
                @{replyingTo}{" "}
              </span>
            )}
            {content}
          </p>
        </div>

        <button className="text-xs font-semibold text-indigo-600">Reply</button>
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
