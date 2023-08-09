"use client";

import useStore from "@/lib/store";

import CategoryFilterWidget from "../CategoryFilterWidget/CategoryFilterWidget";
import RoadmapWidget from "../RoadmapWidget/RoadmapWidget";

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
      <div className="absolute right-0 top-0 flex h-full w-[271px] flex-col gap-6 bg-[#f7f8fd] p-6 shadow-md">
        <CategoryFilterWidget />
        <RoadmapWidget />
      </div>
    </div>
  );
}
