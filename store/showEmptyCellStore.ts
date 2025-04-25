import { create } from 'zustand';

interface ShowEmptyCellStoreProps {
  showEmptyCell: boolean;
  toggleShowEmptyCell: () => void;
}

export const useShowEmptyCellStore = create<ShowEmptyCellStoreProps>((set) => ({
  showEmptyCell: true,
  toggleShowEmptyCell: () =>
    set((state) => ({ showEmptyCell: !state.showEmptyCell })),
}));
