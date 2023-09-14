"use client";

import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

import iconArrowDownWhite from "@/public/img/shared/icon-arrow-down-white.svg";
import iconCheck from "@/public/img/shared/icon-check.svg";

interface SortingMenuProps {
  onChange: (arg: string) => void;
  className?: string;
  defaultOptionIndex?: number;
}

const options = [
  { value: "mostUpvotes", label: "Most Upvotes" },
  { value: "leastUpvotes", label: "Least Upvotes" },
  { value: "mostComments", label: "Most Comments" },
  { value: "leastComments", label: "Least Comments" },
];

const SortingMenu = React.forwardRef<HTMLDivElement, SortingMenuProps>(
  ({ onChange, className, defaultOptionIndex }, ref) => {
    const [selected, setSelected] = useState(options[defaultOptionIndex ?? 0]);

    function onChangeHandler(value: string): void {
      const foundOption = options.find((option) => option.value === value);
      if (foundOption?.value != null) {
        setSelected(foundOption);
        onChange(foundOption.value);
      }
    }

    return (
      <div className={className} ref={ref}>
        <Listbox value={selected.value} onChange={onChangeHandler}>
          {({ open }) => (
            <div className="relative">
              <Listbox.Button className="relative h-12 w-full px-6 text-left">
                <span className="flex items-center justify-between gap-2">
                  <span className="text-xs text-violet-50 md:text-sm">
                    Sort by :
                  </span>{" "}
                  <span className="truncate text-xs font-bold text-violet-50 md:text-sm">
                    {selected.label}
                  </span>
                  <Image
                    src={iconArrowDownWhite}
                    alt={open ? "close select menu" : "open select menu"}
                    className={open ? "rotate-180" : ""}
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-6 w-full overflow-auto rounded-lg bg-white text-base shadow sm:text-sm">
                  {options.map((opt, index) => (
                    <Listbox.Option
                      key={index}
                      className={({ active }) =>
                        `flex h-12 cursor-pointer select-none items-center px-6 ${
                          active ? "text-fuchsia-600" : "text-slate-500"
                        } ${
                          index !== options.length - 1
                            ? "border-b-[1px] border-slate-600/20"
                            : ""
                        }`
                      }
                      value={opt.value}
                    >
                      {({ selected }) => (
                        <div className="flex w-full items-center justify-between">
                          <span className="block truncate text-xs font-normal md:text-base">
                            {opt.label}
                          </span>
                          {selected ? (
                            <Image src={iconCheck} alt="check-icon" />
                          ) : null}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox>
      </div>
    );
  },
);

SortingMenu.displayName = "SortingMenu";

export default SortingMenu;
