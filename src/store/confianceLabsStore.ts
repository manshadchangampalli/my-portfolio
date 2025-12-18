import { create } from "zustand";

export type ConfianceLabsTransform = {
  x: number;
  y: number;
  z: number;
  Tx: number;
  Ty: number;
  Tz: number;
};

const DEFAULT_TRANSFORM: ConfianceLabsTransform = { x: 0, y: 0, z: 0, Tx: 0, Ty: 0, Tz: 0 };

interface ConfianceLabsStore {
  currentTransform: ConfianceLabsTransform;
  previousTransform: ConfianceLabsTransform;
  setCurrentTransform: (transform: Partial<ConfianceLabsTransform>) => void;
  setPreviousTransform: (transform: ConfianceLabsTransform) => void;
  resetTransform: () => void;
}

export const useConfianceLabsStore = create<ConfianceLabsStore>((set) => ({
  currentTransform: DEFAULT_TRANSFORM,
  previousTransform: DEFAULT_TRANSFORM,
  setCurrentTransform: (transform) =>
    set((state) => ({
      previousTransform: state.currentTransform,
      currentTransform: { ...state.currentTransform, ...transform },
    })),
  setPreviousTransform: (transform) => set({ previousTransform: transform }),
  resetTransform: () =>
    set(() => ({
      currentTransform: DEFAULT_TRANSFORM,
      previousTransform: DEFAULT_TRANSFORM,
    })),
}));
