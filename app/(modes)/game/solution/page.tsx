'use client';

import { useEffect, useState } from 'react';
import { type Cell } from '@/types';
import { useDimensionsStore } from '@/store/dimensionsStore';
import PathRenderer from '@/components/PathRenderer';
import useSolutionStepHandler from '@/hooks/useSolutionStepHandler';
import { useResultStore } from '@/store/resultStore';
import { useGameLevelStore } from '@/store/gameLevelStore';
import { findSourceAndDestination } from '@/utils/gameUtils';
import pathBfs from '@/algorithms/mazeSolver/pathBfs';
import SolverTopbar from '@/components/topbar/SolverTopbar';

const SolutionRenderer = () => {
    const { height, width, speed } = useDimensionsStore();
    const mazeResult = useResultStore((state) => state.mazeResult.maze);
    const gameLevel = useGameLevelStore((state) => state.currentGameLevel);
    const [path, setPath] = useState<Cell[]>([]);
    const [isRunning, setIsRunning] = useState(true);

    //setting the path
    useEffect(() => {
        if (mazeResult.length > 0) {
            const { source, destination } = findSourceAndDestination(height, width, gameLevel, mazeResult);
            const newPath = pathBfs(mazeResult, source, destination);
            setPath(newPath);
        }
    }, [gameLevel, mazeResult, height, width]);

    const { maze, handleNextStep, handlePrevStep, handleGoStart, handleGoFinish, currentStep } = useSolutionStepHandler({ path });

    //running the path animation
    useEffect(() => {
        if (!isRunning) return;

        const current = setInterval(() => {
            if (currentStep >= path.length) {
                setIsRunning(false);
                return;
            }
            handleNextStep();
        }, 5000 / speed);

        return () => clearInterval(current);

    }, [isRunning, path, speed, currentStep, handleNextStep]);

    //when the new path is set, start the animation
    useEffect(() => {
        setIsRunning(true);
    }, [path]);

    return (
        <div className="flex flex-col h-screen">
            <SolverTopbar
                isPlaying={isRunning}
                onTogglePlay={() => currentStep < path.length && setIsRunning(!isRunning)}
                onStepBack={handlePrevStep}
                onStepForward={handleNextStep}
                onStart={handleGoStart}
                onFinish={handleGoFinish}
            />
            <PathRenderer grid={maze} />
        </div>
    )
};

export default SolutionRenderer;