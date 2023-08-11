import { create } from "zustand";

import data from "@/data/data.json";
import { type Data, type Status } from "@/types";

interface Store {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  localData: Data;
  selectedStatus: Status;
  setSelectedStatus: (selectedStatus: Status) => void;
}

const useStore = create<Store>()((set) => ({
  selectedCategory: "all",
  localData: data as Data,
  setSelectedCategory: (selectedCategory: string) => {
    set(() => ({ selectedCategory }));
  },
  isSidebarOpen: false,
  setIsSidebarOpen: (isOpen: boolean) => {
    set({ isSidebarOpen: isOpen });
  },
  selectedStatus: "in-progress",
  setSelectedStatus: (selectedStatus: Status) => {
    set(() => ({ selectedStatus }));
  },
}));

export default useStore;
