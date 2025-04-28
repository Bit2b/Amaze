import { create } from 'zustand';
import { GameLevel } from '@/types';

// Define the game status types
type GameStatus = 'Playing' | 'Won' | 'Ready';

// Define the game store interface
interface GameStoreProps {
  pathTaken: number;
  gameTime: number;
  gameTries: number;
  gameStatus: GameStatus;
  setPathTaken: (path: number) => void;
  setGameTime: (time: number) => void;
  setGameTries: (tries: number) => void;
  setGameStatus: (status: GameStatus) => void;
  resetGame: () => void;
}

// Create the Zustand store
export const useGameStore = create<GameStoreProps>((set) => ({
  pathTaken: 0,
  gameTime: 0,
  gameTries: 1,
  gameLevel: GameLevel.EASY,
  allGameLevels: Object.values(GameLevel) as GameLevel[],
  gameStatus: 'Ready',

  setPathTaken: (path) => set({ pathTaken: path }),
  setGameTime: (time) => set({ gameTime: time }),
  setGameTries: (tries) => set({ gameTries: tries }),
  setGameStatus: (status) => set({ gameStatus: status }),

  resetGame: () =>
    set({
      pathTaken: 0,
      gameTime: 0,
      gameTries: 1,
      gameStatus: 'Ready',
    }),
}));
