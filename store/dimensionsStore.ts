"use client";

import { create } from 'zustand';

interface DimensionsStore {
  height: number;
  width: number;
  increaseHeight: () => void;
  decreaseHeight: () => void;
  increaseWidth: () => void;
  decreaseWidth: () => void;
}

export const useDimensionsStore = create<DimensionsStore>((set) => ({
  height: 10,
  width: 10,
  increaseHeight: () => set((state) => ({ height: Math.min(50,state.height + 1)})),
  decreaseHeight: () => set((state) => ({ height: Math.max(1, state.height - 1)})),
  increaseWidth: () => set((state) => ({ width: Math.min(50,state.width + 1) })),
  decreaseWidth: () => set((state) => ({ width: Math.max(1, state.width - 1)})),
}));
