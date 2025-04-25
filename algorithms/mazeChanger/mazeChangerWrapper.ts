import { modifyMazeStructure } from './mazeChange';
import { mazeToTree, treeToMaze } from './mazeTree';

interface Result {
  success: boolean;
  maze: number[][];
}

export function mazeChangeWrapper(
  maze: number[][],
  rows: number,
  cols: number,
  changingRow: number,
  changingCol: number
) {

  const tree = mazeToTree(maze, rows, cols);
  const ismazeChanged = modifyMazeStructure(tree, {
    x: changingRow,
    y: changingCol,
  });

  const result: Result = {
    success: ismazeChanged,
    maze: treeToMaze(tree, rows, cols),
  };
  
  return result;
}
