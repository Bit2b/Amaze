"use client";

import {create} from 'zustand';

interface DimensionsStore {
  height: number;
  width: number;
  setHeight: (height: number) => void;
  setWidth: (width: number) => void;
}

export const useDimensionsStore = create<DimensionsStore>((set) => ({
  height: 10,
  width: 10,
  setHeight: (height) => set({ height }),
  setWidth: (width) => set({ width }),
}));
