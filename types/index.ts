export interface Cell {
  x: number;
  y: number;
}

export interface CellEdge {
  cellA: Cell;
  cellB: Cell;
}

export interface MazeResult {
  maze: number[][];
  mazeSteps: CellEdge[];
  isConstructive: boolean;
}

export enum MazeAlgorithm {
  RECURSIVE_BACKTRACKING = 'Recursive Backtracking',
  PRIM = "Prim's Algorithm",
  KRUSKAL = "Kruskal's Algorithm",
  RECURSIVE_DIVISION = 'Recursive Division',
  BINARY_TREE = 'Binary Tree',
  SIDEWINDER = 'Sidewinder',
  GROWINGTREE = 'Growing Tree',
}

export enum GameLevel {
  EASY = 'Easy',
  NORMAL = 'Normal',
  NIGHTMARE = 'Nightmare',
}
