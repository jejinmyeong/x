import { create } from "zustand";

interface ViewportState {
  isInit: boolean;
  isModalView: boolean;
  setIsModalView: (value: boolean) => void;
  setIsInit: (value: boolean) => void;
}

export const useViewportStore = create<ViewportState>((set) => ({
  isInit: false,
  isModalView: true,
  setIsInit: (value: boolean) => set({ isInit: value}),
  setIsModalView: (value: boolean) => set({ isModalView: value })
}));