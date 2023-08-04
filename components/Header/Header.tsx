"use client";

import CategoryFilter from "@/components/CategoryFilter/CategoryFilter";

export default function Header(): React.ReactNode {
  return (
    <header className="flex justify-between gap-5 lg:flex-col lg:justify-start">
      <div className="flex h-[72px] w-full flex-col justify-center bg-background-header-mobile bg-repeat-round pl-6 text-white md:h-[178px] md:w-[223px] md:justify-end md:rounded-[10px] md:bg-background-header-tablet md:pb-6 lg:h-[137px] lg:w-[255px] lg:bg-background-header-desktop">
        <h1 className="text-[15px] font-bold md:text-xl">Frontend Mentor</h1>
        <p className="text-[13px] font-medium opacity-75 md:text-[15px]">
          Feedback Board
        </p>
      </div>

      <CategoryFilter />
      {/* <div className="hidden h-[178px] w-[223px] rounded-[10px] bg-white md:block lg:h-[137px] lg:w-[255px]">
        Raodmap
      </div> */}
    </header>
  );
}
