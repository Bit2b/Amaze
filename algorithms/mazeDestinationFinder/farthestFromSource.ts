import { Cell } from '@/types';
import { directions, isInsideGrid } from '@/utils/algoUtils';
import { isEdge } from '@/utils/wallUtil';

export default function farthestFromSource(
  maze: number[][],
  source: Cell
): Cell {
  const height = maze.length;
  if (!height) return { x: 0, y: 0 };
  const width = maze[0].length;
  if (!width) return { x: 0, y: 0 };
  const visited = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );

  let farthest: Cell = source;

  const queue: Cell[] = [source];
  visited[source.x][source.y] = true;

  while (queue.length > 0) {
    const current = queue.shift()!;

    farthest = current;

    for (let i = 0; i < 4; i++) {
      const nextX = current.x + directions.dx[i];
      const nextY = current.y + directions.dy[i];
      const next: Cell = { x: nextX, y: nextY };

      if (!isInsideGrid(nextX, nextY, height, width)) continue;
      if (visited[nextX][nextY]) continue;
      if (isEdge(maze, current, next)) continue;

      visited[nextX][nextY] = true;
      queue.push(next);
    }
  }
  return farthest;
}
