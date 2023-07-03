import Feedback from "@/components/feedback/feedback";
import feedbackData from "@/data/feedbacks.json";

export default function Home(): JSX.Element {
  return (
    <main className="flex min-h-screen items-center flex-col align-middle bg-slate-50">
      {feedbackData ? (
        feedbackData.map((data) => (
          <Feedback
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
