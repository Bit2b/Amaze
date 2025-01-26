import { Cell, CellEdge, GenerationResult } from '@/types';
import { createFullGrid, isInsideGrid } from '@/utils/gridUtils';
import { removeEdge } from '@/utils/wallUtil';

export default function recursiveBacktracker(
  height: number,
  width: number
): GenerationResult {
  const maze = createFullGrid(height, width);
  const wallChanges: CellEdge[] = [];
  const isConstructive=false;
  const stack: Cell[] = [{ x: 0, y: 0 }];
  const visited = Array.from({ length: height }, () => Array(width).fill(false));

  visited[0][0] = true;

  const dx = [0, 0, 1, -1];
  const dy = [-1, 1, 0, 0];

  while (stack.length > 0) {
    const currentCell = stack.pop()!;
    const unvisitedNeighbors = getUnvisitedNeighbors(currentCell, visited, height, width, dx, dy);

    if (unvisitedNeighbors.length > 0) {
      const nextCell = chooseRandomNeighbor(unvisitedNeighbors);
      stack.push(currentCell);
      visited[nextCell.x][nextCell.y] = true;
      
      const edge: CellEdge = { cellA: currentCell, cellB: nextCell };
      wallChanges.push(edge);
      removeEdge(maze, edge);
      stack.push(nextCell);
    }
  }

  return { maze, wallChanges,isConstructive };
}

function getUnvisitedNeighbors(cell: Cell, visited: boolean[][], height: number, width: number, dx: number[], dy: number[]): Cell[] {
  const neighbors: Cell[] = [];
  
  for (let i = 0; i < 4; i++) {
    const nx = cell.x + dx[i];
    const ny = cell.y + dy[i];

    if (isInsideGrid(nx, ny, height, width) && !visited[nx][ny]) {
      neighbors.push({ x: nx, y: ny });
    }
  }
  
  return neighbors;
}

function chooseRandomNeighbor(neighbors: Cell[]): Cell {
  const randomIndex = Math.floor(Math.random() * neighbors.length);
  return neighbors[randomIndex];
}
