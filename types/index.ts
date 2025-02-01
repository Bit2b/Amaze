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
  RANDOM = 'Random',
}

export enum GameLevel {
  EASY = 1,
  NORMAL = 2,
  NIGHTMARE = 3,
}
