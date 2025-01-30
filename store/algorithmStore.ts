// Importing zustand
import { MazeAlgorithm } from '@/types';
import { create } from 'zustand';

// Type for the store state and actions
interface AlgorithmStore {
  currentAlgorithm: MazeAlgorithm;
  algorithms: MazeAlgorithm[]; // Use an array of MazeAlgorithm
  setCurrentAlgorithm: (algorithm: MazeAlgorithm) => void;
}

// Creating a zustand store
export const useAlgorithmStore = create<AlgorithmStore>((set) => ({
  // Initial state: current algorithm and list of algorithms
  currentAlgorithm: MazeAlgorithm.RECURSIVE_BACKTRACKING,
  algorithms: Object.values(MazeAlgorithm), // Convert enum to array

  // Function to set the current algorithm
  setCurrentAlgorithm: (algorithm: MazeAlgorithm) =>
    set({ currentAlgorithm: algorithm }),
}));
