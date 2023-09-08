import Image from "next/image";
import { useRouter } from "next/navigation";

import illustrationEmpty from "@/public/img/suggestions/illustration-empty.svg";

import Button from "../Buttons/Button";

export default function NoFeedbackMessage(): JSX.Element {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center rounded-[10px] bg-white px-6 py-[76px] md:w-full md:py-[110px]">
      <Image src={illustrationEmpty} alt="illustration-empty" />
      <h2 className="pt-[39px] text-center text-lg font-bold text-slate-600 md:text-2xl">
        There is no feedback yet.
      </h2>
      <p className="mb-12 w-[278px] pt-3.5 text-center text-xs font-normal text-slate-500 md:text-base">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button
        colour="fuchsia"
        label="+ Add Feedback"
        onClick={() => {
          router.push("/new-feedback");
        }}
      />
    </div>
  );
}
