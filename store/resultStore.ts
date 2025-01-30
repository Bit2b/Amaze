'use client';

import { create } from 'zustand';
import { MazeResult } from '@/types';

interface ResultStore {
  mazeResult: MazeResult;
  setMazeResult: (result: MazeResult) => void;
}

export const useResultStore = create<ResultStore>((set) => ({
  setMazeResult: (result) => set({ mazeResult: result }),
  mazeResult: {
    isConstructive: false,
    maze: [],
    mazeSteps: [],
  },
}));
