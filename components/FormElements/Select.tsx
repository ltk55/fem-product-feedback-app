"use client";

import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import React, { Fragment, useState } from "react";

import iconArrowUp from "@/public/img/shared/icon-arrow-up.svg";
import iconCheck from "@/public/img/shared/icon-check.svg";

interface Option {
  label: string;
  value: string;
}

interface SelectProps {
  options: Option[];
  onChange: (arg: string) => void;
  className?: string;
}

const Select = React.forwardRef<HTMLDivElement, SelectProps>(
  ({ options, onChange, className }, ref) => {
    const [selected, setSelected] = useState<Option>(options[0]);

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
            <div className="relative mt-1">
              <Listbox.Button
                className={`relative mb-4 h-12 w-full cursor-pointer rounded bg-slate-50 px-6 py-2 text-left sm:text-sm ${
                  open ? "outline outline-1 outline-indigo-600" : ""
                }`}
              >
                <span className="flex items-center justify-between truncate text-xs text-slate-600 md:text-base">
                  {selected.label}
                  <Image
                    src={iconArrowUp}
                    alt="hanburger-icon"
                    className={`${open ? "rotate-180" : ""}`}
                  />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full overflow-auto rounded-lg bg-white text-base shadow sm:text-sm">
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
                            <Image src={iconCheck} alt="hanburger-icon" />
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

Select.displayName = "Select";

export default Select;
