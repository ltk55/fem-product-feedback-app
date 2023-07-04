import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface tagProps {
  tagName: string;
  className?: string;
}

export default function Tag({ tagName, className }: tagProps): ReactNode {
  return (
    <div className={twMerge("inline-block", className)}>
      <div className="flex h-[30px] items-center justify-center rounded-lg bg-violet-50 p-4">
        <div className="text-[13px] font-semibold text-indigo-600">
          {tagName}
        </div>
      </div>
    </div>
  );
}
