import { type Category, type Status } from "@/types";

const CATEGORY_OPTIONS: Array<{ label: string; value: Category }> = [
  { label: "Feature", value: "feature" },
  { label: "UI", value: "UI" },
  { label: "UX", value: "UX" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Bug", value: "bug" },
];

const STATUS_OPTIONS: Array<{ label: string; value: Status }> = [
  { label: "Suggestion", value: "suggestion" },
  { label: "Planned", value: "planned" },
  { label: "In-Progress", value: "in-progress" },
  { label: "Live", value: "live" },
];

export { CATEGORY_OPTIONS, STATUS_OPTIONS };
