'use client'

import MazeGame from './MazeGame';
import { useResultStore } from '@/store/resultStore';
import GameTopbar from '@/components/topbar/GameTopbar';

const Mazes = () => {

  const mazeGrid = useResultStore((set) => set.mazeResult.maze);
  return (
    <div className='flex flex-col h-screen'>
      <GameTopbar />
      <MazeGame grid={mazeGrid} />
    </div>
  );
}

export default Mazes;