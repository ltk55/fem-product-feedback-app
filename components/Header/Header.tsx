"use client";

import Image from "next/image";
import { twMerge } from "tailwind-merge";

import CategoryFilterWidget from "@/components/CategoryFilterWidget/CategoryFilterWidget";
import useStore from "@/lib/store";
import iconClose from "@/public/img/shared/mobile/icon-close.svg";
import iconHamburger from "@/public/img/shared/mobile/icon-hamburger.svg";

import RoadmapWidget from "../RoadmapWidget/RoadmapWidget";

export default function Header(): React.ReactNode {
  const [setIsSidebarOpen, isSidebarOpen] = useStore((state) => [
    state.setIsSidebarOpen,
    state.isSidebarOpen,
  ]);

  return (
    <header className="flex justify-start gap-6 xl:flex-col">
      <div className="flex h-[72px] w-full items-center justify-between bg-background-header-mobile bg-repeat-round px-6 text-white md:h-[178px] md:w-[223px] md:items-end md:rounded-[10px] md:bg-background-header-tablet md:pb-6 xl:h-[137px] xl:w-[255px] xl:bg-background-header-desktop">
        <div>
          <h1 className="text-base font-bold md:text-xl">Frontend Mentor</h1>
          <p className="text-xs font-medium opacity-75 md:text-base">
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
          className={`md:hidden ${isSidebarOpen ? "block" : "hidden"}`}
          onClick={() => {
            setIsSidebarOpen(false);
          }}
        />
      </div>

      <div className="hidden md:flex md:gap-6 xl:flex-col">
        <CategoryFilterWidget />
        <RoadmapWidget />
      </div>
    </header>
  );
}
