import { create } from "zustand";

interface CarscanStore {
  scrollValue: number;
  setScrollValue: (value: number) => void;
}

export const useCarscanStore = create<CarscanStore>((set) => ({
  scrollValue: 0,
  setScrollValue: (value: number) => set({ scrollValue: value }),
}));
