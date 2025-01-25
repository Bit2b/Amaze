import kruskalsAlgorithm from '@/algorithms/mazeGeneration/kruskalsAlgorithm';
import { createFullGrid } from '@/utils/gridUtils';
import React, { useEffect, useState } from 'react';
import MazeGame from './MazeGame';

const Mazes = () => {
  const [mazeGrid, setMazeGrid] = useState<number[][]>(createFullGrid(10, 10));
  
  useEffect(() => {
    const { maze } = kruskalsAlgorithm(10, 10); 
    setMazeGrid(maze); 
    console.log(maze);
    
  }, []);

  return (
    <div>
      <MazeGame grid={mazeGrid} />
    </div>
  );
}

export default Mazes;
