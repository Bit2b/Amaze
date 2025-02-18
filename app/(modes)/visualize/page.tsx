'use client';

import { useEffect, useState } from 'react';
import GridRenderer from '@/components/GridRenderer';
import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import VisualizeTopbar from '@/components/VisualizeTopbar';
import useStepHandler from '@/hooks/useStepHandler';

const VisualizePage = () => {
  const { height, width, speed } = useDimensionsStore();
  const { mazeSteps, isConstructive } = useResultStore(state => state.mazeResult);
  const [isRunning, setIsRunning] = useState(true);

  const { maze, handleNextStep, handlePrevStep, currentStep } = useStepHandler({
    mazeSteps,
    isConstructive,
    height,
    width
  });

  useEffect(() => {
    if (!isRunning) return;

    const current = setInterval(() => {
      if (currentStep >= mazeSteps.length) {
        setIsRunning(false);
        return;
      }
      handleNextStep();
    }, 5000 / speed);

    return () => clearInterval(current);

  }, [isRunning, speed, currentStep, mazeSteps.length, handleNextStep]);

  useEffect(() => {
    setIsRunning(true);
  }, [mazeSteps]);

  return (
    <div className="flex flex-col h-screen">
      <VisualizeTopbar
        isPlaying={isRunning}
        onTogglePlay={() => currentStep < mazeSteps.length && setIsRunning(!isRunning)}
        onStepBack={handlePrevStep}
        onStepForward={handleNextStep}
      />
      <GridRenderer grid={maze} />
    </div>
  );
};

export default VisualizePage;