import { create } from "zustand";

import data from "@/data/data.json";
import { type Data } from "@/types";

interface Store {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  localData: Data;
}

const useStore = create<Store>()((set) => ({
  selectedCategory: "all",
  localData: data,
  setSelectedCategory: (selectedCategory: string) => {
    set(() => ({ selectedCategory }));
  },
  isSidebarOpen: false,
  setIsSidebarOpen: (isOpen: boolean) => {
    set({ isSidebarOpen: isOpen });
  },
}));

export default useStore;
