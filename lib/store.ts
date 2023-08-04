import { create } from "zustand";

interface Store {
  selectedCategory: string;
  setSelectedCategory: (selectedCategory: string) => void;
}

const useStore = create<Store>()((set) => ({
  selectedCategory: "all",
  setSelectedCategory: (selectedCategory: string) => {
    set(() => ({ selectedCategory }));
  },
}));

export default useStore;
