import React, { useEffect, useState } from 'react';
import GridRenderer from './GridRenderer';

type GridProps = {
    grid: number[][];
};

const MazeGame: React.FC<GridProps> = ({ grid }) => {
    const [location, setLocation] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
    const [maze, setMaze] = useState<number[][]>(grid);

    const movePlayer = (event: React.KeyboardEvent<HTMLDivElement>) => {
        event.preventDefault();

        setLocation((prev) => {
            const newLocation = { ...prev };

            if (event.key === 'ArrowUp' && prev.y > 0 && !(grid[prev.y][prev.x] & 1)) {
                newLocation.y -= 1;
            }
            if (event.key === 'ArrowRight' && prev.x < grid[0].length - 1 && !(grid[prev.y][prev.x] & 2)) {
                newLocation.x += 1;
            }
            if (event.key === 'ArrowDown' && prev.y < grid.length - 1 && !(grid[prev.y][prev.x] & 4)) {
                newLocation.y += 1;
            }
            if (event.key === 'ArrowLeft' && prev.x > 0 && !(grid[prev.y][prev.x] & 8)) {
                newLocation.x -= 1;
            }

            return newLocation;
        });
    };

    useEffect(() => {
        const newGrid = grid.map((row, rowIndex) => 
            row.map((cell, colIndex) => 
                rowIndex === location.y && colIndex === location.x ? (cell|16) : cell
            )
        );
        setMaze(newGrid);
    }, [location, grid]);

    return (
        <div tabIndex={0} onKeyDown={movePlayer} style={{ outline: 'none' }}>
            <GridRenderer grid={maze} />
        </div>
    );
};

export default MazeGame;
