import diameterMaze from '@/algorithms/mazeDestinationFinder/diameterMaze';
import farthestFromSource from '@/algorithms/mazeDestinationFinder/farthestFromSource';
import { Cell, GameLevel } from '@/types';

export function findSourceAndDestination(
  height: number,
  width: number,
  gameLevel: GameLevel,
  mazeResult: number[][]
): { source: Cell; destination: Cell } {
  let source: Cell = { x: 0, y: 0 };
  let destination: Cell = { x: height - 1, y: width - 1 };

  switch (gameLevel) {
    case 'Easy':
      source = { x: 0, y: 0 };
      destination = { x: height - 1, y: width - 1 };
      break;
    case 'Normal':
      destination = farthestFromSource(mazeResult, source);
      break;
    case 'Nightmare':
      [source, destination] = diameterMaze(mazeResult);
      break;
  }

  return { source, destination };
}
