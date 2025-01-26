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
  wallChanges: CellEdge[];
  isConstructive: boolean;
}
