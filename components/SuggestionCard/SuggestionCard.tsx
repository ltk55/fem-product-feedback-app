"use client";

import Image from "next/image";

import CategoryTag from "@/components/CategoryTag/CategoryTag";
import iconComment from "@/public/img/shared/icon-comments.svg";

import UpvoteBtn from "../UpvoteBtn/UpvoteBtn";

interface SuggestionCardProps {
  title: string;
  description: string;
  category: string;
  upvoteCount: number;
  commentCount: number;
}

export default function SuggestionCard({
  title,
  description,
  category,
  upvoteCount,
  commentCount,
}: SuggestionCardProps): React.ReactNode {
  return (
    <div className="my-6 flex w-[calc(100%-48px)] flex-col rounded-lg bg-white p-6 md:w-full md:flex-row md:justify-between">
      <div className="hidden md:block">
        <UpvoteBtn upvote={upvoteCount} />
      </div>

      <div className="w-full md:pl-10">
        <h3 className="pb-[0.56rem] text-[13px] font-bold text-slate-600">
          {title}
        </h3>
        <p className="pb-2 text-[13px] font-normal text-slate-500">
          {description}
        </p>
        <div className="pb-4 ">
          <CategoryTag categoryName={category} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="md:hidden">
          <UpvoteBtn upvote={upvoteCount} />
        </div>

        <button className="flex items-center gap-1">
          <Image priority src={iconComment} alt="comment" />
          <div className="min-w-[18px] text-center text-[13px] font-bold text-slate-600">
            {commentCount}
          </div>
        </button>
      </div>
    </div>
  );
}
