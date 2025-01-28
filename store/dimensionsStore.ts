import { create } from 'zustand';

interface DimensionsStore {
  height: number;
  width: number;
  cellSize: number;
  speed: number;
  setHeight: (value:number) => void;
  setWidth: (value:number) => void;
  setCellSize: (value: number) => void;
  setSpeed: (value: number) => void;
}

export const useDimensionsStore = create<DimensionsStore>((set) => ({
  height: 10,
  width: 10,
  cellSize: 16,
  speed: 100,
  setHeight: (value) => set({ height: value }),
  setWidth: (value) => set({ height: value }),
  setCellSize: (value) => set({ cellSize: value }),
  setSpeed: (value) => set({ speed: value }),
}));
