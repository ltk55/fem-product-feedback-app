import { type Dispatch, type SetStateAction } from "react";

import { type SortOption } from "@/types";

interface DropDownMenuProps {
  currentSelection: string;
  onClick: () => void;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  sortBy: string;
  setSortBy: (sortOption: string) => void;
}

const sortOptions: SortOption[] = [
  { value: "mostUpvotes", label: "Most Upvotes" },
  { value: "leastUpvotes", label: "Least Upvotes" },
  { value: "mostComments", label: "Most Comments" },
  { value: "leastComments", label: "Least Comments" },
];

export default function DropDownMenu({
  currentSelection,
  onClick,
  isOpen,
  setIsOpen,
  sortBy,
  setSortBy,
}: DropDownMenuProps): React.ReactNode {
  function getLabelByValue(value: string): string | null {
    const option = sortOptions.find((option) => option.value === value);
    return option != null ? option.label : null;
  }
  return (
    <div className="flex flex-col">
      <div
        className="flex max-h-72 w-full cursor-pointer items-baseline rounded-lg px-6 py-[18px] text-lg leading-8"
        onClick={onClick}
      >
        <span className="mr-2 text-[13px] font-normal text-violet-50">
          Sort by :
        </span>
        <span className="mr-2 text-[13px] font-bold text-violet-50">
          {getLabelByValue(currentSelection)}
        </span>
        <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 1l4 4 4-4"
            stroke="#fff"
            stroke-width="2"
            fill="none"
            fill-rule="evenodd"
          />
        </svg>
      </div>

      <div className={isOpen ? "" : "hidden"}>
        <ul className="absolute ml-6 mt-0 rounded-lg bg-white shadow-lg">
          {sortOptions.map((option) => (
            <li
              key={option.value}
              className="cursor-pointer border-b-[1px] text-base font-normal text-slate-500"
              onClick={() => {
                setSortBy(option.value);
                setIsOpen(false);
              }}
            >
              <div className="flex items-center gap-20 px-6 py-3">
                <span>{option.label}</span>
                <span className={sortBy === option.value ? "" : "hidden"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="11"
                  >
                    <path
                      fill="none"
                      stroke="#AD1FEA"
                      strokeWidth="2"
                      d="M1 5.233L4.522 9 12 1"
                    />
                  </svg>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
