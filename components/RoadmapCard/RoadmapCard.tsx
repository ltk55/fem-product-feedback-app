"use client";

import Image from "next/image";

import CategoryTag from "@/components/CategoryTag/CategoryTag";
import { getStatusBgColor } from "@/lib/utils";
import iconComment from "@/public/img/shared/icon-comments.svg";
import { type Status } from "@/types";

import UpvoteBtn from "../UpvoteBtn/UpvoteBtn";

interface RoadmapCardProps {
  title: string;
  description: string;
  category: string;
  upvoteCount: number;
  commentCount: number;
  status: Status;
}

export default function RoadmapCard({
  title,
  description,
  category,
  upvoteCount,
  commentCount,
  status,
}: RoadmapCardProps): JSX.Element {
  return (
    <div className="mx-4 mb-4 h-[233px] rounded-[10px] bg-white">
      <div className={`h-1.5 rounded-t-[5px] ${getStatusBgColor(status)}`}>
        <div className="w-full px-6">
          <div className="flex items-center justify-between pb-4 pt-[22px]">
            <div
              className={`mr-4 h-2 w-2 rounded-full ${getStatusBgColor(
                status,
              )}`}
            />
            <div className="flex-1 text-base font-normal text-slate-500">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
          </div>
          <h3 className="mb-[9px] text-[13px] font-bold text-slate-600">
            {title}
          </h3>
          <p className="mb-2 w-[278px] text-[13px] font-normal text-slate-500">
            {description}
          </p>
          <div className="pb-4">
            <CategoryTag categoryName={category} />
          </div>
        </div>
        <div className="flex justify-between px-6">
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
    </div>
  );
}
