import Link from "next/link";

import useStore from "@/lib/store";
import { calculateStatusCounts, getStatusBgColor } from "@/lib/utils";
import { type TrackedStatus } from "@/types";

export default function RoadmapWidget(): JSX.Element {
  const productRequests = useStore((state) => state.productRequests);

  const statusCounts = calculateStatusCounts(productRequests);

  return (
    <div className="h-[178px] w-[223px] rounded-[10px] bg-white p-6 xl:h-[166px] xl:w-[255px]">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-bold text-slate-600">Roadmap</h3>
        <Link
          href="/roadmap"
          className="text-xs font-semibold text-indigo-600 underline"
        >
          View
        </Link>
      </div>
      <ul>
        {Object.entries(statusCounts).map(([status, count]) => (
          <li key={status} className="flex items-center justify-between">
            <div
              className={`mr-4 h-2 w-2 rounded-full ${getStatusBgColor(
                status as TrackedStatus,
              )}`}
            />
            <div className="flex-1 text-base font-normal text-slate-500">
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </div>
            <div className="text-right text-base font-bold text-slate-500">
              {count}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
