'use client'

import MazeGame from './MazeGame';
import { useResultStore } from '@/store/resultStore';
import Topbar from '@/components/Topbar';

const Mazes = () => {
  
  const mazeGrid = useResultStore((set)=>set.mazeResult.maze);
  return (
    <div>
      <Topbar/>
      <MazeGame grid={mazeGrid}/>
    </div>
  );
}

export default Mazes;