import Image from "next/image";
import { type ReactNode } from "react";

import iconArrowUp from "@/public/assets/icon-arrow-up.svg";

export default function UpvoteBtn({
  upvoteCount,
}: {
  upvoteCount: number;
}): ReactNode {
  return (
    <button className="col-start-1 col-end-1 flex h-8 w-[69px] items-center justify-center gap-[0.62rem] rounded-lg bg-violet-50 pl-4 pr-[0.81rem] md:row-start-1 md:row-end-2 md:h-[53px] md:w-10 md:flex-col md:gap-1">
      <Image src={iconArrowUp} alt="upvote" />
      <div className="text-center text-[13px] font-bold text-slate-600">
        {upvoteCount}
      </div>
    </button>
  );
}
