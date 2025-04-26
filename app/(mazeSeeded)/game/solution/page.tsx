'use client';

import { useEffect, useState } from 'react';
import { type Cell } from '@/types';
import { useDimensionsStore } from '@/store/dimensionsStore';
import SolutionRenderer from './SolutionRenderer';
import useSolutionStepHandler from '@/hooks/useSolutionStepHandler';
import { useResultStore } from '@/store/resultStore';
import pathBfs from '@/algorithms/mazeSolver/pathBfs';
import SolutionTopbar from '@/app/(mazeSeeded)/game/solution/SolutionTopbar';
import { usePositionStore } from '@/store/gamePositionStore';

const Solution = () => {
    const { speed } = useDimensionsStore();
    const mazeResult = useResultStore((state) => state.mazeResult.maze);
    const { source, destination } = usePositionStore();
    const [path, setPath] = useState<Cell[]>([]);
    const [isRunning, setIsRunning] = useState(true);

    const {
        handleNextStep,
        handlePrevStep,
        handleGoStart,
        handleGoFinish,
        currentStep,
    } = useSolutionStepHandler({ path });

    useEffect(() => {
        const newPath = pathBfs(mazeResult, source, destination);
        setPath(newPath);
    }, [mazeResult, source, destination]);

    // Animate the path walking
    useEffect(() => {
        if (!isRunning) return;

        const intervalId = setInterval(() => {
            if (currentStep >= path.length) {
                setIsRunning(false);
                return;
            }
            handleNextStep();
        }, 5000 / speed);

        return () => clearInterval(intervalId);
    }, [isRunning, speed, path.length, currentStep, handleNextStep]);

    return (
        <div className="flex flex-col h-screen">
            <SolutionTopbar
                isPlaying={isRunning}
                onTogglePlay={() => currentStep < path.length && setIsRunning(!isRunning)}
                onStepBack={handlePrevStep}
                onStepForward={handleNextStep}
                onStart={handleGoStart}
                onFinish={handleGoFinish}
            />
            <SolutionRenderer path={path} currentIndex={currentStep} />
        </div>
    );
};

export default Solution;
