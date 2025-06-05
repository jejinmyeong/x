import { create } from "zustand";

interface ViewportState {
  isModalView: boolean;
  setIsModalView: (value: boolean) => void;
}

export const useViewportStore = create<ViewportState>((set) => ({
  isModalView: true,
  setIsModalView: (value: boolean) => set({ isModalView: value })
}));