import { create } from "zustand";

import data from "@/data/data.json";
import {
  type Category,
  type ProductRequest,
  type TrackedStatus,
  type User,
} from "@/types";

interface Store {
  selectedCategory: Category;
  setSelectedCategory: (selectedCategory: Category) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
  selectedStatus: TrackedStatus;
  setSelectedStatus: (selectedStatus: TrackedStatus) => void;
  currentUser: User;
  productRequests: ProductRequest[];
  setProductRequests: (productRequests: ProductRequest[]) => void;
}

const useStore = create<Store>()((set) => ({
  selectedCategory: "all",
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
  currentUser: data.currentUser,
  productRequests: data.productRequests as ProductRequest[],
  setProductRequests: (productRequests: ProductRequest[]) => {
    set(() => ({ productRequests }));
  },
}));

export default useStore;
