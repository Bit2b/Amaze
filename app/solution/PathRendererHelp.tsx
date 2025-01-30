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
    const timerIds = useRef<Set<number>>(new Set());
    const mazeResult = useResultStore((set) => set.mazeResult.maze);

    const [grid, setGrid] = useState(() =>
        mazeResult.map(row => [...row])
    );

    // Reset grid when maze changes
    useEffect(() => {
        setGrid(mazeResult.map(row => [...row]));
    }, [mazeResult]);

    useEffect(() => {
        // Clear existing animations
        const currentTimers = timerIds.current;
        currentTimers.forEach(id => clearTimeout(id));
        currentTimers.clear();

        // Animate path with proper speed calculation
        path.forEach(({ x, y }, idx) => {
            const timerId = window.setTimeout(() => {
                setGrid(prev => {
                    const newGrid = prev.map(row => [...row]);
                    newGrid[x][y] |= 64;
                    return newGrid;
                });
            }, (idx * 5000) / speed);  // Fixed speed calculation

            currentTimers.add(timerId);
        });

        return () => {
            currentTimers.forEach(id => clearTimeout(id));
            currentTimers.clear();
        };
    }, [path, speed]);

    return <PathRenderer grid={grid} />;
};

export default PathRendererHelp;