import Image from "next/image";
import { type ReactNode } from "react";

import Tag from "@/components/tag/tag";
import iconArrowUp from "@/public/assets/icon-arrow-up.svg";
import iconComment from "@/public/assets/icon-comments.svg";

interface FeedBackProps {
  title: string;
  description: string;
  tags?: string[];
  upvoteCount: number;
  commentCount: number;
}

export default function Feedback({
  title,
  description,
  tags,
  upvoteCount,
  commentCount,
}: FeedBackProps): ReactNode {
  return (
    <div className="my-2 w-[327px] rounded-lg bg-white p-6">
      <div className="w-[278px] pb-[0.56rem] text-[13px] font-bold text-slate-600">
        {title}
      </div>
      <div className="w-[278px] pb-2 text-[13px] font-normal text-slate-500">
        {description}
      </div>
      {tags?.map((tag, key) => (
        <Tag key={key} tagName={tag} className="pb-4" />
      ))}
      <div className="flex justify-between">
        <div className="flex h-8 w-[69px] items-center justify-between rounded-lg bg-violet-50 pl-4 pr-[0.81rem]">
          <Image priority src={iconArrowUp} alt="upvote" />
          <div className="text-center text-[13px] font-bold text-slate-600">
            {upvoteCount}
          </div>
        </div>
        <div className="flex items-center justify-between gap-1">
          <Image priority src={iconComment} alt="comment" />
          <div className="w-[18px] text-center text-[13px] font-bold text-slate-600">
            {commentCount}
          </div>
        </div>
      </div>
    </div>
  );
}
