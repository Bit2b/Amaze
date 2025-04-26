'use client'

import { useResultStore } from '@/store/resultStore';
import GameTopbar from '@/app/(mazeSeeded)/game/GameTopbar';
import React, { useEffect, useState } from 'react';
import { useDimensionsStore } from '@/store/dimensionsStore';
import GameRenderer from './GameRenderer';
import { usePositionStore } from '@/store/gamePositionStore';

const Mazes = () => {
  const grid = useResultStore((state) => state.mazeResult.maze);
  const { height, width } = useDimensionsStore();
  const { setCurrentPosition, currentPosition, destination } = usePositionStore();
  const [isGameWon, setIsGameWon] = useState<boolean>(false);

  const movePlayer = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isGameWon) return;

    const { x, y } = currentPosition;
    let newX = x;
    let newY = y;

    if (event.key === 'ArrowUp' && x > 0 && !(grid[x][y] & 1)) {
      newX -= 1;
    }
    if (event.key === 'ArrowRight' && y < width - 1 && !(grid[x][y] & 2)) {
      newY += 1;
    }
    if (event.key === 'ArrowDown' && x < height - 1 && !(grid[x][y] & 4)) {
      newX += 1;
    }
    if (event.key === 'ArrowLeft' && y > 0 && !(grid[x][y] & 8)) {
      newY -= 1;
    }

    setCurrentPosition({ x: newX, y: newY });
  };

  useEffect(() => {
    if (currentPosition.x === destination.x && currentPosition.y === destination.y) {
      setIsGameWon(true);
    } else {
      setIsGameWon(false);
    }
  }, [currentPosition, destination]);

  return (
    <div
      tabIndex={0}
      onKeyDown={movePlayer}
      className='flex flex-col h-screen outline-none'
    >
      <GameTopbar />
      {grid && grid.length > 0 && (
        <GameRenderer
          grid={grid}
          location={currentPosition}
          destination={destination}
        />
      )}
    </div>
  );
}

export default Mazes;