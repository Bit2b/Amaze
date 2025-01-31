import { Cell, CellEdge, MazeResult } from '@/types';
import { createFullGrid } from '@/utils/gridUtils';
import { removeEdge } from '@/utils/wallUtil';

export default function binaryTree(height: number, width: number): MazeResult {
  const maze = createFullGrid(height, width);
  const mazeSteps: CellEdge[] = [];
  const isConstructive = false;

  for (let x = 0; x < height; x++) {
    for (let y = 0; y < width; y++) {
      const cell: Cell = { x, y };
      const neighbors: Cell[] = [];

      if (x > 0) neighbors.push({ x: x - 1, y });
      if (y < width - 1) neighbors.push({ x, y: y + 1 });

      if (neighbors.length > 0) {
        const chosenNeighbor =
          neighbors[Math.floor(Math.random() * neighbors.length)];
        const edge = { cellA: cell, cellB: chosenNeighbor };
        removeEdge(maze, edge);
        mazeSteps.push(edge);
      }
    }
  }

  return { maze, mazeSteps, isConstructive };
}
