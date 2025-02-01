import { Cell } from '@/types';
import farthestFromSource from './farthestFromSource';

export default function diameterMaze(maze: number[][]): Cell[] {
  const farthest: Cell = farthestFromSource(maze, { x: 0, y: 0 });
  const farthestFromFarthest: Cell = farthestFromSource(maze, farthest);
  return [farthest, farthestFromFarthest];
}
