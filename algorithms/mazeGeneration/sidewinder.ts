import { Cell, CellEdge, MazeResult } from '@/types';
import { createFullGrid } from '@/utils/gridUtils';
import { removeEdge } from '@/utils/wallUtil';

export default function sidewinder(height: number, width: number): MazeResult {
  const maze = createFullGrid(height, width);
  const mazeSteps: CellEdge[] = [];
  const isConstructive = false;

  for (let x = 0; x < height; x++) {
    let run: Cell[] = [];

    for (let y = 0; y < width; y++) {
      const cell: Cell = { x, y };
      run.push(cell);

      const atEasternEdge = y === width - 1;
      const atNorthernEdge = x === 0;
      const shouldCloseRun =
        atEasternEdge || (!atNorthernEdge && Math.random() < 0.5);

      if (shouldCloseRun) {
        const randomCell = run[Math.floor(Math.random() * run.length)];
        if (!atNorthernEdge) {
          const edge = {
            cellA: randomCell,
            cellB: { x: randomCell.x - 1, y: randomCell.y },
          };
          removeEdge(maze, edge);
          mazeSteps.push(edge);
        }
        run = [];
      } else if (!atEasternEdge) {
        const edge = {
          cellA: cell,
          cellB: { x: x, y: y + 1 },
        };
        removeEdge(maze, edge);
        mazeSteps.push(edge);
      }
    }
  }

  return { maze, mazeSteps, isConstructive };
}
