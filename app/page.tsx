/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";

import { useEffect, useState } from "react";

import Header from "@/components/Header/Header";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import data from "@/data/data.json";

export default function Home(): JSX.Element {
  const [sortBy, setSortBy] = useState<string>("mostUpvotes");

  const sortedSuggestions = data.productRequests.sort((a, b) => {
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
        return data.productRequests;
    }
  });
  console.log("🚀 - sortedSuggestions - sortedSuggestions:", sortedSuggestions);

  // const handleSort = (sortBy: string): void => {
  //   let sorted;

  //   switch (sortBy) {
  //     case "mostUpvotes":
  //       sorted = [...sortedSuggestions].sort((a, b) => b.upvotes - a.upvotes);
  //       break;
  //     case "leastUpvotes":
  //       sorted = [...sortedSuggestions].sort((a, b) => a.upvotes - b.upvotes);
  //       break;
  //     case "mostComments":
  //       sorted = sortedSuggestions.sort((a, b) => {
  //         const aComments = a.comments?.length ?? 0;
  //         const bComments = b.comments?.length ?? 0;
  //         return bComments - aComments;
  //       });
  //       break;
  //     case "leastComments":
  //       sorted = sortedSuggestions.sort((a, b) => {
  //         const aComments = a.comments?.length ?? 0;
  //         const bComments = b.comments?.length ?? 0;
  //         return aComments - bComments;
  //       });
  //       break;
  //     default:
  //       sorted = sortedSuggestions;
  //   }

  //   setSortedSuggestions(sorted);
  // };

  return (
    <>
      <Header
        suggestionCount={1}
        sortBy={sortBy}
        setSortBy={setSortBy}
        // handleSort={handleSort}
      />
      <main className="flex min-h-screen flex-col items-center bg-slate-50 align-middle">
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
    </>
  );
}
