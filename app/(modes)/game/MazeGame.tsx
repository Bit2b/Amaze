'use client'

import React, { useEffect, useState } from 'react';
import GridRenderer from '@/components/GridRenderer';
import { Cell } from '@/types';
import { useGameLevelStore } from '@/store/gameLevelStore';
import farthestFromSource from '@/algorithms/mazeDestinationFinder/farthestFromSource';
import diameterMaze from '@/algorithms/mazeDestinationFinder/diameterMaze';
import { useDimensionsStore } from '@/store/dimensionsStore';

type GridProps = {
    grid: number[][];
};

const MazeGame: React.FC<GridProps> = ({ grid }) => {
    const { height, width } = useDimensionsStore();
    const [location, setLocation] = useState<Cell>({ x: 0, y: 0 });
    const [destination, setDestination] = useState<Cell>({
        x: height - 1,
        y: width - 1
    });
    const gameLevel = useGameLevelStore((set) => set.currentGameLevel);
    const [maze, setMaze] = useState<number[][]>(grid);
    const [isGameWon, setIsGameWon] = useState<boolean>(false);
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

    const movePlayer = (event: React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault();
        setIsGameStarted(true);
        if (isGameWon) return;

        setLocation((prev) => {
            const newLocation = { ...prev };
            if (event.key === 'ArrowUp' && !(grid[prev.x][prev.y] & 1)) {
                newLocation.x -= 1;
            }
            if (event.key === 'ArrowRight' && !(grid[prev.x][prev.y] & 2)) {
                newLocation.y += 1;
            }
            if (event.key === 'ArrowDown' && !(grid[prev.x][prev.y] & 4)) {
                newLocation.x += 1;
            }
            if (event.key === 'ArrowLeft' && !(grid[prev.x][prev.y] & 8)) {
                newLocation.y -= 1;
            }
            return newLocation;
        });
    };

    useEffect(() => {
        const newGrid = grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                let newCell = cell;
                if (rowIndex === location.x && colIndex === location.y) {
                    newCell |= 16;
                }
                if (rowIndex === destination.x && colIndex === destination.y) {
                    newCell |= 32;
                }
                return newCell;
            })
        );
        setMaze(newGrid);
    }, [location, destination, grid]);

    useEffect(() => {
        if (location.x === destination.x && location.y === destination.y) {
            setIsGameWon(true);
        }
    }, [location, destination]);

    useEffect(() => {
        setIsGameStarted(false);
        setIsGameWon(false);
        let source: Cell = { x: 0, y: 0 };
        let destination: Cell = {
            x: height - 1,
            y: width - 1
        };
        if (gameLevel === "Normal") {
            destination = farthestFromSource(grid, source);
        }
        if (gameLevel === "Nightmare") {
            [source, destination] = diameterMaze(grid);
        }
        setLocation(source);
        setDestination(destination);
    }, [grid, gameLevel, height, width]);

    return (
        <div className="flex flex-col items-center" tabIndex={0} onKeyDown={movePlayer} style={{ outline: 'none' }}>
            <div className="max-w-[600px] h-[35px] mx-auto text-center text-xl font-bold mb-4">
                {isGameWon && <div>You Win!</div>}
                {!isGameWon && isGameStarted && <div>Go...</div>}
                {!isGameStarted && <div>Click on the Maze to start & use Arrow Key to Navigate</div>}
            </div>
            <GridRenderer grid={maze} />
        </div>
    );
};

export default MazeGame;