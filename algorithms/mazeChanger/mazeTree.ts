import { Cell } from '@/types';
import { removeEdge } from '@/utils/wallUtil';

interface Node {
  readonly cellIndex: Cell;
  parent: Cell | null;
  virtualNeighbors: Cell[];
}

const WALL_TOP = 1; // 2^0
const WALL_RIGHT = 2; // 2^1
const WALL_BOTTOM = 4; // 2^2
const WALL_LEFT = 8; // 2^3

type Tree = Node[][];

export function mazeToTree(maze: number[][], rows: number, cols: number): Tree {
  const tree: Tree = Array.from({ length: rows }, (_, x) =>
    Array.from({ length: cols }, (_, y) => ({
      cellIndex: { x, y },
      parent: null,
      virtualNeighbors: [],
    }))
  );

  const visited: boolean[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  const queue: Cell[] = [{ x: 0, y: 0 }];
  visited[0][0] = true;

  const directions = [
    { wall: WALL_TOP, dx: -1, dy: 0 },
    { wall: WALL_RIGHT, dx: 0, dy: 1 },
    { wall: WALL_BOTTOM, dx: 1, dy: 0 },
    { wall: WALL_LEFT, dx: 0, dy: -1 },
  ];

  while (queue.length > 0) {
    const current = queue.shift()!;
    const { x, y } = current;

    for (const { wall, dx, dy } of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx >= 0 && nx < rows && ny >= 0 && ny < cols) {
        if ((maze[x][y] & wall) === 0) {
          // No wall exists
          if (!visited[nx][ny]) {
            tree[nx][ny].parent = { x, y };
            visited[nx][ny] = true;
            queue.push({ x: nx, y: ny });
          }
        } else {
          // Wall exists - add to virtual neighbors
          tree[x][y].virtualNeighbors.push({ x: nx, y: ny });
        }
      }
    }
  }

  return tree;
}

export function treeToMaze(tree: Tree, rows: number, cols: number): number[][] {
  // Initialize maze with all walls present
  const maze: number[][] = Array.from({ length: rows }, () =>
    Array(cols).fill(15)
  );

  for (let x = 0; x < rows; x++) {
    for (let y = 0; y < cols; y++) {
      const currentCell = { x, y };
      const parent = tree[x][y].parent;
      // Remove wall between current cell and its parent
      if (parent) {
        removeEdge(maze, {
          cellA: currentCell,
          cellB: parent,
        });
      }
    }
  }

  return maze;
}
