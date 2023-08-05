"use client";

import useStore from "@/lib/store";

import CategoryFilter from "../CategoryFilter/CategoryFilter";

export default function Sidebar(): React.ReactNode {
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  return (
    <div
      className={`fixed inset-0 z-50 mt-[72px] bg-black/50 transition-opacity lg:hidden ${
        isSidebarOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="absolute right-0 top-0 h-full w-[271px] bg-[#f7f8fd] p-6 shadow-md">
        <CategoryFilter />
      </div>
    </div>
  );
}
