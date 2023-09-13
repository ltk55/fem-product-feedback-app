"use client";

import Image from "next/image";

import CategoryTag from "@/components/CategoryTag/CategoryTag";
import { capitalizeString, getStatusBgColor } from "@/lib/utils";
import iconComment from "@/public/img/shared/icon-comments.svg";
import { type Category, type TrackedStatus } from "@/types";

import UpvoteBtn from "../Buttons/UpvoteBtn";

interface RoadmapCardProps {
  feedbackId: number;
  title: string;
  description: string;
  category: Category;
  upvoteCount: number;
  commentCount: number;
  status: TrackedStatus;
}

export default function RoadmapCard({
  feedbackId,
  title,
  description,
  category,
  upvoteCount,
  commentCount,
  status,
}: RoadmapCardProps): JSX.Element {
  return (
    <div className="mx-4 mb-4 h-60 w-80 rounded-[10px] bg-white md:mx-0 md:h-64 md:w-56 xl:min-h-[272px] xl:w-[350px]">
      <div className={`h-1.5 rounded-t-[5px] ${getStatusBgColor(status)}`} />
      <div className="w-full px-6">
        <div className=" pb-4 pt-[22px]">
          <div
            className={`mr-2 inline-block h-2 w-2 rounded-full ${getStatusBgColor(
              status,
            )}`}
          />
          <div className=" inline-block text-xs font-normal text-slate-500 xl:text-base">
            {capitalizeString(status)}
          </div>
        </div>
        <h3 className="mb-[9px] text-xs font-bold text-slate-600 xl:text-lg">
          {title}
        </h3>
        <p className="mb-2 text-xs font-normal text-slate-500 xl:text-base">
          {description}
        </p>
        <div className="pb-4">
          <CategoryTag categoryName={category} />
        </div>
      </div>
      <div className="flex justify-between px-6">
        <div className="">
          <UpvoteBtn upvote={upvoteCount} feedbackId={feedbackId} />
        </div>

        <button className="flex items-center gap-1">
          <Image priority src={iconComment} alt="comment" />
          <div className="min-w-[18px] text-center text-xs font-bold text-slate-600">
            {commentCount}
          </div>
        </button>
      </div>
    </div>
  );
}
