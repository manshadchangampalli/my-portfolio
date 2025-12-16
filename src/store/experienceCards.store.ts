import { create } from "zustand";

interface ExperienceCardsStore {
  activeSlug: string | null;
  blend: number;
  setActiveSlug: (slug: string | null) => void;
  toggleActiveSlug: (slug: string) => void;
}

export const useExperienceCardsStore = create<ExperienceCardsStore>((set) => ({
  activeSlug: null,
  blend: 0,
  setActiveSlug: (slug) =>
    set({
      activeSlug: slug,
      blend: slug ? 1 : 0,
    }),
  toggleActiveSlug: (slug) =>
    set((state) => {
      if (state.activeSlug === slug) {
        return {
          activeSlug: null,
          blend: 0,
        };
      }
      return {
        activeSlug: slug,
        blend: 1,
      };
    }),
}));
