'use client';

import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import pathBfs from '@/algorithms/mazeSolver/pathBfs';
import PathRendererHelp from './PathRendererHelp';
import { useEffect, useState } from 'react';
import { Cell } from '@/types';
import SolverTopbar from '@/components/SolverTopbar';

const App = () => {
    const { height, width } = useDimensionsStore();
    const mazeResult = useResultStore((state) => state.mazeResult.maze);

    const start = { x: 0, y: 0 };
    const end = { x: height - 1, y: width - 1 };

    const [path, setPath] = useState<Cell[]>([]);

    useEffect(() => {
        if (mazeResult.length > 0) {
            const newPath = pathBfs(mazeResult, start, end);
            setPath(newPath);
        }
    }, [mazeResult]);

    return (
        <div className="flex flex-col">
            <SolverTopbar />
            <PathRendererHelp path={path} />
        </div>

    )
};

export default App;
