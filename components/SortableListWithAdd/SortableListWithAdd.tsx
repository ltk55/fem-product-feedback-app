"use client";

import { useState } from "react";
import { useWindowSize } from "react-use";

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

  const { width } = useWindowSize();

  return (
    <div className="flex h-14 w-full items-center bg-slate-700 md:h-[72px] md:rounded-lg md:p-4">
      {width >= 768 && (
        <h2 className="text-[18px] font-bold text-white">
          {suggestionCount} Suggestions
        </h2>
      )}

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
