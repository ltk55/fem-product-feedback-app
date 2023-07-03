import Tag from "@/components/tag/tag";
import Image from "next/image";
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
}: FeedBackProps) {
  return (
    <div className="w-[327px] bg-white rounded-lg p-6 my-2">
      <div className="w-[278px] text-slate-600 text-[13px] font-bold pb-[0.56rem]">
        {title}
      </div>
      <div className="w-[278px] text-slate-500 text-[13px] font-normal pb-2">
        {description}
      </div>
      {tags && tags.map((tag) => <Tag tagName={tag} className="pb-4" />)}
      <div className="flex justify-between">
        <div className="w-[69px] h-8 bg-violet-50 rounded-lg flex justify-between items-center pl-4 pr-[0.81rem]">
          <Image priority src={iconArrowUp} alt="upvote" />
          <div className="text-center text-slate-600 text-[13px] font-bold">
            {upvoteCount}
          </div>
        </div>
        <div className="flex justify-between items-center gap-1">
          <Image priority src={iconComment} alt="comment" />
          <div className="w-[18px] text-center text-slate-600 text-[13px] font-bold">
            {commentCount}
          </div>
        </div>
      </div>
    </div>
  );
}
