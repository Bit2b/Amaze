import React, { useEffect, useState } from 'react';
import GridRenderer from '@/components/GridRenderer';
import { Cell } from '@/types';

type GridProps = {
    grid: number[][];
};

const MazeGame: React.FC<GridProps> = ({ grid }) => {
    const [location, setLocation] = useState<Cell>({ x: 0, y: 0 });
    const [destination, setDestination] = useState<Cell>({
        x: grid.length - 1,
        y: grid[0].length - 1
    });
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
                if (rowIndex === location.x && colIndex === location.y) {
                    return cell | 16;
                }
                if (rowIndex === destination.x && colIndex === destination.y) {
                    return cell | 32;
                }
                return cell;
            })
        );
        setMaze(newGrid);
    }, [location, grid, destination]);

    useEffect(() => {
        if (location.x === destination.x && location.y === destination.y) {
            setIsGameWon(true);
        }
    }, [location, destination]);

    useEffect(() => {
        setIsGameStarted(false);
        setIsGameWon(false);
        setLocation({ x: 0, y: 0 });
        setDestination({
            x: grid.length - 1,
            y: grid[0].length - 1
        });
    }, [grid]);

    return (
        <div className='w-full' tabIndex={0} onKeyDown={movePlayer} style={{ outline: 'none' }}>
            {isGameWon && <div className="text-center text-xl font-bold">You Win!</div>}
            {!isGameWon && isGameStarted && <div className="text-center text-xl font-bold">Go...</div>}
            {!isGameStarted && <div className="text-center text-xl font-bold">Click on the Maze to start</div>}
            <GridRenderer grid={maze} />
        </div>
    );
};

export default MazeGame;