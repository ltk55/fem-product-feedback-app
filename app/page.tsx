"use client";

import { useState } from "react";

import Header from "@/components/Header/Header";
import NoFeedbackMessage from "@/components/NoFeedbackMessage/NoFeedbackMessage";
import Sidebar from "@/components/Sidebar/Sidebar";
import SortableListWithAdd from "@/components/SortableListWithAdd/SortableListWithAdd";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import data from "@/data/data.json";
import useStore from "@/lib/store";
import { type Category } from "@/types";

export default function Home(): JSX.Element {
  const [sortBy, setSortBy] = useState<string>("mostUpvotes");

  const selectedCategory = useStore((state) => state.selectedCategory);

  const sortedSuggestions = data.productRequests
    .filter(
      (sugg) =>
        selectedCategory.toLowerCase() === "all" ||
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

  return (
    <div className="flex flex-col justify-center md:mt-[94px] md:gap-10 md:px-10 xl:flex-row xl:gap-[30px]">
      <Header />

      <Sidebar />

      <main className="flex min-h-screen flex-col items-center align-middle">
        <SortableListWithAdd
          suggestionCount={sortedSuggestions.length}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <div className="mx-6 flex flex-col gap-4 py-8 md:w-full">
          {sortedSuggestions.length > 0 ? (
            sortedSuggestions.map((sugg) => (
              <SuggestionCard
                key={sugg.id}
                id={sugg.id}
                title={sugg.title}
                description={sugg.description}
                category={sugg.category as Category}
                upvoteCount={sugg.upvotes}
                commentCount={sugg.comments?.length ?? 0}
              />
            ))
          ) : (
            <NoFeedbackMessage />
          )}
        </div>
      </main>
    </div>
  );
}
