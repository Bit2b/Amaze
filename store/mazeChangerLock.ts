import { create } from 'zustand';

interface mazeChangerLockProps {
  isLocked: boolean;
  toggleisLocked: () => void;
}

export const useMazeChangerLock = create<mazeChangerLockProps>((set) => ({
  isLocked: false,
  toggleisLocked: () => set((state) => ({ isLocked: !state.isLocked })),
}));
