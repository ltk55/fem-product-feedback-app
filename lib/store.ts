import { create } from "zustand";

interface Store {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const useStore = create<Store>()((set) => ({
  selectedCategory: "all",
  setSelectedCategory: (selectedCategory: string) => {
    set(() => ({ selectedCategory }));
  },
  isSidebarOpen: false,
  setIsSidebarOpen: (isOpen: boolean) => {
    set({ isSidebarOpen: isOpen });
  },
}));

export default useStore;
