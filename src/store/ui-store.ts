import { create } from "zustand";

export const useUIStore = create((set) => ({
  cursor: "default",
  setCursor: (cursor: string) => set({ cursor }),
}));
