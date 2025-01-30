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
    maze: [
      [13, 3, 13, 1, 3, 9, 5, 5, 5, 5, 1, 5, 3, 9, 5, 3, 9, 5, 5, 3],
      [11, 12, 5, 6, 10, 12, 1, 5, 5, 7, 10, 11, 10, 12, 3, 10, 14, 9, 3, 10],
      [8, 7, 9, 5, 6, 9, 6, 9, 5, 5, 6, 10, 12, 3, 10, 12, 5, 6, 12, 2],
      [10, 9, 6, 9, 3, 10, 9, 6, 13, 5, 3, 8, 5, 6, 12, 5, 5, 3, 13, 6],
      [10, 10, 9, 2, 14, 10, 10, 9, 5, 5, 6, 10, 9, 1, 5, 5, 3, 12, 5, 3],
      [10, 10, 14, 8, 5, 6, 10, 10, 9, 5, 5, 6, 14, 10, 13, 5, 4, 3, 9, 2],
      [10, 12, 3, 12, 7, 9, 6, 8, 6, 13, 1, 1, 3, 12, 5, 5, 3, 12, 6, 10],
      [8, 5, 6, 9, 5, 2, 13, 4, 5, 3, 14, 10, 12, 5, 3, 9, 6, 9, 5, 6],
      [12, 5, 3, 8, 3, 14, 9, 5, 3, 12, 3, 10, 9, 7, 10, 12, 3, 12, 5, 3],
      [9, 5, 6, 14, 12, 5, 4, 7, 10, 11, 10, 10, 12, 3, 12, 5, 6, 11, 9, 6],
      [12, 3, 13, 1, 5, 5, 5, 5, 6, 10, 10, 12, 3, 8, 5, 7, 9, 2, 10, 11],
      [13, 4, 5, 6, 13, 5, 5, 5, 5, 4, 4, 5, 6, 12, 5, 5, 6, 12, 4, 6],
    ],
    mazeSteps: [
      {
        cellA: {
          x: 0,
          y: 0,
        },
        cellB: {
          x: 0,
          y: 1,
        },
      },
      {
        cellA: {
          x: 0,
          y: 1,
        },
        cellB: {
          x: 1,
          y: 1,
        },
      },
      {
        cellA: {
          x: 1,
          y: 1,
        },
        cellB: {
          x: 1,
          y: 2,
        },
      },
      {
        cellA: {
          x: 1,
          y: 2,
        },
        cellB: {
          x: 1,
          y: 3,
        },
      },
      {
        cellA: {
          x: 1,
          y: 3,
        },
        cellB: {
          x: 0,
          y: 3,
        },
      },
      {
        cellA: {
          x: 0,
          y: 3,
        },
        cellB: {
          x: 0,
          y: 2,
        },
      },
      {
        cellA: {
          x: 0,
          y: 3,
        },
        cellB: {
          x: 0,
          y: 4,
        },
      },
      {
        cellA: {
          x: 0,
          y: 4,
        },
        cellB: {
          x: 1,
          y: 4,
        },
      },
      {
        cellA: {
          x: 1,
          y: 4,
        },
        cellB: {
          x: 2,
          y: 4,
        },
      },
      {
        cellA: {
          x: 2,
          y: 4,
        },
        cellB: {
          x: 2,
          y: 3,
        },
      },
      {
        cellA: {
          x: 2,
          y: 3,
        },
        cellB: {
          x: 2,
          y: 2,
        },
      },
      {
        cellA: {
          x: 2,
          y: 2,
        },
        cellB: {
          x: 3,
          y: 2,
        },
      },
      {
        cellA: {
          x: 3,
          y: 2,
        },
        cellB: {
          x: 3,
          y: 1,
        },
      },
      {
        cellA: {
          x: 3,
          y: 1,
        },
        cellB: {
          x: 4,
          y: 1,
        },
      },
      {
        cellA: {
          x: 4,
          y: 1,
        },
        cellB: {
          x: 5,
          y: 1,
        },
      },
      {
        cellA: {
          x: 5,
          y: 1,
        },
        cellB: {
          x: 6,
          y: 1,
        },
      },
      {
        cellA: {
          x: 6,
          y: 1,
        },
        cellB: {
          x: 6,
          y: 2,
        },
      },
      {
        cellA: {
          x: 6,
          y: 2,
        },
        cellB: {
          x: 7,
          y: 2,
        },
      },
      {
        cellA: {
          x: 7,
          y: 2,
        },
        cellB: {
          x: 7,
          y: 1,
        },
      },
      {
        cellA: {
          x: 7,
          y: 1,
        },
        cellB: {
          x: 7,
          y: 0,
        },
      },
      {
        cellA: {
          x: 7,
          y: 0,
        },
        cellB: {
          x: 6,
          y: 0,
        },
      },
      {
        cellA: {
          x: 6,
          y: 0,
        },
        cellB: {
          x: 5,
          y: 0,
        },
      },
      {
        cellA: {
          x: 5,
          y: 0,
        },
        cellB: {
          x: 4,
          y: 0,
        },
      },
      {
        cellA: {
          x: 4,
          y: 0,
        },
        cellB: {
          x: 3,
          y: 0,
        },
      },
      {
        cellA: {
          x: 3,
          y: 0,
        },
        cellB: {
          x: 2,
          y: 0,
        },
      },
      {
        cellA: {
          x: 2,
          y: 0,
        },
        cellB: {
          x: 2,
          y: 1,
        },
      },
      {
        cellA: {
          x: 2,
          y: 0,
        },
        cellB: {
          x: 1,
          y: 0,
        },
      },
      {
        cellA: {
          x: 7,
          y: 0,
        },
        cellB: {
          x: 8,
          y: 0,
        },
      },
      {
        cellA: {
          x: 8,
          y: 0,
        },
        cellB: {
          x: 8,
          y: 1,
        },
      },
      {
        cellA: {
          x: 8,
          y: 1,
        },
        cellB: {
          x: 8,
          y: 2,
        },
      },
      {
        cellA: {
          x: 8,
          y: 2,
        },
        cellB: {
          x: 9,
          y: 2,
        },
      },
      {
        cellA: {
          x: 9,
          y: 2,
        },
        cellB: {
          x: 9,
          y: 1,
        },
      },
      {
        cellA: {
          x: 9,
          y: 1,
        },
        cellB: {
          x: 9,
          y: 0,
        },
      },
      {
        cellA: {
          x: 9,
          y: 0,
        },
        cellB: {
          x: 10,
          y: 0,
        },
      },
      {
        cellA: {
          x: 10,
          y: 0,
        },
        cellB: {
          x: 10,
          y: 1,
        },
      },
      {
        cellA: {
          x: 10,
          y: 1,
        },
        cellB: {
          x: 11,
          y: 1,
        },
      },
      {
        cellA: {
          x: 11,
          y: 1,
        },
        cellB: {
          x: 11,
          y: 2,
        },
      },
      {
        cellA: {
          x: 11,
          y: 2,
        },
        cellB: {
          x: 11,
          y: 3,
        },
      },
      {
        cellA: {
          x: 11,
          y: 3,
        },
        cellB: {
          x: 10,
          y: 3,
        },
      },
      {
        cellA: {
          x: 10,
          y: 3,
        },
        cellB: {
          x: 10,
          y: 4,
        },
      },
      {
        cellA: {
          x: 10,
          y: 4,
        },
        cellB: {
          x: 10,
          y: 5,
        },
      },
      {
        cellA: {
          x: 10,
          y: 5,
        },
        cellB: {
          x: 10,
          y: 6,
        },
      },
      {
        cellA: {
          x: 10,
          y: 6,
        },
        cellB: {
          x: 10,
          y: 7,
        },
      },
      {
        cellA: {
          x: 10,
          y: 7,
        },
        cellB: {
          x: 10,
          y: 8,
        },
      },
      {
        cellA: {
          x: 10,
          y: 8,
        },
        cellB: {
          x: 9,
          y: 8,
        },
      },
      {
        cellA: {
          x: 9,
          y: 8,
        },
        cellB: {
          x: 8,
          y: 8,
        },
      },
      {
        cellA: {
          x: 8,
          y: 8,
        },
        cellB: {
          x: 8,
          y: 7,
        },
      },
      {
        cellA: {
          x: 8,
          y: 7,
        },
        cellB: {
          x: 8,
          y: 6,
        },
      },
      {
        cellA: {
          x: 8,
          y: 6,
        },
        cellB: {
          x: 9,
          y: 6,
        },
      },
      {
        cellA: {
          x: 9,
          y: 6,
        },
        cellB: {
          x: 9,
          y: 7,
        },
      },
      {
        cellA: {
          x: 9,
          y: 6,
        },
        cellB: {
          x: 9,
          y: 5,
        },
      },
      {
        cellA: {
          x: 9,
          y: 5,
        },
        cellB: {
          x: 9,
          y: 4,
        },
      },
      {
        cellA: {
          x: 9,
          y: 4,
        },
        cellB: {
          x: 8,
          y: 4,
        },
      },
      {
        cellA: {
          x: 8,
          y: 4,
        },
        cellB: {
          x: 8,
          y: 3,
        },
      },
      {
        cellA: {
          x: 8,
          y: 3,
        },
        cellB: {
          x: 7,
          y: 3,
        },
      },
      {
        cellA: {
          x: 7,
          y: 3,
        },
        cellB: {
          x: 7,
          y: 4,
        },
      },
      {
        cellA: {
          x: 7,
          y: 4,
        },
        cellB: {
          x: 7,
          y: 5,
        },
      },
      {
        cellA: {
          x: 7,
          y: 5,
        },
        cellB: {
          x: 8,
          y: 5,
        },
      },
      {
        cellA: {
          x: 7,
          y: 5,
        },
        cellB: {
          x: 6,
          y: 5,
        },
      },
      {
        cellA: {
          x: 6,
          y: 5,
        },
        cellB: {
          x: 6,
          y: 6,
        },
      },
      {
        cellA: {
          x: 6,
          y: 6,
        },
        cellB: {
          x: 5,
          y: 6,
        },
      },
      {
        cellA: {
          x: 5,
          y: 6,
        },
        cellB: {
          x: 4,
          y: 6,
        },
      },
      {
        cellA: {
          x: 4,
          y: 6,
        },
        cellB: {
          x: 3,
          y: 6,
        },
      },
      {
        cellA: {
          x: 3,
          y: 6,
        },
        cellB: {
          x: 3,
          y: 7,
        },
      },
      {
        cellA: {
          x: 3,
          y: 7,
        },
        cellB: {
          x: 2,
          y: 7,
        },
      },
      {
        cellA: {
          x: 2,
          y: 7,
        },
        cellB: {
          x: 2,
          y: 8,
        },
      },
      {
        cellA: {
          x: 2,
          y: 8,
        },
        cellB: {
          x: 2,
          y: 9,
        },
      },
      {
        cellA: {
          x: 2,
          y: 9,
        },
        cellB: {
          x: 2,
          y: 10,
        },
      },
      {
        cellA: {
          x: 2,
          y: 10,
        },
        cellB: {
          x: 1,
          y: 10,
        },
      },
      {
        cellA: {
          x: 1,
          y: 10,
        },
        cellB: {
          x: 0,
          y: 10,
        },
      },
      {
        cellA: {
          x: 0,
          y: 10,
        },
        cellB: {
          x: 0,
          y: 9,
        },
      },
      {
        cellA: {
          x: 0,
          y: 9,
        },
        cellB: {
          x: 0,
          y: 8,
        },
      },
      {
        cellA: {
          x: 0,
          y: 8,
        },
        cellB: {
          x: 0,
          y: 7,
        },
      },
      {
        cellA: {
          x: 0,
          y: 7,
        },
        cellB: {
          x: 0,
          y: 6,
        },
      },
      {
        cellA: {
          x: 0,
          y: 6,
        },
        cellB: {
          x: 0,
          y: 5,
        },
      },
      {
        cellA: {
          x: 0,
          y: 5,
        },
        cellB: {
          x: 1,
          y: 5,
        },
      },
      {
        cellA: {
          x: 1,
          y: 5,
        },
        cellB: {
          x: 1,
          y: 6,
        },
      },
      {
        cellA: {
          x: 1,
          y: 6,
        },
        cellB: {
          x: 1,
          y: 7,
        },
      },
      {
        cellA: {
          x: 1,
          y: 7,
        },
        cellB: {
          x: 1,
          y: 8,
        },
      },
      {
        cellA: {
          x: 1,
          y: 8,
        },
        cellB: {
          x: 1,
          y: 9,
        },
      },
      {
        cellA: {
          x: 1,
          y: 6,
        },
        cellB: {
          x: 2,
          y: 6,
        },
      },
      {
        cellA: {
          x: 2,
          y: 6,
        },
        cellB: {
          x: 2,
          y: 5,
        },
      },
      {
        cellA: {
          x: 2,
          y: 5,
        },
        cellB: {
          x: 3,
          y: 5,
        },
      },
      {
        cellA: {
          x: 3,
          y: 5,
        },
        cellB: {
          x: 4,
          y: 5,
        },
      },
      {
        cellA: {
          x: 4,
          y: 5,
        },
        cellB: {
          x: 5,
          y: 5,
        },
      },
      {
        cellA: {
          x: 5,
          y: 5,
        },
        cellB: {
          x: 5,
          y: 4,
        },
      },
      {
        cellA: {
          x: 5,
          y: 4,
        },
        cellB: {
          x: 5,
          y: 3,
        },
      },
      {
        cellA: {
          x: 5,
          y: 3,
        },
        cellB: {
          x: 4,
          y: 3,
        },
      },
      {
        cellA: {
          x: 4,
          y: 3,
        },
        cellB: {
          x: 4,
          y: 2,
        },
      },
      {
        cellA: {
          x: 4,
          y: 2,
        },
        cellB: {
          x: 5,
          y: 2,
        },
      },
      {
        cellA: {
          x: 4,
          y: 3,
        },
        cellB: {
          x: 3,
          y: 3,
        },
      },
      {
        cellA: {
          x: 3,
          y: 3,
        },
        cellB: {
          x: 3,
          y: 4,
        },
      },
      {
        cellA: {
          x: 3,
          y: 4,
        },
        cellB: {
          x: 4,
          y: 4,
        },
      },
      {
        cellA: {
          x: 5,
          y: 3,
        },
        cellB: {
          x: 6,
          y: 3,
        },
      },
      {
        cellA: {
          x: 6,
          y: 3,
        },
        cellB: {
          x: 6,
          y: 4,
        },
      },
      {
        cellA: {
          x: 0,
          y: 10,
        },
        cellB: {
          x: 0,
          y: 11,
        },
      },
      {
        cellA: {
          x: 0,
          y: 11,
        },
        cellB: {
          x: 0,
          y: 12,
        },
      },
      {
        cellA: {
          x: 0,
          y: 12,
        },
        cellB: {
          x: 1,
          y: 12,
        },
      },
      {
        cellA: {
          x: 1,
          y: 12,
        },
        cellB: {
          x: 2,
          y: 12,
        },
      },
      {
        cellA: {
          x: 2,
          y: 12,
        },
        cellB: {
          x: 2,
          y: 13,
        },
      },
      {
        cellA: {
          x: 2,
          y: 13,
        },
        cellB: {
          x: 3,
          y: 13,
        },
      },
      {
        cellA: {
          x: 3,
          y: 13,
        },
        cellB: {
          x: 3,
          y: 12,
        },
      },
      {
        cellA: {
          x: 3,
          y: 12,
        },
        cellB: {
          x: 3,
          y: 11,
        },
      },
      {
        cellA: {
          x: 3,
          y: 11,
        },
        cellB: {
          x: 4,
          y: 11,
        },
      },
      {
        cellA: {
          x: 4,
          y: 11,
        },
        cellB: {
          x: 5,
          y: 11,
        },
      },
      {
        cellA: {
          x: 5,
          y: 11,
        },
        cellB: {
          x: 5,
          y: 10,
        },
      },
      {
        cellA: {
          x: 5,
          y: 10,
        },
        cellB: {
          x: 5,
          y: 9,
        },
      },
      {
        cellA: {
          x: 5,
          y: 9,
        },
        cellB: {
          x: 5,
          y: 8,
        },
      },
      {
        cellA: {
          x: 5,
          y: 8,
        },
        cellB: {
          x: 6,
          y: 8,
        },
      },
      {
        cellA: {
          x: 6,
          y: 8,
        },
        cellB: {
          x: 6,
          y: 7,
        },
      },
      {
        cellA: {
          x: 6,
          y: 7,
        },
        cellB: {
          x: 7,
          y: 7,
        },
      },
      {
        cellA: {
          x: 7,
          y: 7,
        },
        cellB: {
          x: 7,
          y: 8,
        },
      },
      {
        cellA: {
          x: 7,
          y: 8,
        },
        cellB: {
          x: 7,
          y: 9,
        },
      },
      {
        cellA: {
          x: 7,
          y: 9,
        },
        cellB: {
          x: 8,
          y: 9,
        },
      },
      {
        cellA: {
          x: 8,
          y: 9,
        },
        cellB: {
          x: 8,
          y: 10,
        },
      },
      {
        cellA: {
          x: 8,
          y: 10,
        },
        cellB: {
          x: 9,
          y: 10,
        },
      },
      {
        cellA: {
          x: 9,
          y: 10,
        },
        cellB: {
          x: 10,
          y: 10,
        },
      },
      {
        cellA: {
          x: 10,
          y: 10,
        },
        cellB: {
          x: 11,
          y: 10,
        },
      },
      {
        cellA: {
          x: 11,
          y: 10,
        },
        cellB: {
          x: 11,
          y: 9,
        },
      },
      {
        cellA: {
          x: 11,
          y: 9,
        },
        cellB: {
          x: 11,
          y: 8,
        },
      },
      {
        cellA: {
          x: 11,
          y: 8,
        },
        cellB: {
          x: 11,
          y: 7,
        },
      },
      {
        cellA: {
          x: 11,
          y: 7,
        },
        cellB: {
          x: 11,
          y: 6,
        },
      },
      {
        cellA: {
          x: 11,
          y: 6,
        },
        cellB: {
          x: 11,
          y: 5,
        },
      },
      {
        cellA: {
          x: 11,
          y: 5,
        },
        cellB: {
          x: 11,
          y: 4,
        },
      },
      {
        cellA: {
          x: 11,
          y: 9,
        },
        cellB: {
          x: 10,
          y: 9,
        },
      },
      {
        cellA: {
          x: 10,
          y: 9,
        },
        cellB: {
          x: 9,
          y: 9,
        },
      },
      {
        cellA: {
          x: 11,
          y: 10,
        },
        cellB: {
          x: 11,
          y: 11,
        },
      },
      {
        cellA: {
          x: 11,
          y: 11,
        },
        cellB: {
          x: 11,
          y: 12,
        },
      },
      {
        cellA: {
          x: 11,
          y: 12,
        },
        cellB: {
          x: 10,
          y: 12,
        },
      },
      {
        cellA: {
          x: 10,
          y: 12,
        },
        cellB: {
          x: 10,
          y: 11,
        },
      },
      {
        cellA: {
          x: 10,
          y: 11,
        },
        cellB: {
          x: 9,
          y: 11,
        },
      },
      {
        cellA: {
          x: 9,
          y: 11,
        },
        cellB: {
          x: 8,
          y: 11,
        },
      },
      {
        cellA: {
          x: 8,
          y: 11,
        },
        cellB: {
          x: 7,
          y: 11,
        },
      },
      {
        cellA: {
          x: 7,
          y: 11,
        },
        cellB: {
          x: 6,
          y: 11,
        },
      },
      {
        cellA: {
          x: 6,
          y: 11,
        },
        cellB: {
          x: 6,
          y: 12,
        },
      },
      {
        cellA: {
          x: 6,
          y: 12,
        },
        cellB: {
          x: 7,
          y: 12,
        },
      },
      {
        cellA: {
          x: 7,
          y: 12,
        },
        cellB: {
          x: 7,
          y: 13,
        },
      },
      {
        cellA: {
          x: 7,
          y: 13,
        },
        cellB: {
          x: 7,
          y: 14,
        },
      },
      {
        cellA: {
          x: 7,
          y: 14,
        },
        cellB: {
          x: 8,
          y: 14,
        },
      },
      {
        cellA: {
          x: 8,
          y: 14,
        },
        cellB: {
          x: 9,
          y: 14,
        },
      },
      {
        cellA: {
          x: 9,
          y: 14,
        },
        cellB: {
          x: 9,
          y: 15,
        },
      },
      {
        cellA: {
          x: 9,
          y: 15,
        },
        cellB: {
          x: 9,
          y: 16,
        },
      },
      {
        cellA: {
          x: 9,
          y: 16,
        },
        cellB: {
          x: 8,
          y: 16,
        },
      },
      {
        cellA: {
          x: 8,
          y: 16,
        },
        cellB: {
          x: 8,
          y: 15,
        },
      },
      {
        cellA: {
          x: 8,
          y: 15,
        },
        cellB: {
          x: 7,
          y: 15,
        },
      },
      {
        cellA: {
          x: 7,
          y: 15,
        },
        cellB: {
          x: 7,
          y: 16,
        },
      },
      {
        cellA: {
          x: 7,
          y: 16,
        },
        cellB: {
          x: 6,
          y: 16,
        },
      },
      {
        cellA: {
          x: 6,
          y: 16,
        },
        cellB: {
          x: 6,
          y: 15,
        },
      },
      {
        cellA: {
          x: 6,
          y: 15,
        },
        cellB: {
          x: 6,
          y: 14,
        },
      },
      {
        cellA: {
          x: 6,
          y: 14,
        },
        cellB: {
          x: 6,
          y: 13,
        },
      },
      {
        cellA: {
          x: 6,
          y: 13,
        },
        cellB: {
          x: 5,
          y: 13,
        },
      },
      {
        cellA: {
          x: 5,
          y: 13,
        },
        cellB: {
          x: 4,
          y: 13,
        },
      },
      {
        cellA: {
          x: 4,
          y: 13,
        },
        cellB: {
          x: 4,
          y: 12,
        },
      },
      {
        cellA: {
          x: 4,
          y: 12,
        },
        cellB: {
          x: 5,
          y: 12,
        },
      },
      {
        cellA: {
          x: 4,
          y: 13,
        },
        cellB: {
          x: 4,
          y: 14,
        },
      },
      {
        cellA: {
          x: 4,
          y: 14,
        },
        cellB: {
          x: 4,
          y: 15,
        },
      },
      {
        cellA: {
          x: 4,
          y: 15,
        },
        cellB: {
          x: 4,
          y: 16,
        },
      },
      {
        cellA: {
          x: 4,
          y: 16,
        },
        cellB: {
          x: 5,
          y: 16,
        },
      },
      {
        cellA: {
          x: 5,
          y: 16,
        },
        cellB: {
          x: 5,
          y: 15,
        },
      },
      {
        cellA: {
          x: 5,
          y: 15,
        },
        cellB: {
          x: 5,
          y: 14,
        },
      },
      {
        cellA: {
          x: 5,
          y: 16,
        },
        cellB: {
          x: 5,
          y: 17,
        },
      },
      {
        cellA: {
          x: 5,
          y: 17,
        },
        cellB: {
          x: 6,
          y: 17,
        },
      },
      {
        cellA: {
          x: 6,
          y: 17,
        },
        cellB: {
          x: 6,
          y: 18,
        },
      },
      {
        cellA: {
          x: 6,
          y: 18,
        },
        cellB: {
          x: 5,
          y: 18,
        },
      },
      {
        cellA: {
          x: 5,
          y: 18,
        },
        cellB: {
          x: 5,
          y: 19,
        },
      },
      {
        cellA: {
          x: 5,
          y: 19,
        },
        cellB: {
          x: 6,
          y: 19,
        },
      },
      {
        cellA: {
          x: 6,
          y: 19,
        },
        cellB: {
          x: 7,
          y: 19,
        },
      },
      {
        cellA: {
          x: 7,
          y: 19,
        },
        cellB: {
          x: 7,
          y: 18,
        },
      },
      {
        cellA: {
          x: 7,
          y: 18,
        },
        cellB: {
          x: 7,
          y: 17,
        },
      },
      {
        cellA: {
          x: 7,
          y: 17,
        },
        cellB: {
          x: 8,
          y: 17,
        },
      },
      {
        cellA: {
          x: 8,
          y: 17,
        },
        cellB: {
          x: 8,
          y: 18,
        },
      },
      {
        cellA: {
          x: 8,
          y: 18,
        },
        cellB: {
          x: 8,
          y: 19,
        },
      },
      {
        cellA: {
          x: 8,
          y: 19,
        },
        cellB: {
          x: 9,
          y: 19,
        },
      },
      {
        cellA: {
          x: 9,
          y: 19,
        },
        cellB: {
          x: 9,
          y: 18,
        },
      },
      {
        cellA: {
          x: 9,
          y: 18,
        },
        cellB: {
          x: 10,
          y: 18,
        },
      },
      {
        cellA: {
          x: 10,
          y: 18,
        },
        cellB: {
          x: 11,
          y: 18,
        },
      },
      {
        cellA: {
          x: 11,
          y: 18,
        },
        cellB: {
          x: 11,
          y: 19,
        },
      },
      {
        cellA: {
          x: 11,
          y: 19,
        },
        cellB: {
          x: 10,
          y: 19,
        },
      },
      {
        cellA: {
          x: 11,
          y: 18,
        },
        cellB: {
          x: 11,
          y: 17,
        },
      },
      {
        cellA: {
          x: 11,
          y: 17,
        },
        cellB: {
          x: 10,
          y: 17,
        },
      },
      {
        cellA: {
          x: 10,
          y: 17,
        },
        cellB: {
          x: 9,
          y: 17,
        },
      },
      {
        cellA: {
          x: 10,
          y: 17,
        },
        cellB: {
          x: 10,
          y: 16,
        },
      },
      {
        cellA: {
          x: 10,
          y: 16,
        },
        cellB: {
          x: 11,
          y: 16,
        },
      },
      {
        cellA: {
          x: 11,
          y: 16,
        },
        cellB: {
          x: 11,
          y: 15,
        },
      },
      {
        cellA: {
          x: 11,
          y: 15,
        },
        cellB: {
          x: 11,
          y: 14,
        },
      },
      {
        cellA: {
          x: 11,
          y: 14,
        },
        cellB: {
          x: 11,
          y: 13,
        },
      },
      {
        cellA: {
          x: 11,
          y: 13,
        },
        cellB: {
          x: 10,
          y: 13,
        },
      },
      {
        cellA: {
          x: 10,
          y: 13,
        },
        cellB: {
          x: 10,
          y: 14,
        },
      },
      {
        cellA: {
          x: 10,
          y: 14,
        },
        cellB: {
          x: 10,
          y: 15,
        },
      },
      {
        cellA: {
          x: 10,
          y: 13,
        },
        cellB: {
          x: 9,
          y: 13,
        },
      },
      {
        cellA: {
          x: 9,
          y: 13,
        },
        cellB: {
          x: 9,
          y: 12,
        },
      },
      {
        cellA: {
          x: 9,
          y: 12,
        },
        cellB: {
          x: 8,
          y: 12,
        },
      },
      {
        cellA: {
          x: 8,
          y: 12,
        },
        cellB: {
          x: 8,
          y: 13,
        },
      },
      {
        cellA: {
          x: 5,
          y: 19,
        },
        cellB: {
          x: 4,
          y: 19,
        },
      },
      {
        cellA: {
          x: 4,
          y: 19,
        },
        cellB: {
          x: 4,
          y: 18,
        },
      },
      {
        cellA: {
          x: 4,
          y: 18,
        },
        cellB: {
          x: 4,
          y: 17,
        },
      },
      {
        cellA: {
          x: 4,
          y: 17,
        },
        cellB: {
          x: 3,
          y: 17,
        },
      },
      {
        cellA: {
          x: 3,
          y: 17,
        },
        cellB: {
          x: 3,
          y: 16,
        },
      },
      {
        cellA: {
          x: 3,
          y: 16,
        },
        cellB: {
          x: 3,
          y: 15,
        },
      },
      {
        cellA: {
          x: 3,
          y: 15,
        },
        cellB: {
          x: 3,
          y: 14,
        },
      },
      {
        cellA: {
          x: 3,
          y: 14,
        },
        cellB: {
          x: 2,
          y: 14,
        },
      },
      {
        cellA: {
          x: 2,
          y: 14,
        },
        cellB: {
          x: 1,
          y: 14,
        },
      },
      {
        cellA: {
          x: 1,
          y: 14,
        },
        cellB: {
          x: 1,
          y: 13,
        },
      },
      {
        cellA: {
          x: 1,
          y: 13,
        },
        cellB: {
          x: 0,
          y: 13,
        },
      },
      {
        cellA: {
          x: 0,
          y: 13,
        },
        cellB: {
          x: 0,
          y: 14,
        },
      },
      {
        cellA: {
          x: 0,
          y: 14,
        },
        cellB: {
          x: 0,
          y: 15,
        },
      },
      {
        cellA: {
          x: 0,
          y: 15,
        },
        cellB: {
          x: 1,
          y: 15,
        },
      },
      {
        cellA: {
          x: 1,
          y: 15,
        },
        cellB: {
          x: 2,
          y: 15,
        },
      },
      {
        cellA: {
          x: 2,
          y: 15,
        },
        cellB: {
          x: 2,
          y: 16,
        },
      },
      {
        cellA: {
          x: 2,
          y: 16,
        },
        cellB: {
          x: 2,
          y: 17,
        },
      },
      {
        cellA: {
          x: 2,
          y: 17,
        },
        cellB: {
          x: 1,
          y: 17,
        },
      },
      {
        cellA: {
          x: 1,
          y: 17,
        },
        cellB: {
          x: 1,
          y: 18,
        },
      },
      {
        cellA: {
          x: 1,
          y: 18,
        },
        cellB: {
          x: 2,
          y: 18,
        },
      },
      {
        cellA: {
          x: 2,
          y: 18,
        },
        cellB: {
          x: 2,
          y: 19,
        },
      },
      {
        cellA: {
          x: 2,
          y: 19,
        },
        cellB: {
          x: 3,
          y: 19,
        },
      },
      {
        cellA: {
          x: 3,
          y: 19,
        },
        cellB: {
          x: 3,
          y: 18,
        },
      },
      {
        cellA: {
          x: 2,
          y: 19,
        },
        cellB: {
          x: 1,
          y: 19,
        },
      },
      {
        cellA: {
          x: 1,
          y: 19,
        },
        cellB: {
          x: 0,
          y: 19,
        },
      },
      {
        cellA: {
          x: 0,
          y: 19,
        },
        cellB: {
          x: 0,
          y: 18,
        },
      },
      {
        cellA: {
          x: 0,
          y: 18,
        },
        cellB: {
          x: 0,
          y: 17,
        },
      },
      {
        cellA: {
          x: 0,
          y: 17,
        },
        cellB: {
          x: 0,
          y: 16,
        },
      },
      {
        cellA: {
          x: 0,
          y: 16,
        },
        cellB: {
          x: 1,
          y: 16,
        },
      },
      {
        cellA: {
          x: 6,
          y: 11,
        },
        cellB: {
          x: 6,
          y: 10,
        },
      },
      {
        cellA: {
          x: 6,
          y: 10,
        },
        cellB: {
          x: 6,
          y: 9,
        },
      },
      {
        cellA: {
          x: 6,
          y: 10,
        },
        cellB: {
          x: 7,
          y: 10,
        },
      },
      {
        cellA: {
          x: 7,
          y: 7,
        },
        cellB: {
          x: 7,
          y: 6,
        },
      },
      {
        cellA: {
          x: 6,
          y: 7,
        },
        cellB: {
          x: 5,
          y: 7,
        },
      },
      {
        cellA: {
          x: 5,
          y: 7,
        },
        cellB: {
          x: 4,
          y: 7,
        },
      },
      {
        cellA: {
          x: 4,
          y: 7,
        },
        cellB: {
          x: 4,
          y: 8,
        },
      },
      {
        cellA: {
          x: 4,
          y: 8,
        },
        cellB: {
          x: 4,
          y: 9,
        },
      },
      {
        cellA: {
          x: 4,
          y: 9,
        },
        cellB: {
          x: 4,
          y: 10,
        },
      },
      {
        cellA: {
          x: 4,
          y: 10,
        },
        cellB: {
          x: 3,
          y: 10,
        },
      },
      {
        cellA: {
          x: 3,
          y: 10,
        },
        cellB: {
          x: 3,
          y: 9,
        },
      },
      {
        cellA: {
          x: 3,
          y: 9,
        },
        cellB: {
          x: 3,
          y: 8,
        },
      },
      {
        cellA: {
          x: 3,
          y: 11,
        },
        cellB: {
          x: 2,
          y: 11,
        },
      },
      {
        cellA: {
          x: 2,
          y: 11,
        },
        cellB: {
          x: 1,
          y: 11,
        },
      },
      {
        cellA: {
          x: 8,
          y: 3,
        },
        cellB: {
          x: 9,
          y: 3,
        },
      },
      {
        cellA: {
          x: 10,
          y: 3,
        },
        cellB: {
          x: 10,
          y: 2,
        },
      },
      {
        cellA: {
          x: 11,
          y: 1,
        },
        cellB: {
          x: 11,
          y: 0,
        },
      },
    ],
  },
}));
