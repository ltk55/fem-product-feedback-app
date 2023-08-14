"use client";

import { useState } from "react";

import DropDownMenu from "../DropDownMenu/DropDownMenu";

interface SortableListWithAddProps {
  suggestionCount: number;
  sortBy: string;
  setSortBy: (sortOption: string) => void;
  handleSort?: (sortOption: string) => void;
}

export default function SortableListWithAdd({
  suggestionCount,
  sortBy,
  setSortBy,
}: SortableListWithAddProps): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="mb-3 flex h-14 w-full min-w-[375px] items-center bg-slate-700 md:h-[72px] md:min-w-[689px] md:rounded-lg md:p-4">
      <h2 className="hidden text-[18px] font-bold text-white md:block">
        {suggestionCount} Suggestions
      </h2>

      <DropDownMenu
        onClick={() => {
          setIsOpen((open) => !open);
        }}
        currentSelection={sortBy}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </div>
  );
}
