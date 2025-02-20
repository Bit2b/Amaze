import { Cell, CellEdge, MazeResult } from '@/types';
import { createFullGrid } from '@/utils/gridUtils';
import { removeEdge } from '@/utils/wallUtil';
import {
  chooseRandomNeighbor,
  getRandomNode,
  getUnvisitedNeighbors,
} from '@/utils/algoUtils';

export default function recursiveBacktracker(
  height: number,
  width: number
): MazeResult {
  const maze = createFullGrid(height, width);
  const mazeSteps: CellEdge[] = [];
  const isConstructive = false;
  const randomCell: Cell = getRandomNode(height, width);
  const stack: Cell[] = [randomCell];
  const visited = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );

  visited[randomCell.x][randomCell.y] = true;

  while (stack.length > 0) {
    const currentCell = stack.pop()!;
    const unvisitedNeighbors = getUnvisitedNeighbors(
      currentCell,
      visited,
      height,
      width
    );

    if (unvisitedNeighbors.length > 0) {
      const nextCell = chooseRandomNeighbor(unvisitedNeighbors);
      stack.push(currentCell);
      visited[nextCell.x][nextCell.y] = true;

      const edge: CellEdge = { cellA: currentCell, cellB: nextCell };
      mazeSteps.push(edge);
      removeEdge(maze, edge);
      stack.push(nextCell);
    }
  }

  return { maze, mazeSteps, isConstructive };
}
