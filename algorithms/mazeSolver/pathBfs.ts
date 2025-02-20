import { Cell } from '@/types';
import { directions, isInsideGrid } from '@/utils/algoUtils';
import { isEdge } from '@/utils/wallUtil';

export default function pathBfs(
  maze: number[][],
  source: Cell,
  destination: Cell
): Cell[] {
  const height = maze.length;
  const width = maze[0].length;
  const visited = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );
  const parent: (Cell | null)[][] = Array.from({ length: height }, () =>
    Array(width).fill(null)
  );

  const queue: Cell[] = [source];
  visited[source.x][source.y] = true;


  while (queue.length > 0) {
    const current = queue.shift()!;

    if (current.x === destination.x && current.y === destination.y) {
      break;
    }

    for (let i = 0; i < 4; i++) {
      const nextX = current.x + directions.dx[i];
      const nextY = current.y + directions.dy[i];
      const next: Cell = { x: nextX, y: nextY };

      if (!isInsideGrid(nextX, nextY, height, width)) continue;
      if (visited[nextX][nextY]) continue;
      if (isEdge(maze, current, next)) continue;
      visited[nextX][nextY] = true;
      if (!parent[nextX][nextY]) parent[nextX][nextY] = current;
      queue.push(next);
    }
  }

  const path: Cell[] = [];
  let current: Cell | null = destination;
  while (current) {
    path.push(current);
    current = parent[current.x][current.y];
  }

  if (
    path[path.length - 1].x !== source.x ||
    path[path.length - 1].y !== source.y
  ) {
    return [];
  }
  return path.reverse();
}
