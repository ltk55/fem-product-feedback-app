/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";

import { useState } from "react";

import Header from "@/components/Header/Header";
// import Sidebar from "@/components/Sidebar/Sidebar";
import SortableListWithAdd from "@/components/SortableListWithAdd/SortableListWithAdd";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import data from "@/data/data.json";
import useStore from "@/lib/store";

export default function Home(): JSX.Element {
  const [sortBy, setSortBy] = useState<string>("mostUpvotes");
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const selectedCategory = useStore((state) => state.selectedCategory);

  const sortedSuggestions = data.productRequests
    .filter(
      (sugg) =>
        selectedCategory === "All" ||
        sugg.category.toLowerCase() === selectedCategory.toLowerCase(),
    )
    .sort((a, b) => {
      const aComments = a.comments?.length ?? 0;
      const bComments = b.comments?.length ?? 0;

      switch (sortBy) {
        case "mostUpvotes":
          return b.upvotes - a.upvotes;
        case "leastUpvotes":
          return a.upvotes - b.upvotes;
        case "mostComments":
          return bComments - aComments;
        case "leastComments":
          return aComments - bComments;
        default:
          return 0;
      }
    });

  // const handleSidebarToggle = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // };

  return (
    <div className="flex flex-col justify-center md:mt-[94px] md:gap-10 md:px-10 lg:flex-row lg:gap-[30px]">
      <Header />

      {/* <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} /> */}

      <main className="flex min-h-screen flex-col items-center align-middle">
        <SortableListWithAdd
          suggestionCount={sortedSuggestions.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        {sortedSuggestions ? (
          sortedSuggestions.map((sugg) => (
            <SuggestionCard
              key={sugg.id}
              title={sugg.title}
              description={sugg.description}
              category={sugg.category}
              upvoteCount={sugg.upvotes}
              commentCount={sugg.comments?.length ?? 0}
            />
          ))
        ) : (
          <div>There is no feedback yet.</div>
        )}
      </main>
    </div>
  );
}
