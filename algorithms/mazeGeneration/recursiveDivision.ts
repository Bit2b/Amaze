import { Cell, CellEdge, MazeResult } from '@/types';
import { createEmptyGrid } from '@/utils/gridUtils';
import { addEdge } from '@/utils/wallUtil';

export default function recursiveDivision(height: number, width: number): MazeResult {
  const maze = createEmptyGrid(height, width);
  const wallChanges: CellEdge[] = [];
  const isConstructive = true;

  divide(maze, wallChanges, { x: 0, y: 0 }, { x: height - 1, y: width - 1 });

  return { maze, wallChanges, isConstructive };
}

const divide = (maze: number[][], wallChanges: CellEdge[], topleft: Cell, bottomRight: Cell) => {
  const { x: x1, y: y1 } = topleft;
  const { x: x2, y: y2 } = bottomRight;

  if (x2 <= x1 || y2 <= y1) return;

  // const isVertical = Math.random() * ((x2 - x1) + (y2 - y1)) > (x2 - x1);
  const isVertical = Math.random()>0.5;

  
  if (isVertical) {
    const wallX = Math.floor(Math.random() * (x2 - x1 - 1)) + x1 + 1;
    const doorY = Math.floor(Math.random() * (y2 - y1 + 1)) + y1;

    for (let y = y1; y <= y2; y++) {
      if (y !== doorY) {
        addEdge(maze, { cellA: { x: wallX, y }, cellB: { x: wallX - 1, y } });
        wallChanges.push({ cellA: { x: wallX, y }, cellB: { x: wallX - 1, y } });
      }
    }


    divide(maze, wallChanges, topleft, { x: wallX - 1, y: y2 });
    divide(maze, wallChanges, { x: wallX, y: y1 }, bottomRight);

  } else {

    const wallY = Math.floor(Math.random() * (y2 - y1 - 1)) + y1 + 1;
    const doorX = Math.floor(Math.random() * (x2 - x1 + 1)) + x1;

    for (let x = x1; x <= x2; x++) {
      if (x !== doorX) {
        addEdge(maze, { cellA: { x, y: wallY }, cellB: { x, y: wallY - 1 } });
        wallChanges.push({ cellA: { x, y: wallY }, cellB: { x, y: wallY - 1 } });
      }
    }

    divide(maze, wallChanges, topleft, { x: x2, y: wallY - 1 });
    divide(maze, wallChanges, { x: x1, y: wallY }, bottomRight);
  }
};
