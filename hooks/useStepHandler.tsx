'use client';

import { useState, useEffect, useRef } from 'react';
import { createEmptyGrid, createFullGrid } from '@/utils/gridUtils';
import { EdgeModifier } from '@/utils/wallUtil';
import { CellEdge } from '@/types';
import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';

const useStepHandler = () => {
    const { isConstructive, maze: finalMaze, mazeSteps } = useResultStore(state => state.mazeResult);
    const { height, width } = useDimensionsStore();
    const [maze, setMaze] = useState(() =>
        isConstructive ? createEmptyGrid(height, width) : createFullGrid(height, width)
    );
    const stepIndex = useRef(0);

    useEffect(() => {
        stepIndex.current = 0;
        setMaze(isConstructive ? createEmptyGrid(height, width) : createFullGrid(height, width));
    }, [mazeSteps, isConstructive, height, width]);

    const updateMaze = (step: CellEdge, isForward: boolean) => {
        setMaze(prev => {
            const newMaze = prev.map(row => [...row]);
            EdgeModifier(newMaze, step, isConstructive, isForward);
            return newMaze;
        });
    };

    const handleNextStep = () => {
        if (stepIndex.current >= mazeSteps.length) return;
        updateMaze(mazeSteps[stepIndex.current], true);
        stepIndex.current++;
    };

    const handleGoFinish = () => {
        setMaze(finalMaze);
        stepIndex.current = mazeSteps.length;
    };

    const handleGoStart = () => {
        setMaze(isConstructive ? createEmptyGrid(height, width) : createFullGrid(height, width));
        stepIndex.current = 0;
    };

    const handlePrevStep = () => {
        if (stepIndex.current <= 0) return;
        stepIndex.current--;
        updateMaze(mazeSteps[stepIndex.current], false);
    };

    return { maze, handleNextStep, handlePrevStep, handleGoStart, handleGoFinish, currentStep: stepIndex.current };
};

export default useStepHandler;