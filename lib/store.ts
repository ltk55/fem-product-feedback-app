import { create } from "zustand";

import data from "@/data/data.json";
import { type Category, type Data, type TrackedStatus } from "@/types";

interface Store {
  selectedCategory: Category;
  setSelectedCategory: (selectedCategory: Category) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  localData: Data;
  selectedStatus: TrackedStatus;
  setSelectedStatus: (selectedStatus: TrackedStatus) => void;
}

const useStore = create<Store>()((set) => ({
  selectedCategory: "all",
  localData: data as Data,
  setSelectedCategory: (selectedCategory: Category) => {
    set(() => ({ selectedCategory }));
  },
  isSidebarOpen: false,
  setIsSidebarOpen: (isOpen: boolean) => {
    set({ isSidebarOpen: isOpen });
  },
  selectedStatus: "in-progress",
  setSelectedStatus: (selectedStatus: TrackedStatus) => {
    set(() => ({ selectedStatus }));
  },
}));

export default useStore;
