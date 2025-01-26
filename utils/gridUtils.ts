// utils/gridUtils.ts
import { CellEdge } from '@/types';

// Check if a cell is within the grid bounds
export function isInsideGrid(
  x: number,
  y: number,
  height: number,
  width: number
): boolean {
  return x >= 0 && x < height && y >= 0 && y < width;
}

// Create a grid of walls (binary 1111 represents walls)
export function createFullGrid(height: number, width: number): number[][] {
  return Array.from({ length: height }, () => Array(width).fill(15));
}

// Creates an empty grid (all 0s) with boundary walls.
export function createEmptyGrid(height: number, width: number): number[][] {
  const grid = Array.from({ length: height }, () => Array(width).fill(0));
  for (let i = 0; i < height; i++) {
    grid[i][0] |= 8;
    grid[i][width-1] |= 2;
  }
  for (let i = 0; i < width; i++) {
    grid[0][i] |= 1;
    grid[height-1][i] |= 4;
  }
  return grid;
}

// Generate all edges for the maze grid
export function createAllEdges(height: number, width: number): CellEdge[] {
  const edges: CellEdge[] = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i > 0)
        edges.push({ cellA: { x: i, y: j }, cellB: { x: i - 1, y: j } });
      if (j > 0)
        edges.push({ cellA: { x: i, y: j }, cellB: { x: i, y: j - 1 } });
    }
  }
  return edges;
}
