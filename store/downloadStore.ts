import { create } from 'zustand';

type GridState = {
  grid: number[][];
  // (Optional: If exporting as an image)
  gridRef: HTMLDivElement | null;
  setGridRef: (ref: HTMLDivElement) => void;
};

export const useGridStore = create<GridState>((set) => ({
  grid: [],
  gridRef: null,
  setGridRef: (gridRef) => set({ gridRef }),
}));
