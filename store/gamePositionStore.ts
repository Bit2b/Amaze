import { Cell } from '@/types';
import { create } from 'zustand';

interface gamePositionStoreProps {
  currentPosition: Cell;
  source: Cell;
  destination: Cell;
  setCurrentPosition: (position: Cell) => void;
  setSourceAndDestination: (source: Cell, destination: Cell) => void;
}

export const usePositionStore = create<gamePositionStoreProps>((set) => ({
  currentPosition: { x: 0, y: 0 },
  source: { x: 0, y: 0 },
  destination: { x: 0, y: 0 },
  setCurrentPosition: (position) => {
    set({ currentPosition: position });
  },
  setSourceAndDestination: (source, destination) => {
    set({ source, destination });
  },
}));
