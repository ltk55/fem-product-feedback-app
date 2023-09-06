"use client";

import { useRouter } from "next/navigation";

import AddComment from "@/components/AddComment/AddComment";
import Button from "@/components/Button/Button";
import CommentBlock from "@/components/CommentBlock/CommentBlock";
import GoBackBtn from "@/components/GoBackBtn/GoBackBtn";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import useStore from "@/lib/store";

interface PageProps {
  params: { id: string };
}

export default function FeedbackDetailPage({
  params: { id },
}: PageProps): JSX.Element {
  const router = useRouter();

  const [productRequests] = useStore((state) => [state.productRequests]);

  const feedback = productRequests.find((req) => req.id.toString() === id);

  return (
    <div className="m-6 flex flex-col gap-6 md:mx-auto md:max-w-[730px]">
      <div className="flex h-10 items-center justify-between">
        <GoBackBtn colour="blue" />
        <Button
          colour="indigo"
          label="Edit Feedback"
          onClick={() => {
            router.push(`./edit/${id}`);
          }}
        />
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
            <h4 className="text-lg font-bold text-slate-600">
              {feedback.comments?.length} comment
              {feedback.comments != null && feedback.comments.length > 1
                ? "s"
                : ""}
            </h4>

            {feedback.comments?.map((comment, index) => {
              return (
                <div key={index}>
                  {/* Comments */}
                  <CommentBlock
                    className={
                      "border-b " +
                      (feedback.comments != null &&
                      index === feedback.comments.length - 1
                        ? "border-b-0"
                        : "")
                    }
                    content={comment.content}
                    user={comment.user}
                  />

                  {/* Replies */}
                  {comment.replies?.map((reply, key) => (
                    <CommentBlock
                      className="border-l-[1px] border-slate-500/10 pl-6 md:ml-5"
                      key={key}
                      content={reply.content}
                      user={reply.user}
                      replyingTo={reply.replyingTo}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}

      <AddComment feedbackId={id} />
    </div>
  );
}
