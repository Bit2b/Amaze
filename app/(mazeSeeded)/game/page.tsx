'use client'

import { useResultStore } from '@/store/resultStore';
import GameTopbar from '@/app/(mazeSeeded)/game/GameTopbar';
import React, { useEffect, useState } from 'react';
import { Cell } from '@/types';
import { useGameLevelStore } from '@/store/gameLevelStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import { findSourceAndDestination } from '@/utils/gameUtils';
import GameRenderer from './GameRenderer';

const Mazes = () => {
  const grid = useResultStore((state) => state.mazeResult.maze);
  const { height, width } = useDimensionsStore();
  const [location, setLocation] = useState<Cell>({ x: 0, y: 0 });
  const [destination, setDestination] = useState<Cell>({
    x: height - 1,
    y: width - 1
  });
  const gameLevel = useGameLevelStore((state) => state.currentGameLevel);
  const [isGameWon, setIsGameWon] = useState<boolean>(false);

  const movePlayer = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (isGameWon) return;

    setLocation((prev) => {
      const newLocation = { ...prev };
      // Check if we can move in the direction (wall doesn't exist)
      if (event.key === 'ArrowUp' && prev.x > 0 && !(grid[prev.x][prev.y] & 1)) {
        newLocation.x -= 1;
      }
      if (event.key === 'ArrowRight' && prev.y < width - 1 && !(grid[prev.x][prev.y] & 2)) {
        newLocation.y += 1;
      }
      if (event.key === 'ArrowDown' && prev.x < height - 1 && !(grid[prev.x][prev.y] & 4)) {
        newLocation.x += 1;
      }
      if (event.key === 'ArrowLeft' && prev.y > 0 && !(grid[prev.x][prev.y] & 8)) {
        newLocation.y -= 1;
      }
      return newLocation;
    });
  };

  useEffect(() => {
    if (location.x === destination.x && location.y === destination.y) {
      setIsGameWon(true);
    }
  }, [location, destination]);

  // Reset game when grid or level changes
  useEffect(() => {
    setIsGameWon(false);

    if (grid && grid.length > 0) {
      const { source, destination } = findSourceAndDestination(height, width, gameLevel, grid);
      setLocation(source);
      setDestination(destination);
    }
  }, [grid, gameLevel, height, width]);

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
          location={location}
          destination={destination}
        />
      )}
    </div>
  );
}

export default Mazes;