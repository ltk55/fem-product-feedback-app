import { useState } from "react";

interface DropDownBtnProps {
  currentSelection: string;
  sortByCriteria: string[];
}

export default function DropDownBtn({
  currentSelection,
  sortByCriteria,
}: DropDownBtnProps): React.ReactNode {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        className="flex items-center text-[14px] font-normal text-violet-50"
        onClick={toggleDropdown}
      >
        <span className="text-[14px] font-normal text-violet-50">
          Sort by :
        </span>
        <span className="text-[14px] font-bold text-violet-50">
          {currentSelection}
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
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 rounded-md bg-white py-2 shadow-lg">
          {sortByCriteria.map((item, key) => (
            <a
              key={key}
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
