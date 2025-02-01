import { Cell } from '@/types';
import { isInsideGrid } from '@/utils/gridUtils';
import { isEdge } from '@/utils/wallUtil';

export default function farthestFromSource(
  maze: number[][],
  source: Cell
): Cell {
  const height = maze.length;
  const width = maze[0].length;
  const visited = Array.from({ length: height }, () =>
    Array(width).fill(false)
  );

  let farthest: Cell = source;

  const queue: Cell[] = [source];
  visited[source.x][source.y] = true;

  const dx = [0, 0, 1, -1];
  const dy = [-1, 1, 0, 0];

  while (queue.length > 0) {
    const current = queue.shift()!;

    farthest = current;

    for (let i = 0; i < 4; i++) {
      const nextX = current.x + dx[i];
      const nextY = current.y + dy[i];
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
