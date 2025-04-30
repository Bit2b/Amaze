import { create } from 'zustand';

interface ShowHideStoreProps {
  showEmptyCell: boolean;
  showVisitedCell: boolean;
  toggleShowEmptyCell: () => void;
  toggleShowVisitedCell: () => void;
}

export const useShowHideStore = create<ShowHideStoreProps>((set) => ({
  showEmptyCell: true,
  showVisitedCell: true,
  toggleShowEmptyCell: () =>
    set((state) => ({ showEmptyCell: !state.showEmptyCell })),
  toggleShowVisitedCell: () =>
    set((state) => ({ showVisitedCell: !state.showVisitedCell })),
}));
