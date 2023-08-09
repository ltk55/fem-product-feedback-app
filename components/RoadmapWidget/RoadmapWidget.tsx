import useStore from "@/lib/store";
import { type Status } from "@/types";

export default function RoadmapWidget(): JSX.Element {
  const localData = useStore((state) => state.localData);

  const statusCounts: Partial<Record<Status, number>> = {};

  localData.productRequests.forEach((request) => {
    if (request.status !== "suggestion") {
      if (statusCounts[request.status] === undefined) {
        statusCounts[request.status] = 1;
      } else {
        statusCounts[request.status] =
          (statusCounts[request.status] as number) + 1;
      }
    }
  });

  return (
    <div className="h-[178px] w-[223px] rounded-[10px] bg-white p-6 lg:h-[166px] lg:w-[255px]">
      <h3 className="mb-6 text-lg font-bold text-slate-600">Roadmap</h3>
      <ul>
        {Object.entries(statusCounts).map(([status, count]) => (
          <li key={status} className="flex items-center justify-between">
            <div
              className={`mr-4 h-2 w-2 rounded-full ${
                status === "planned"
                  ? "bg-orange-300"
                  : status === "in-progress"
                  ? "bg-fuchsia-600"
                  : "bg-blue-400"
              }`}
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
