'use client'

import { useResultStore } from '@/store/resultStore';
import GameTopbar from '@/app/(mazeSeeded)/game/GameTopbar';
import React, { useEffect, useRef } from 'react';
import { useDimensionsStore } from '@/store/dimensionsStore';
import GameRenderer from './GameRenderer';
import { usePositionStore } from '@/store/gamePositionStore';
import GameTutorial from '@/app/(mazeSeeded)/game/gameTutorial';
import { useGameStore } from '@/store/gameStore';
import ScoreCard from './ScoreCard';

const Mazes = () => {
  const grid = useResultStore((state) => state.mazeResult.maze);
  const { height, width } = useDimensionsStore();
  const { setCurrentPosition, currentPosition, source, destination } = usePositionStore();
  const { setGameStatus, gameStatus, resetGame, setGameTries } = useGameStore();


  // Fix: Use useRef correctly for visited cells tracking
  const visitedRef = useRef<boolean[][]>(Array.from({ length: height }, () =>
    Array.from({ length: width }, () => false)
  ));
  const stepsTaken = useRef(0);

  // console.log(gameStatus);

  const countVisitedCells = () => {
    if (!visitedRef.current) return 0;

    let count = 0;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        if (visitedRef.current[i][j]) {
          count++;
        }
      }
    }
    return count;
  };


  const movePlayer = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    if (gameStatus === 'Won') return;
    if (gameStatus === 'Ready') {
      stepsTaken.current = 0;
      setGameStatus('Playing');
    }
    const { x, y } = currentPosition;
    let newX = x;
    let newY = y;

    if (['ArrowUp', 'w', 'W'].includes(event.key) && x > 0 && !(grid[x][y] & 1)) {
      newX -= 1;
    } else if (['ArrowRight', 'd', 'D'].includes(event.key) && y < width - 1 && !(grid[x][y] & 2)) {
      newY += 1;
    } else if (['ArrowDown', 's', 'S'].includes(event.key) && x < height - 1 && !(grid[x][y] & 4)) {
      newX += 1;
    } else if (['ArrowLeft', 'a', 'A'].includes(event.key) && y > 0 && !(grid[x][y] & 8)) {
      newY -= 1;
    }

    // Only update if the position changed
    if (newX !== x || newY !== y) {
      if (visitedRef.current) {
        visitedRef.current[newX][newY] = true;
        stepsTaken.current += 1;
      }
      setCurrentPosition({ x: newX, y: newY });
    }
  };

  useEffect(() => {
    if (currentPosition.x === destination.x && currentPosition.y === destination.y) {
      setGameStatus('Won');
    }
    if (currentPosition.x === source.x && currentPosition.y === source.y && gameStatus === 'Ready') {
      stepsTaken.current = 0;
      if (height && width) {
        visitedRef.current = Array.from({ length: height }, () =>
          Array.from({ length: width }, () => false)
        );
        // Mark starting position as visited
        if (visitedRef.current && source) {
          visitedRef.current[source.x][source.y] = true;
        }
      }
    }
  }, [currentPosition, destination, gameStatus]);

  useEffect(() => {
    resetGame();
    setGameTries(1);
  }, [grid]);

  return (
    <div
      tabIndex={0}
      onKeyDown={movePlayer}
      className="flex flex-col h-screen outline-none"
    >
      <GameTutorial />
      <GameTopbar />
      {grid && grid.length > 0 && (
        <GameRenderer
          visited={visitedRef.current}
          grid={grid}
          location={currentPosition}
          destination={destination}
        />
      )}
      {gameStatus === 'Won' && <ScoreCard stepsTaken={stepsTaken.current} visitedCells={countVisitedCells()} />}
    </div>
  );
}

export default Mazes;