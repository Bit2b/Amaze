import { CellEdge, MazeResult } from '@/types';
import { createFullGrid } from '@/utils/gridUtils';
import { removeEdge } from '@/utils/wallUtil';
import {
  getRandomNode,
  getUnvisitedNeighbors,
  getUnvisitedNeighborsEdges,
} from '@/utils/algoUtils';

export default function primsAlgorithm(
  height: number,
  width: number
): MazeResult {
  const maze = createFullGrid(height, width);
  const mazeSteps: CellEdge[] = [];
  const isConstructive = false;
  const visited: boolean[][] = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );

  const randomCell = getRandomNode(height, width);
  const firstCellEdges = getUnvisitedNeighborsEdges(
    randomCell,
    visited,
    height,
    width
  );

  const edges: CellEdge[] = [...firstCellEdges];

  visited[randomCell.x][randomCell.y] = true;

  while (edges.length > 0) {
    edges.sort(() => Math.random() - 0.5);
    const edge = edges.shift()!;

    const { cellA, cellB } = edge;
    if (visited[cellB.x][cellB.y]) continue;

    visited[cellB.x][cellB.y] = true;

    mazeSteps.push(edge);
    removeEdge(maze, edge);

    const neighbors = getUnvisitedNeighbors(cellB, visited, height, width);
    neighbors.forEach((neighbor) => {
      edges.push({ cellA: cellB, cellB: neighbor });
    });
  }

  return { maze, mazeSteps, isConstructive };
}
