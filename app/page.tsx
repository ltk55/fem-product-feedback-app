/* eslint-disable @typescript-eslint/strict-boolean-expressions */
"use client";

import { useState } from "react";

import SortableListWithAdd from "@/components/SortableListWithAdd/SortableListWithAdd";
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
        return 0;
    }
  });

  return (
    <>
      <SortableListWithAdd
        suggestionCount={sortedSuggestions.length}
        sortBy={sortBy}
        setSortBy={setSortBy}
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
