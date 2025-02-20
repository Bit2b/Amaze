import { Cell, CellEdge } from '@/types';

export function isInsideGrid(
  x: number,
  y: number,
  height: number,
  width: number
): boolean {
  return x >= 0 && x < height && y >= 0 && y < width;
}

export const directions = {
  dx: [0, 0, 1, -1],
  dy: [-1, 1, 0, 0],
};

export function getRandomNode(height: number, width: number): Cell {
  return {
    x: Math.floor(Math.random() * height),
    y: Math.floor(Math.random() * width),
  };
}

export function chooseRandomNeighbor(neighbors: Cell[]): Cell {
  const randomIndex = Math.floor(Math.random() * neighbors.length);
  return neighbors[randomIndex];
}

export function getUnvisitedNeighbors(
  cell: Cell,
  visited: boolean[][],
  height: number,
  width: number
): Cell[] {
  const neighbors: Cell[] = [];

  for (let i = 0; i < 4; i++) {
    const nx = cell.x + directions.dx[i];
    const ny = cell.y + directions.dy[i];
    if (isInsideGrid(nx, ny, height, width) && !visited[nx][ny]) {
      neighbors.push({ x: nx, y: ny });
    }
  }
  return neighbors;
}

export function getUnvisitedNeighborsEdges(
  cell: Cell,
  visited: boolean[][],
  height: number,
  width: number
): CellEdge[] {
  const edges: CellEdge[] = [];

  for (let i = 0; i < 4; i++) {
    const nx = cell.x + directions.dx[i];
    const ny = cell.y + directions.dy[i];
    if (isInsideGrid(nx, ny, height, width) && !visited[nx][ny]) {
      edges.push({ cellA: cell, cellB: { x: nx, y: ny } });
    }
  }

  return edges;
}
