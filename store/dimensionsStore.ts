import { create } from 'zustand';

interface DimensionsStore {
  height: number;
  width: number;
  cellSize: number;
  speed: number;
  setHeight: (value: number) => void;
  setWidth: (value: number) => void;
  setCellSize: (value: number) => void;
  setSpeed: (value: number) => void;
}

// Helper function to load from localStorage with validation
const loadInitialValue = <T>(
  key: string,
  defaultValue: T,
  validator: (value: T) => boolean
): T => {
  if (typeof window === 'undefined') return defaultValue;
  const saved = localStorage.getItem(key);
  if (!saved) return defaultValue;
  try {
    const parsed = JSON.parse(saved) as T;
    return validator(parsed) ? parsed : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const useDimensionsStore = create<DimensionsStore>((set) => ({
  height: loadInitialValue('height', 12, (v) => Number.isInteger(v) && v > 0),
  width: loadInitialValue('width', 20, (v) => Number.isInteger(v) && v > 0),
  cellSize: loadInitialValue('cellSize', 48, (v) =>
    [16, 32, 48, 64, 80, 96].includes(v)
  ),
  speed: loadInitialValue('speed', 100, (v) => v >= 25 && v <= 500),

  setHeight: (value) => {
    if (Number.isInteger(value) && value > 0) {
      localStorage.setItem('height', JSON.stringify(value));
      set({ height: value });
    }
  },
  setWidth: (value) => {
    if (Number.isInteger(value) && value > 0) {
      localStorage.setItem('width', JSON.stringify(value));
      set({ width: value }); // Fixed typo from original code (was setting height)
    }
  },
  setCellSize: (value) => {
    if ([16, 32, 48, 64, 80, 96].includes(value)) {
      localStorage.setItem('cellSize', JSON.stringify(value));
      set({ cellSize: value });
    }
  },
  setSpeed: (value) => {
    if (value >= 25 && value <= 500) {
      localStorage.setItem('speed', JSON.stringify(value));
      set({ speed: value });
    }
  },
}));
