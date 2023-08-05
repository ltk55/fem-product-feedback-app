"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";
import useStore from "@/lib/store";
import iconClose from "@/public/img/shared/mobile/icon-close.svg";
import iconHamburger from "@/public/img/shared/mobile/icon-hamburger.svg";

export default function Header(): React.ReactNode {
  const [setIsSidebarOpen, isSidebarOpen] = useStore((state) => [
    state.setIsSidebarOpen,
    state.isSidebarOpen,
  ]);

  return (
    <header className="flex justify-between gap-5 lg:flex-col lg:justify-start">
      <div className="flex h-[72px] w-full items-center justify-between bg-background-header-mobile bg-repeat-round px-6 text-white md:h-[178px] md:w-[223px] md:items-end md:rounded-[10px] md:bg-background-header-tablet md:pb-6 lg:h-[137px] lg:w-[255px] lg:bg-background-header-desktop">
        <div>
          <h1 className="text-[15px] font-bold md:text-xl">Frontend Mentor</h1>
          <p className="text-[13px] font-medium opacity-75 md:text-[15px]">
            Feedback Board
          </p>
        </div>
        <Image
          src={iconHamburger}
          alt="hanburger-icon"
          className={twMerge(
            "cursor-pointer md:hidden",
            isSidebarOpen ? "hidden" : "block",
          )}
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        />

        <Image
          src={iconClose}
          alt="close-icon"
          className={isSidebarOpen ? "block" : "hidden"}
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        />
      </div>

      <div className="hidden md:block">
        <CategoryFilter />
      </div>
      {/* <div className="hidden h-[178px] w-[223px] rounded-[10px] bg-white md:block lg:h-[137px] lg:w-[255px]">
        Raodmap
      </div> */}
    </header>
  );
}
