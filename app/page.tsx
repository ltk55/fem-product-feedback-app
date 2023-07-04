/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import data from "@/data/data.json";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 align-middle">
      {data ? (
        data.productRequests.map((req) => (
          <SuggestionCard
            key={req.id}
            title={req.title}
            description={req.description}
            category={req.category}
            upvoteCount={req.upvotes}
            commentCount={req.comments?.length ?? 0}
          />
        ))
      ) : (
        <div>There is no feedback yet.</div>
      )}
    </main>
  );
}
