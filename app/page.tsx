/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import Feedback from "@/components/feedback/feedback";
import feedbackData from "@/data/feedbacks.json";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-50 align-middle">
      {feedbackData ? (
        feedbackData.map((data, key) => (
          <Feedback
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
