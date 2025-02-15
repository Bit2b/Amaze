'use client';

import { useEffect, useRef, useState } from 'react';
import { type Cell } from '@/types';
import { useDimensionsStore } from '@/store/dimensionsStore';
import PathRenderer from '@/components/PathRenderer';
import { useResultStore } from '@/store/resultStore';

interface PathRendererHelpProps {
    path: Cell[];
}

const PathRendererHelp: React.FC<PathRendererHelpProps> = ({ path }) => {
    const { speed } = useDimensionsStore();
    const timeoutIds = useRef<NodeJS.Timeout[]>([]);
    const mazeResult = useResultStore((set) => set.mazeResult.maze);

    const [grid, setGrid] = useState(() =>
        mazeResult.map(row => [...row])
    );

    // Reset grid when maze changes
    useEffect(() => {
        setGrid(mazeResult.map(row => [...row]));
    }, [mazeResult]);

    useEffect(() => {
        // Clear any pending animations
        timeoutIds.current.forEach(clearTimeout);
        timeoutIds.current = [];

        // Animate path
        path.forEach(({ x, y }, idx) => {
            const timeoutId = setTimeout(() => {
                setGrid(prev => {
                    const newGrid = prev.map(row => [...row]);
                    newGrid[x][y] &= ~((1 << 6) | (1 << 7) | (1 << 8) | (1 << 9));
                    newGrid[x][y] |= (1 << 6);
                    prev.forEach((row, i) => row.forEach((cell, j) => {
                        if (i === x && j === y) return;
                        if (cell & (1 << 6)) newGrid[i][j] = (cell & ~(1 << 6)) | (1 << 7);
                        else if (cell & (1 << 7)) newGrid[i][j] = (cell & ~(1 << 7)) | (1 << 8);
                        else if (cell & (1 << 8)) newGrid[i][j] = (cell & ~(1 << 8)) | (1 << 9);
                    }));
                    return newGrid;
                });
            }, (idx * 5000) / speed);

            timeoutIds.current.push(timeoutId);
        });

        // Cleanup on unmount
        return () => timeoutIds.current.forEach(clearTimeout);
    }, [path, speed]);

    return <PathRenderer grid={grid} />;
};

export default PathRendererHelp;