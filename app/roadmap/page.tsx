"use client";

import Link from "next/link";

import RoadmapCard from "@/components/RoadmapCard/RoadmapCard";
import useStore from "@/lib/store";
import { calculateStatusCounts, getStatusBorderColor } from "@/lib/utils";
import { type ProductRequest, type Status } from "@/types";

interface StatusSectionProps {
  selectedStatus: Status;
  statusCounts: Partial<Record<Status, number>>;
  status: Status;
  label: string;
  description: string;
}

function StatusSection({
  selectedStatus,
  statusCounts,
  status,
  label,
  description,
}: StatusSectionProps): JSX.Element {
  return (
    <div
      className={`p-6 ${
        selectedStatus === status ? "block" : "hidden"
      } md:block`}
    >
      <div className="mb-1 text-lg font-bold text-slate-600">{`${label} (${
        statusCounts[status] ?? 0
      })`}</div>
      <div className="text-xs font-normal text-slate-500">{description}</div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const [localData, selectedStatus, setSelectedStatus] = useStore((state) => [
    state.localData,
    state.selectedStatus,
    state.setSelectedStatus,
  ]);

  const statusCounts = calculateStatusCounts(localData);

  const filteredData: ProductRequest[] = localData.productRequests.filter(
    (request) => request.status === selectedStatus,
  );

  return (
    <div>
      <div className="flex h-[100px] w-full flex-col justify-center bg-slate-700 pl-6">
        <Link href="./" className="flex items-center gap-4">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L2 5l4-4"
              stroke="#FFF"
              stroke-width="2"
              fill="none"
              fill-rule="evenodd"
            />
          </svg>
          <span className="text-[13px] font-bold text-white">Go Back</span>
        </Link>
        <h2 className="text-lg font-bold text-white">Roadmap</h2>
      </div>

      <ul className="flex h-[60px] justify-around border-b-[1px] border-slate-400/25 md:hidden">
        {Object.entries(statusCounts).map(([status, count]) => (
          <li
            key={status}
            className={`flex w-32 justify-around ${
              selectedStatus === status ? "border-b-[2px] " : ""
            } ${getStatusBorderColor(selectedStatus)}`}
          >
            <button
              className="text-[13px] font-bold text-slate-600"
              onClick={() => {
                setSelectedStatus(status as Status);
              }}
            >
              {`${status.charAt(0).toUpperCase() + status.slice(1)} (${count})`}
            </button>
          </li>
        ))}
      </ul>

      <div className="justify-around md:flex">
        <StatusSection
          selectedStatus={selectedStatus}
          statusCounts={statusCounts}
          status="planned"
          label="Planned"
          description="Ideas prioritized for research"
        />

        <StatusSection
          selectedStatus={selectedStatus}
          statusCounts={statusCounts}
          status="in-progress"
          label="In-Progress"
          description="Currently being developed"
        />

        <StatusSection
          selectedStatus={selectedStatus}
          statusCounts={statusCounts}
          status="live"
          label="Live"
          description="Released features"
        />
      </div>

      <div className="md:hidden">
        {filteredData.map((request) => (
          <RoadmapCard
            key={request.id}
            title={request.title}
            description={request.description}
            category={request.category}
            upvoteCount={request.upvotes}
            commentCount={request.comments?.length ?? 0}
            status={request.status}
          />
        ))}
      </div>
    </div>
  );
}
