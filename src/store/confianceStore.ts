import { create } from "zustand";

export type ConfianceCameraTypes = "frame" | "tv" | "kiosk" | "kds";

interface ConfianceStore {
  currentCamera: ConfianceCameraTypes;
  setCurrentCamera: (camera: ConfianceCameraTypes) => void;
}

const useConfianceStore = create<ConfianceStore>((set) => ({
  currentCamera: "frame" as ConfianceCameraTypes,
  setCurrentCamera: (camera: ConfianceCameraTypes) => set({ currentCamera: camera }),
}));

export default useConfianceStore;
