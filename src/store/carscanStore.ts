import { create } from "zustand";

interface CarscanStore {
  currentZoom: number;
  previousZoom: number;
  setCurrentZoom: (zoom: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
  setPreviousZoom: (zoom: number) => void;
}

export const useCarscanStore = create<CarscanStore>((set, get) => ({
  currentZoom: 0,
  previousZoom: 0,
  setCurrentZoom: (zoom: number) =>
    set((state) => ({
      previousZoom: state.currentZoom,
      currentZoom: zoom,
    })),
  zoomIn: () =>
    set((state) => ({
      previousZoom: state.currentZoom,
      currentZoom: state.currentZoom - 1,
    })),
  zoomOut: () =>
    set((state) => ({
      previousZoom: state.currentZoom,
      currentZoom: state.currentZoom + 1,
    })),
  setPreviousZoom: (zoom: number) =>
    set((state) => ({
      previousZoom: zoom,
    })),
}));
