import { useRouter } from "next/navigation";

export default function GoBackBtn({
  colour,
}: {
  colour: "white" | "blue";
}): JSX.Element {
  const arrowColour = colour === "white" ? "#FFF" : "#647196";
  const textColour = colour === "white" ? "text-white" : "text-[#647196]";

  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.back();
      }}
      className="flex items-center gap-4"
    >
      <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke={arrowColour}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      <span className={`text-xs font-bold ${textColour}`}>Go Back</span>
    </button>
  );
}
