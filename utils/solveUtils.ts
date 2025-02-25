import { Cell } from '@/types';

//sorry for writing this code, it works but it's not the best way to do it for sure
export function stepModifier(
  path: Cell[],
  maze: number[][],
  cell: Cell,
  isForward: boolean
) {
  const { x, y } = cell;
  if (isForward) {
    maze[x][y] &= ~((1 << 6) | (1 << 7) | (1 << 8) | (1 << 9));
    maze[x][y] |= 1 << 6;
    maze.forEach((row, i) =>
      row.forEach((cell, j) => {
        if (i === x && j === y) return;
        if (cell & (1 << 6)) maze[i][j] = (cell & ~(1 << 6)) | (1 << 7);
        else if (cell & (1 << 7)) maze[i][j] = (cell & ~(1 << 7)) | (1 << 8);
        else if (cell & (1 << 8)) maze[i][j] = (cell & ~(1 << 8)) | (1 << 9);
      })
    );
  } else {
    maze[x][y] &= ~((1 << 6) | (1 << 7) | (1 << 8) | (1 << 9));
    let lastBlue: Cell = { x: 0, y: 0 };

    for (let i = path.length - 1; i >= 0; i--) {
      if (maze[path[i].x][path[i].y] & (1 << 9)) {
        lastBlue = path[i];
        break;
      }
    }

    maze.forEach((row, i) =>
      row.forEach((cell, j) => {
        if (i === x && j === y) return;
        if (cell & (1 << 7)) maze[i][j] = (cell & ~(1 << 7)) | (1 << 6);
        else if (cell & (1 << 8)) maze[i][j] = (cell & ~(1 << 8)) | (1 << 7);
        else if (lastBlue.x === i && lastBlue.y === j)
          maze[i][j] = (cell & ~(1 << 9)) | (1 << 8);
      })
    );
  }
  return maze;
}
