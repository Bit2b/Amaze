import { GameLevel } from '@/types';
import { create } from 'zustand';

// Type for the store state and actions
interface GameLevelStore {
  currentGameLevel: GameLevel;
  gameLevels: GameLevel[];
  setCurrentGameLevel: (gameLevel: GameLevel) => void;
}

// Creating a Zustand store
export const useGameLevelStore = create<GameLevelStore>((set) => ({
  currentGameLevel: GameLevel.EASY,
  gameLevels: [GameLevel.EASY, GameLevel.NORMAL, GameLevel.NIGHTMARE],
  setCurrentGameLevel: (gameLevel: GameLevel) =>
    set(() => ({ currentGameLevel: gameLevel })),
}));
