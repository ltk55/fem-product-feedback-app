import { twMerge } from "tailwind-merge";

import { capitalizeString } from "@/lib/utils";
import { type Category } from "@/types";

interface CategoryTagProps {
  className?: string;
  categoryName: Category;
  selectedCategory?: Category;
}

export default function CategoryTag({
  className,
  categoryName,
  selectedCategory,
}: CategoryTagProps): JSX.Element {
  const activeTag =
    selectedCategory?.toLowerCase() === categoryName.toLowerCase();

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
        <div className="text-[13px] font-semibold ">
          {capitalizeString(categoryName)}
        </div>
      </div>
    </div>
  );
}
