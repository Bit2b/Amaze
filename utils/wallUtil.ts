// utils/wallUtils.ts
import { CellEdge } from '@/types';

/*
  |cellA|cellB|
  or 
  cellA
  _______
  cellB
 */
// Apply wall removal based on the direction of the edge
export function removeEdge(maze: number[][], edge: CellEdge): void {
  let { cellA, cellB } = edge;
  if(cellA.x < cellB.x || cellA.y < cellB.y)
    [cellA, cellB] = [cellB, cellA];
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
  if(cellA.x < cellB.x || cellA.y < cellB.y)
    [cellA, cellB] = [cellB, cellA];
  if (cellA.x === cellB.x) {
    maze[cellA.x][cellA.y] |= 2; // Add right wall
    maze[cellB.x][cellB.y] |= 8; // Add left wall
  } else {
    maze[cellA.x][cellA.y] |= 4; // Add bottom wall
    maze[cellB.x][cellB.y] |= 1; // Add top wall
  }
}
