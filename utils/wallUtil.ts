import { Cell, CellEdge } from '@/types';

/*
  |cellA|cellB|
  or 
  cellA
  _______
  cellB
*/

export function removeEdge(maze: number[][], edge: CellEdge): void {
  let { cellA, cellB } = edge;

  if (cellA.x < cellB.x || cellA.y < cellB.y) [cellA, cellB] = [cellB, cellA];

  if (cellA.x === cellB.x) {
    maze[cellB.x][cellB.y] &= 13; // Remove right wall
    maze[cellA.x][cellA.y] &= 7; // Remove left wall
  } else {
    maze[cellA.x][cellA.y] &= 14; // Remove top wall
    maze[cellB.x][cellB.y] &= 11; // Remove bottom wall
  }
}

export function addEdge(maze: number[][], edge: CellEdge): void {
  let { cellA, cellB } = edge;

  if (cellA.x < cellB.x || cellA.y < cellB.y) [cellA, cellB] = [cellB, cellA];

  if (cellA.x === cellB.x) {
    maze[cellA.x][cellA.y] |= 8; // Add right wall
    maze[cellB.x][cellB.y] |= 2; // Add left wall
  } else {
    maze[cellA.x][cellA.y] |= 1; // Add bottom wall
    maze[cellB.x][cellB.y] |= 4; // Add top wall
  }
}

export function isEdge(maze: number[][], cellA: Cell, cellB: Cell): boolean {
  if (cellA.x === cellB.x) {
      const first = Math.min(cellA.y, cellB.y);
      return (maze[cellA.x][first] & 2) !== 0;
  } else {
      const first = Math.min(cellA.x, cellB.x);
      return (maze[first][cellA.y] & 4) !== 0;
  }
}
