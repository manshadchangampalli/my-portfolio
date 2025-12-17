import { create } from "zustand";

interface CameraStore {
  truckCommand: { x: number; y: number; id: number } | null;
  zoomCommand: { distance: number; id: number } | null;
  _commandCounter: number;
  truck: (x: number, y: number) => void;
  zoom: (distance: number) => void;
}

export const useCameraStore = create<CameraStore>((set) => ({
  truckCommand: null,
  zoomCommand: null,
  _commandCounter: 0,
  truck: (x, y) =>
    set((state) => ({
      truckCommand: { x, y, id: state._commandCounter + 1 },
      _commandCounter: state._commandCounter + 1,
    })),
  zoom: (distance) =>
    set((state) => ({
      zoomCommand: { distance, id: state._commandCounter + 1 },
      _commandCounter: state._commandCounter + 1,
    })),
}));
