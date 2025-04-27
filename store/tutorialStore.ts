import { create } from 'zustand';

type TutorialState = {
  tutorialSeen: boolean;
  setTutorialSeen: (seen: boolean) => void;
};

export const useTutorialStore = create<TutorialState>((set) => ({
  tutorialSeen: false,
  setTutorialSeen: (seen) => set({ tutorialSeen: seen }),
}));
