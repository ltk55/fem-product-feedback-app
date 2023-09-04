import { twMerge } from "tailwind-merge";

export default function Button({
  colour,
  label,
  type,
  onClick,
  className,
}: {
  colour: "fuchsia" | "indigo" | "slate" | "red";
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
}): JSX.Element {
  const colorMap = {
    fuchsia: "bg-fuchsia-600 hover:bg-fuchsia-500",
    indigo: "bg-indigo-600 hover:bg-indigo-400",
    slate: "bg-slate-600 hover:bg-slate-500",
    red: "bg-red-600 hover:bg-rose-400",
  };

  const bgColorClass = colorMap[colour];

  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        "h-11 rounded-lg px-6 text-sm font-bold text-violet-50",
        bgColorClass,
        className,
      )}
    >
      {label}
    </button>
  );
}
