"use client";

import Link from "next/link";

import RoadmapCard from "@/components/RoadmapCard/RoadmapCard";
import useStore from "@/lib/store";
import {
  calculateStatusCounts,
  capitalizeString,
  getStatusBorderColor,
} from "@/lib/utils";
import { type ProductRequest, type TrackedStatus } from "@/types";

interface StatusColumnHeaderProps {
  selectedStatus: TrackedStatus;
  statusCounts: Record<TrackedStatus, number>;
  status: TrackedStatus;
}

function StatusColumnHeader({
  selectedStatus,
  statusCounts,
  status,
}: StatusColumnHeaderProps): JSX.Element {
  const description = {
    planned: "Ideas prioritized for research",
    "in-progress": "Currently being developed",
    live: "Released features",
  }[status];

  return (
    <div
      className={`w-56 p-6 md:px-0 xl:w-[350px] ${
        selectedStatus === status ? "block" : "hidden"
      } md:block`}
    >
      <div className="mb-1 text-lg font-bold text-slate-600">{`${capitalizeString(
        status,
      )} (${statusCounts[status] ?? 0})`}</div>
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

  const statusKeys: TrackedStatus[] = ["planned", "in-progress", "live"];

  const filterRequestsByStatus = (status: TrackedStatus): ProductRequest[] =>
    localData.productRequests.filter((req) => req.status === status);

  return (
    <div className="flex flex-col md:items-center">
      {/* Header */}
      <div className="flex h-[100px] w-full flex-col justify-center bg-slate-700 pl-6 md:mx-10 md:mt-14 md:w-[689px] md:rounded-lg xl:w-[1110px]">
        <Link href="./" className="flex items-center gap-4">
          <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 9L2 5l4-4"
              stroke="#FFF"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </svg>
          <span className="text-xs font-bold text-white">Go Back</span>
        </Link>
        <h2 className="text-lg font-bold text-white">Roadmap</h2>
      </div>

      {/* Status Filter */}
      <ul className="flex h-[60px] justify-around border-b-[1px] border-slate-400/25 md:hidden">
        {statusKeys.map((status) => (
          <li
            key={status}
            className={`flex w-32 justify-around ${
              selectedStatus === status ? "border-b-[2px] " : ""
            } ${getStatusBorderColor(selectedStatus)}`}
          >
            <button
              className="text-xs font-bold text-slate-600"
              onClick={() => {
                setSelectedStatus(status);
              }}
            >
              {`${status.charAt(0).toUpperCase() + status.slice(1)} (${
                statusCounts[status] ?? 0
              })`}
            </button>
          </li>
        ))}
      </ul>

      {/* Status Column Header */}
      <div className="md:flex md:justify-between md:gap-2.5 xl:gap-[30px]">
        {statusKeys.map((status) => (
          <StatusColumnHeader
            key={status}
            selectedStatus={selectedStatus}
            statusCounts={statusCounts}
            status={status}
          />
        ))}
      </div>

      {/* Roadmap Card */}
      <div className="flex justify-center md:justify-around md:gap-2.5 xl:gap-[30px]">
        {statusKeys.map((status) => (
          <div
            key={status}
            className={`${
              selectedStatus === status ? "block" : "hidden"
            } md:flex md:flex-col`}
          >
            {filterRequestsByStatus(status).map((request) => (
              <RoadmapCard
                key={request.id}
                title={request.title}
                description={request.description}
                category={request.category}
                upvoteCount={request.upvotes}
                commentCount={request.comments?.length ?? 0}
                status={request.status as TrackedStatus}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
