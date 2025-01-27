'use client'

import MazeAlgorithmSeeder from '@/components/MazeAlgorithmSeeder';
import MazeGame from './MazeGame';
import { useResultStore } from '@/store/resultStore';

const Mazes = () => {
  
  const mazeGrid = useResultStore((set)=>set.mazeResult.maze);
  return (
    <div>
      <MazeAlgorithmSeeder/>
      <MazeGame grid={mazeGrid} />
    </div>
  );
}

export default Mazes;
