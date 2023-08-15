import { type ReactNode, useState } from "react";

export default function UpvoteBtn({
  upvote,
  responsive,
}: {
  upvote: number;
  responsive?: boolean;
}): ReactNode {
  const [upvoteCount, setUpvoteCount] = useState(upvote);
  const [upvoteActive, setUpvoteActive] = useState(false);

  function upvoteButtonHandler(): void {
    if (upvoteActive) {
      setUpvoteCount((prev) => prev - 1);
    } else {
      setUpvoteCount((prev) => prev + 1);
    }
    setUpvoteActive((prev) => !prev);
  }

  return (
    <button
      onClick={upvoteButtonHandler}
      className={`${
        upvoteActive
          ? "bg-indigo-600 text-white"
          : "bg-violet-50 text-slate-600"
      } ${
        responsive === true ? "md:h-[53px] md:w-10 md:flex-col md:gap-1.5" : ""
      } 
        flex h-8 w-[69px] items-center justify-center gap-1 rounded-lg pl-4 pr-[0.81rem] hover:bg-indigo-200 `}
    >
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke={upvoteActive ? "#FFF" : "#4661E6"}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <div className="text-center text-xs font-bold">{upvoteCount}</div>
    </button>
  );
}
