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
  RECURSIVE_BACKTRACKING = "Recursive Backtracking",
  PRIM = "Prim's Algorithm",
  KRUSKAL = "Kruskal's Algorithm",
  RECURSIVE_DIVISION = 'Recursive Division',
  RANDOM = 'Random',
}
