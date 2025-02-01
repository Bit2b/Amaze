'use client';

import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import pathBfs from '@/algorithms/mazeSolver/pathBfs';
import PathRendererHelp from './PathRendererHelp';
import { useEffect, useState } from 'react';
import { Cell } from '@/types';
import SolverTopbar from '@/components/SolverTopbar';
import { useGameLevelStore } from '@/store/gameLevelStore';
import farthestFromSource from '@/algorithms/mazeDestinationFinder/farthestFromSource';
import diameterMaze from '@/algorithms/mazeDestinationFinder/diameterMaze';

const App = () => {
    const { height, width } = useDimensionsStore();
    const mazeResult = useResultStore((state) => state.mazeResult.maze);

    const gameLevel = useGameLevelStore((set) => set.currentGameLevel);
    const [path, setPath] = useState<Cell[]>([]);

    useEffect(() => {
        let source: Cell = { x: 0, y: 0 }, destination: Cell = {
            x: height - 1,
            y: width - 1
        };
        if (gameLevel === "Normal") {
            destination = farthestFromSource(mazeResult, source);
        }
        if (gameLevel === "Nightmare") {
            [source, destination] = diameterMaze(mazeResult);
        }
        if (mazeResult.length > 0) {
            const newPath = pathBfs(mazeResult, source, destination);
            setPath(newPath);
        }
    }, [gameLevel,mazeResult])
    
    return (
        <div className="flex flex-col">
            <SolverTopbar />
            <PathRendererHelp path={path} />
        </div>

    )
};

export default App;
