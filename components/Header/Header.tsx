"use client";

import Image from "next/image";
import { useState } from "react";

import CategoryFilterWidget from "@/components/CategoryFilterWidget/CategoryFilterWidget";
import iconHamburger from "@/public/img/shared/mobile/icon-hamburger.svg";

import RoadmapWidget from "../RoadmapWidget/RoadmapWidget";
import Sidebar from "../Sidebar/Sidebar";

export default function Header(): JSX.Element {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  return (
    <header className="flex justify-start gap-6 xl:flex-col">
      <div className="flex h-[72px] w-full items-center justify-between bg-background-header-mobile bg-cover px-6 text-white md:h-[178px] md:w-[223px] md:items-end md:rounded-[10px] md:bg-background-header-tablet md:pb-6 xl:h-[137px] xl:w-[255px] xl:bg-background-header-desktop">
        <section>
          <h1 className="text-base font-bold md:text-xl">Frontend Mentor</h1>
          <p className="text-xs font-medium opacity-75 md:text-base">
            Feedback Board
          </p>
        </section>

        <Image
          src={iconHamburger}
          alt="hamburger icon"
          className={`cursor-pointer md:hidden ${
            isSidebarOpen ? "hidden" : ""
          }`}
          onClick={() => {
            setIsSidebarOpen((prev) => !prev);
            console.log(isSidebarOpen);
          }}
        />
      </div>

      <section className="hidden md:flex md:gap-6 xl:flex-col">
        <CategoryFilterWidget />
        <RoadmapWidget />
      </section>

      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen}>
        <section className="flex flex-col gap-6">
          <CategoryFilterWidget />
          <RoadmapWidget />
        </section>
      </Sidebar>
    </header>
  );
}
