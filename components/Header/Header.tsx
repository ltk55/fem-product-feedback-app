"use client";

import { useWindowSize } from "react-use";

import { type SortOption } from "@/types";

interface HeaderProps {
  suggestionCount: number;
  sortBy: string;
  setSortBy: (sortOption: string) => void;
  handleSort?: (sortOption: string) => void;
}

const sortOptions: SortOption[] = [
  { value: "mostUpvotes", label: "Most Upvotes" },
  { value: "leastUpvotes", label: "Least Upvotes" },
  { value: "mostComments", label: "Most Comments" },
  { value: "leastComments", label: "Least Comments" },
];

export default function Header({
  suggestionCount,
  sortBy,
  setSortBy,
  handleSort,
}: HeaderProps): React.ReactNode {
  const { width } = useWindowSize();

  const handleOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSortBy(e.target.value);
    // handleSort(e.target.value);
  };

  return (
    <div className="flex h-[72px] items-center bg-slate-700 md:rounded-lg">
      {width >= 768 && (
        <h2 className="text-[18px] font-bold text-white">6 Suggestions</h2>
      )}

      <label htmlFor="sort">Sort By:</label>
      <select value={sortBy} onChange={handleOptionChange} className="">
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
