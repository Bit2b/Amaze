import { Cell } from '@/types';

interface TreeNode {
  readonly cellIndex: Cell;
  parent: Cell | null;
  virtualNeighbors: Cell[];
}

type TreeGrid = TreeNode[][];

export function printMazeTree(tree: TreeGrid, rows: number, cols: number): void {
  console.log("Maze Tree (2D Grid Format):");
  
  const cellWidth = 5;
  
  for (let x = 0; x < rows; x++) {
    let cellRow = "|";
    for (let y = 0; y < cols; y++) {
      const node = tree[x][y];
      let content = "     ";
      
      if (node.parent) {
        const parent = node.parent;
        if (parent.x < x) content = "  ^  ";
        else if (parent.x > x) content = "  v  ";
        else if (parent.y < y) content = "  <  ";
        else content = "  >  ";
      } else {
        content = "  R  ";
      }
      
      cellRow += content.padEnd(cellWidth) + "|";
    }
    console.log(cellRow);
  }
}
