import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface CategoryTagProps {
  categoryName: string;
  className?: string;
}

export default function CategoryTag({
  categoryName,
  className,
}: CategoryTagProps): ReactNode {
  return (
    <div className={twMerge("inline-block", className)}>
      <div className="flex h-[30px] items-center justify-center rounded-lg bg-violet-50 p-4">
        <div className="text-[13px] font-semibold text-indigo-600">
          {categoryName}
        </div>
      </div>
    </div>
  );
}
