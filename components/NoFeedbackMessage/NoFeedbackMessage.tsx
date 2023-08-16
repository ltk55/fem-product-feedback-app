import Image from "next/image";

import illustrationEmpty from "@/public/img/suggestions/illustration-empty.svg";

export default function NoFeedbackMessage(): React.ReactNode {
  return (
    <div className="my-8 flex flex-col items-center justify-center rounded-[10px] bg-white px-6 py-[76px] md:w-full md:py-[110px]">
      <Image src={illustrationEmpty} alt="illustration-empty" />
      <h2 className="pt-[39px] text-center text-lg font-bold text-slate-600">
        There is no feedback yet.
      </h2>
      <p className="w-[278px] pt-3.5 text-center text-[13px] font-normal text-slate-500">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
    </div>
  );
}
