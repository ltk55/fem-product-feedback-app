import Image from "next/image";
import { useRouter } from "next/navigation";

import iconSuggestions from "@/public/img/suggestions/icon-suggestions.svg";

import Button from "../Buttons/Button";
import SortingMenu from "../SortingMenu/SortingMenu";

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
}: SortableListWithAddProps): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex h-14 w-full min-w-[375px] items-center bg-slate-700 md:h-[72px] md:min-w-[689px] md:rounded-lg md:p-4">
      <Image
        src={iconSuggestions}
        width={23}
        height={24}
        alt="suggestion icon"
        className="ml-2 hidden md:block"
      />
      <h2 className="ml-4 hidden text-[18px] font-bold text-white md:block">
        {suggestionCount} Suggestions
      </h2>

      <SortingMenu onChange={setSortBy} />

      <Button
        colour="fuchsia"
        label="+ Add Feedback"
        onClick={() => {
          router.push("/new-feedback");
        }}
        className="ml-auto mr-6 md:mr-0"
      />
    </div>
  );
}
