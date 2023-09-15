import { Dialog } from "@headlessui/react";
import Image from "next/image";

import iconClose from "@/public/img/shared/mobile/icon-close.svg";

interface SidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
  children,
  isOpen,
  setIsOpen,
}: SidebarProps): JSX.Element {
  return (
    <Dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
      }}
      className="fixed right-0 top-0 z-30 w-[271px] overflow-y-auto "
    >
      <div className="flex flex-col">
        <div className="flex h-[72px] items-center justify-end">
          <Image
            src={iconClose}
            alt="close icon"
            className="cursor-pointermd:hidden mr-6"
            onClick={() => {
              setIsOpen(false);
            }}
          />
        </div>
        <Dialog.Overlay className="fixed inset-0 top-[72px] z-40 bg-black/50" />
        <div
          className="z-50 flex h-screen w-full max-w-sm
                         flex-col justify-between overflow-hidden bg-slate-50 p-6
                         text-left align-middle shadow-xl"
        >
          <div>{children}</div>
        </div>
      </div>
    </Dialog>
  );
}
