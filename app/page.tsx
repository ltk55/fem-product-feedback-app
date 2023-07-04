/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import feedbackData from "@/data/feedbacks.json";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 align-middle">
      {feedbackData ? (
        feedbackData.map((data, key) => (
          <SuggestionCard
            key={key}
            title={data.title}
            description={data.description}
            tags={data.tags}
            upvoteCount={data.upvoteCount}
            commentCount={data.commentCount}
          />
        ))
      ) : (
        <div>There is no feedback yet.</div>
      )}
    </main>
  );
}
