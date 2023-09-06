import { type ProductRequest, type TrackedStatus } from "@/types";

function calculateStatusCounts(
  productRequests: ProductRequest[],
): Record<TrackedStatus, number> {
  const statusCounts: Record<TrackedStatus, number> = {
    planned: 0,
    "in-progress": 0,
    live: 0,
  };

  productRequests.forEach((request) => {
    if (request.status !== "suggestion") {
      if (statusCounts[request.status] === undefined) {
        statusCounts[request.status] = 1;
      } else {
        statusCounts[request.status] = statusCounts[request.status] + 1;
      }
    }
  });

  return statusCounts;
}

function getStatusBgColor(status: TrackedStatus): string {
  const statusColors: Record<TrackedStatus, string> = {
    planned: "bg-orange-300",
    "in-progress": "bg-fuchsia-600",
    live: "bg-blue-400",
  };

  return statusColors[status];
}

function getStatusBorderColor(status: TrackedStatus): string {
  const statusColors: Record<TrackedStatus, string> = {
    planned: "border-orange-300",
    "in-progress": "border-fuchsia-600",
    live: "border-blue-400",
  };

  return statusColors[status];
}

function capitalizeString(string: string): string {
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function getOptionIndexByValue<T>(
  options: Array<{ label: string; value: T }>,
  value: T,
): number {
  return options.findIndex((option) => option.value === value);
}

export {
  calculateStatusCounts,
  capitalizeString,
  getOptionIndexByValue,
  getStatusBgColor,
  getStatusBorderColor,
};
