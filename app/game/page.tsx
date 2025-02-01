'use client'

import MazeGame from './MazeGame';
import { useResultStore } from '@/store/resultStore';
import GameTopbar from '@/components/GameTopbar';

const Mazes = () => {
  
  const mazeGrid = useResultStore((set)=>set.mazeResult.maze);
  return (
    <div>
      <GameTopbar/>
      <MazeGame grid={mazeGrid}/>
    </div>
  );
}

export default Mazes;