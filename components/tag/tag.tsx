import { twMerge } from "tailwind-merge";

interface tagProps {
  tagName: string;
  className?: string;
}

export default function Tag({ tagName, className }: tagProps) {
  return (
    <div className={twMerge("inline-block", className)}>
      <div className="h-[30px] bg-violet-50 rounded-lg flex items-center justify-center p-4">
        <div className="text-indigo-600 text-[13px] font-semibold">
          {tagName}
        </div>
      </div>
    </div>
  );
}
