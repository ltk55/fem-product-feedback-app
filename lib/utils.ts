import { type Data, type Status } from "@/types";

function calculateStatusCounts(data: Data): Partial<Record<Status, number>> {
  const statusCounts: Partial<Record<Status, number>> = {};

  data.productRequests.forEach((request) => {
    if (request.status !== "suggestion") {
      if (statusCounts[request.status] === undefined) {
        statusCounts[request.status] = 1;
      } else {
        statusCounts[request.status] =
          (statusCounts[request.status] as number) + 1;
      }
    }
  });

  return statusCounts;
}

function getStatusBgColor(status: Status): string {
  const statusColors: Partial<Record<Status, string>> = {
    planned: "bg-orange-300",
    "in-progress": "bg-fuchsia-600",
    live: "bg-blue-400",
  };

  return (statusColors[status] as string) ?? statusColors.suggestion;
}

function getStatusBorderColor(status: Status): string {
  const statusColors: Partial<Record<Status, string>> = {
    planned: "border-orange-300",
    "in-progress": "border-fuchsia-600",
    live: "border-blue-400",
  };

  return (statusColors[status] as string) ?? statusColors.suggestion;
}

export { calculateStatusCounts, getStatusBgColor, getStatusBorderColor };
