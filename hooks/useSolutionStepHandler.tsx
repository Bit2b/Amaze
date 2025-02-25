'use client';

import { useResultStore } from '@/store/resultStore';
import { Cell } from '@/types';
import { stepModifier } from '@/utils/solveUtils';
import { useEffect, useRef, useState } from 'react';

interface pathProps {
    path: Cell[];
}

const useSolutionStepHandler = ({ path }: pathProps) => {
    const { maze: initialMaze } = useResultStore((state) => state.mazeResult);
    const [maze, setMaze] = useState(() => initialMaze);
    const stepIndex = useRef(0);

    useEffect(() => {
        stepIndex.current = 0;
        setMaze(initialMaze);
    }, [path, initialMaze]);

    const updateMaze = (cell: Cell, isForward: boolean) => {
        setMaze(prev => {
            const newMaze = prev.map(row => [...row]);
            stepModifier(path, newMaze, cell, isForward);
            return newMaze;
        });
    };

    const handleNextStep = () => {
        if (stepIndex.current >= path.length) return;
        updateMaze(path[stepIndex.current], true);
        stepIndex.current++;
    };

    const handlePrevStep = () => {
        if (stepIndex.current <= 0) return;
        stepIndex.current--;
        updateMaze(path[stepIndex.current], false);
    };

    const handleGoStart = () => {
        setMaze(initialMaze);
        stepIndex.current = 0;
    };

    const handleGoFinish = () => {
        for (let i = stepIndex.current; i < path.length; i++) {
            updateMaze(path[i], true);
        }
        stepIndex.current = path.length;
    };

    return {
        maze,
        handleNextStep,
        handlePrevStep,
        handleGoStart,
        handleGoFinish,
        currentStep: stepIndex.current
    };
};

export default useSolutionStepHandler;