import { type ReactNode } from "react";
import { twMerge } from "tailwind-merge";

import useStore from "@/lib/store";

interface CategoryTagProps {
  categoryName: string;
  className?: string;
}

export default function CategoryTag({
  categoryName,
  className,
}: CategoryTagProps): ReactNode {
  const selectedCategory = useStore((state) => state.selectedCategory);

  const activeTag =
    selectedCategory.toLowerCase() === categoryName.toLowerCase();

  return (
    <div className={twMerge("inline-block", className)}>
      <div
        className={twMerge(
          activeTag
            ? "bg-indigo-600 text-white"
            : "bg-violet-50 text-indigo-600",
          "flex h-[30px] items-center justify-center rounded-lg p-4 hover:bg-indigo-200",
        )}
      >
        <div className="text-[13px] font-semibold ">{categoryName}</div>
      </div>
    </div>
  );
}
