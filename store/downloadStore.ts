import { create } from 'zustand';

type DownloadGridState = {
  grid: number[][];
  // (Optional: If exporting as an image)
  gridRef: HTMLDivElement | null;
  setDownloadGridRef: (ref: HTMLDivElement) => void;
};

export const useDownloadGridStore = create<DownloadGridState>((set) => ({
  grid: [],
  gridRef: null,
  setDownloadGridRef: (gridRef) => set({ gridRef }),
}));
