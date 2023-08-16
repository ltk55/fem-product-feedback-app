"use client";

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
        <SuggestionCard
          id={feedback.id}
          title={feedback.title}
          description={feedback.description}
          category={feedback.category}
          upvoteCount={feedback.upvotes}
          commentCount={feedback.comments?.length ?? 0}
        />
      )}
    </div>
  );
}
