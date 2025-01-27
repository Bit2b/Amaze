"use client";

import { MazeResult } from "@/types";
import {create} from 'zustand';

interface ResultStore {
  mazeResult: MazeResult;
  setMazeResult: (result: MazeResult) => void;
}

export const useResultStore = create<ResultStore>((set) => ({
  mazeResult:{
    maze: [
      [9, 11], 
      [12, 6],
    ],
    mazeSteps: [], 
    isConstructive: true,
  },
  setMazeResult: (result) => set({ mazeResult: result }),
}));
