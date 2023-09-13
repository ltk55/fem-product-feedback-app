import useStore from "@/lib/store";

export default function UpvoteBtn({
  feedbackId,
  upvote,
  responsive = false,
}: {
  feedbackId: number;
  upvote: number;
  responsive?: boolean;
}): JSX.Element {
  const [
    productRequests,
    setProductRequests,
    votedFeedbacksId,
    setVotedFeedbacksId,
  ] = useStore((state) => [
    state.productRequests,
    state.setProductRequests,
    state.votedFeedbacksId,
    state.setVotedFeedbacksId,
  ]);

  const isVoted = votedFeedbacksId.includes(feedbackId);

  function upvoteButtonHandler(): void {
    const productReqId = productRequests.findIndex(
      (req) => req.id === feedbackId,
    );

    let updatedVoteCount = 0;

    if (isVoted) {
      updatedVoteCount = upvote - 1;
      const newVotedFeedbacksId = [...votedFeedbacksId];

      const index = newVotedFeedbacksId.indexOf(feedbackId);
      if (index > -1) {
        newVotedFeedbacksId.splice(index, 1);
      }
      setVotedFeedbacksId(newVotedFeedbacksId);
    } else {
      updatedVoteCount = upvote + 1;
      setVotedFeedbacksId([...votedFeedbacksId, feedbackId]);
    }

    const updatedFeedback = {
      ...productRequests[productReqId],
      upvotes: updatedVoteCount,
    };

    const updatedProductRequests = [...productRequests];
    updatedProductRequests[productReqId] = updatedFeedback;

    setProductRequests(updatedProductRequests);
  }

  return (
    <button
      onClick={upvoteButtonHandler}
      className={`${
        isVoted ? "bg-indigo-600 text-white" : "bg-violet-50 text-slate-600"
      } ${responsive ? "md:h-[53px] md:w-10 md:flex-col md:gap-1.5" : ""} 
        flex h-8 w-[69px] items-center justify-center gap-1 rounded-lg pl-4 pr-[0.81rem] hover:bg-indigo-200 `}
    >
      <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 6l4-4 4 4"
          stroke={isVoted ? "#FFF" : "#4661E6"}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
          aria-label="upvote"
        />
      </svg>
      <div className="text-center text-xs font-bold">{upvote}</div>
    </button>
  );
}
