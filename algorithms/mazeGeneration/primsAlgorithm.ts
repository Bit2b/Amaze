import { CellEdge, GenerationResult } from '@/types';
import { createFullGrid, isInsideGrid } from '@/utils/gridUtils';
import { removeEdge } from '@/utils/wallUtil';

export default function primsAlgorithm(height: number, width: number): GenerationResult {
  const maze = createFullGrid(height, width);
  const wallChanges: CellEdge[] = [];
  const isConstructive = false;
  
  const edges: CellEdge[] = [
    { cellA: { x: 0, y: 0 }, cellB: { x: 0, y: 1 } },
    { cellA: { x: 0, y: 0 }, cellB: { x: 1, y: 0 } },
  ];

  const visited: boolean[][] = Array.from({ length: height }, () => Array(width).fill(false));
  visited[0][0] = true;

  while (edges.length > 0) {
    edges.sort(() => Math.random() - 0.5);
    const edge = edges.shift()!;
    
    const { cellA, cellB } = edge;
    if (visited[cellB.x][cellB.y]) continue;

    visited[cellB.x][cellB.y] = true;
    
    wallChanges.push(edge);
    removeEdge(maze, edge);

    const dx = [0, 0, 1, -1];
    const dy = [1, -1, 0, 0];

    for (let i = 0; i < 4; i++) {
      const nx = cellB.x + dx[i];
      const ny = cellB.y + dy[i];

      if (isInsideGrid(nx,ny,height,width) && !visited[nx][ny]) {
        edges.push({ cellA: cellB, cellB: { x: nx, y: ny } });
      }
    }
  }

  return { maze, wallChanges, isConstructive };
}
