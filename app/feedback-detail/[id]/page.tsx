"use client";

import { useRouter } from "next/navigation";

import AddComment from "@/components/AddComment/AddComment";
import Button from "@/components/Buttons/Button";
import GoBackBtn from "@/components/Buttons/GoBackBtn";
import CommentBlock from "@/components/CommentBlock/CommentBlock";
import SuggestionCard from "@/components/SuggestionCard/SuggestionCard";
import useStore from "@/lib/store";
import { type ProductRequest, type Reply } from "@/types";

interface PageProps {
  params: { id: string };
}

export default function FeedbackDetailPage({
  params: { id },
}: PageProps): JSX.Element {
  const router = useRouter();

  const [productRequests, setProductRequests, currentUser] = useStore(
    (state) => [
      state.productRequests,
      state.setProductRequests,
      state.currentUser,
    ],
  );

  const feedback = productRequests.find((req) => req.id.toString() === id);

  function handleAddComment(updatedProductRequests: ProductRequest[]): void {
    setProductRequests(updatedProductRequests);
  }

  const handleAddReply = (
    feedbackId: number,
    commentId: string,
    newReply: Reply,
  ): void => {
    const updatedProductRequests = productRequests.map((request) => {
      if (request.id === feedbackId) {
        const updatedComment = {
          ...request,
          comments: request.comments?.map((comment) => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: [...(comment.replies ?? []), newReply],
              };
            }
            return comment;
          }),
        };

        return updatedComment;
      }
      return request;
    });

    setProductRequests(updatedProductRequests);
  };

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
              const replyCount = comment.replies?.length ?? 0;
              const isLastComment =
                index === (feedback.comments?.length ?? 1) - 1;

              return (
                <div key={index}>
                  {/* Comments */}
                  <CommentBlock
                    className={
                      isLastComment || replyCount > 0 ? "" : "border-b"
                    }
                    content={comment.content}
                    commenter={comment.user}
                    currentUser={currentUser}
                    feedbackId={feedback.id}
                    commentId={comment.id}
                    onAddReply={handleAddReply}
                  />

                  {/* Replies */}
                  {comment.replies?.map((reply, key) => (
                    <CommentBlock
                      className="border-l-[1px] border-slate-500/10 pl-6 md:ml-5"
                      key={key}
                      content={reply.content}
                      commenter={reply.user}
                      currentUser={currentUser}
                      replyingTo={reply.replyingTo}
                      feedbackId={feedback.id}
                      commentId={comment.id}
                      onAddReply={handleAddReply}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </>
      )}

      <AddComment
        feedbackId={id}
        currentUser={currentUser}
        productRequests={productRequests}
        onAddComment={handleAddComment}
      />
    </div>
  );
}
