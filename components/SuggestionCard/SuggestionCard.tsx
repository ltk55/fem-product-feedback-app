"use client";

import Image from "next/image";
import { type ReactNode } from "react";
import { useWindowSize } from "react-use";

import Tag from "@/components/Tag/Tag";
import iconComment from "@/public/assets/icon-comments.svg";

import UpvoteBtn from "../UpvoteBtn/UpvoteBtn";

interface SuggestionCardProps {
  title: string;
  description: string;
  tags?: string[];
  upvoteCount: number;
  commentCount: number;
}

export default function SuggestionCard({
  title,
  description,
  tags,
  upvoteCount,
  commentCount,
}: SuggestionCardProps): ReactNode {
  const { width } = useWindowSize();

  return (
    <div className="my-6 flex w-[calc(100%-40px)] flex-col rounded-lg bg-white p-6 md:flex-row md:justify-between">
      {width >= 768 && <UpvoteBtn upvoteCount={upvoteCount} />}

      <div className="w-full md:pl-10">
        <h3 className="pb-[0.56rem] text-[13px] font-bold text-slate-600">
          {title}
        </h3>
        <p className="pb-2 text-[13px] font-normal text-slate-500">
          {description}
        </p>
        <div className="pb-4 ">
          {tags?.map((tag, key) => (
            <Tag key={key} tagName={tag} />
          ))}
        </div>
      </div>
      <div className="flex justify-between">
        {width < 768 && <UpvoteBtn upvoteCount={upvoteCount} />}

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
