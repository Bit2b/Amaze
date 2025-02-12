import { MazeAlgorithm, MazeResult } from '@/types';
import primsAlgorithm from './mazeGeneration/primsAlgorithm';
import recursiveDivision from './mazeGeneration/recursiveDivision';
import recursiveBacktracker from './mazeGeneration/recursiveBacktracker';
import binaryTree from './mazeGeneration/binaryTree';
import sidewinder from './mazeGeneration/sidewinder';
import growingTree from './mazeGeneration/growingTree';
import kruskalsAlgorithm from './mazeGeneration/kruskalsAlgorithm';

const algorithmMap: Record<
  MazeAlgorithm,
  (rows: number, cols: number) => MazeResult
> = {
  [MazeAlgorithm.KRUSKAL]: kruskalsAlgorithm,
  [MazeAlgorithm.PRIM]: primsAlgorithm,
  [MazeAlgorithm.RECURSIVE_DIVISION]: recursiveDivision,
  [MazeAlgorithm.RECURSIVE_BACKTRACKING]: recursiveBacktracker,
  [MazeAlgorithm.BINARY_TREE]: binaryTree,
  [MazeAlgorithm.SIDEWINDER]: sidewinder,
  [MazeAlgorithm.GROWINGTREE]: growingTree,
};

export default function MazeAlgorithmResult(
  algorithm: MazeAlgorithm,
  rows: number,
  cols: number
): MazeResult {
  return algorithmMap[algorithm](rows, cols);
}
