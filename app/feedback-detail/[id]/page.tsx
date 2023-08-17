"use client";

import CommentBlock from "@/components/CommentBlock/CommentBlock";
import GoBackBtn from "@/components/GoBackBtn/GoBackBtn";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import useStore from "@/lib/store";

interface PageProps {
  params: { id: string };
}

export default function Page({ params: { id } }: PageProps): JSX.Element {
  const localData = useStore((state) => state.localData);

  const feedback = localData.productRequests.find(
    (req) => req.id === Number(id),
  );

  return (
    <div className="m-6 flex flex-col gap-6">
      <div className="flex h-10 items-center">
        <GoBackBtn colour="blue" />
      </div>
      {feedback != null && (
        <>
          <SuggestionCard
            id={feedback.id}
            title={feedback.title}
            description={feedback.description}
            category={feedback.category}
            upvoteCount={feedback.upvotes}
            commentCount={feedback.comments?.length ?? 0}
          />
          <div className="flex flex-col rounded-lg bg-white p-6">
            <div className="text-lg font-bold text-slate-600">
              {feedback.comments?.length} comment
              {feedback.comments != null && feedback.comments.length > 1
                ? "s"
                : ""}
            </div>

            {feedback.comments?.map((comment, index) => (
              <CommentBlock
                key={index}
                comment={comment}
                className={
                  "border-b " +
                  (feedback.comments != null &&
                  index === feedback.comments.length - 1
                    ? "border-b-0"
                    : "")
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
