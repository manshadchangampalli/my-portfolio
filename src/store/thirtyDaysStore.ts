import { create } from "zustand";

interface ThirtyDaysStore {
  currentDate: number;
  setCurrentDate: (date: number) => void;
}

export const useThirtyDaysStore = create<ThirtyDaysStore>((set) => ({
  currentDate: 1,
  setCurrentDate: (date: number) => set({ currentDate: date }),
}));
