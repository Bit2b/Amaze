import React, { useEffect, useState } from 'react';
import GridRenderer from '@/components/GridRenderer';

type GridProps = {
    grid: number[][];
};

const MazeGame: React.FC<GridProps> = ({ grid }) => {
    const [location, setLocation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [maze, setMaze] = useState<number[][]>(grid);
    const [isGameWon, setIsGameWon] = useState<boolean>(false);
    const [isGameStarted, setIsGameStarted] = useState<boolean>(false);

    const movePlayer = (event: React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault();

        setIsGameStarted(true);

        if (isGameWon) return;

        setLocation((prev) => {
            const newLocation = { ...prev };

            if (event.key === 'ArrowUp' && !(grid[prev.y][prev.x] & 1)) {
                newLocation.y -= 1;
            }
            if (event.key === 'ArrowRight' && !(grid[prev.y][prev.x] & 2)) {
                newLocation.x += 1;
            }
            if (event.key === 'ArrowDown' && !(grid[prev.y][prev.x] & 4)) {
                newLocation.y += 1;
            }
            if (event.key === 'ArrowLeft' && !(grid[prev.y][prev.x] & 8)) {
                newLocation.x -= 1;
            }
            if (newLocation.x === grid.length - 1 && newLocation.y === grid[0].length - 1) {
                setIsGameWon(true)
            }
            return newLocation;
        });
    };

    useEffect(() => {
        const newGrid = grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => {
                if (rowIndex === location.y && colIndex === location.x) {
                    return cell | 16;
                }
                if (rowIndex === grid.length - 1 && colIndex === grid[0].length - 1) {
                    return cell | 32;
                }
                return cell;
            }));
        setMaze(newGrid);
    }, [location, grid]);

    useEffect(() => {
        const destinationX = grid[0].length - 1;
        const destinationY = grid.length - 1;

        if (location.x === destinationX && location.y === destinationY) {
            setIsGameWon(true);
        }
    }, [location, grid]);

    useEffect(() => {
        setIsGameStarted(false);
        setIsGameWon(false);
        setLocation({ x: 0, y: 0 });
    }, [grid])

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