'use client';

import { useCallback, useEffect, useState } from 'react';
import GridRenderer from '@/components/GridRenderer';
import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import VisualizeTopbar from '@/components/topbar/VisualizeTopbar';
import useStepHandler from '@/hooks/useStepHandler';

type Direction = "forward" | "reversed";

const VisualizePage = () => {
  const { speed } = useDimensionsStore();
  const { mazeSteps } = useResultStore(state => state.mazeResult);
  const [direction, setDirection] = useState<Direction>("forward");
  const [isPlaying, setIsPlaying] = useState(true);

  const { maze, handleNextStep, handlePrevStep, handleGoStart, handleGoFinish, currentStep } = useStepHandler();

  const toggleDirection = () => {
    setIsPlaying(true);
    setDirection(prev => prev === "forward" ? "reversed" : "forward");
  }
  const togglePlay = () => setIsPlaying(prev => !prev);

  const performStep = useCallback(() => {
    if (direction === "forward") {
      if (currentStep >= mazeSteps.length)
        setIsPlaying(false)
      else
        handleNextStep();
    } else {
      if (currentStep <= 0)
        setIsPlaying(false)
      else
        handlePrevStep();
    }
  }, [currentStep, mazeSteps.length, direction, handleNextStep, handlePrevStep]);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(performStep, 5000 / speed);
    return () => clearInterval(interval);
  }, [isPlaying, speed, performStep]);

  useEffect(() => {
    setIsPlaying(true);
    setDirection("forward");
  }, [mazeSteps]);

  return (
    <div className="flex flex-col h-screen">
      <VisualizeTopbar
        isPlaying={isPlaying}
        direction={direction}
        onTogglePlay={togglePlay}
        onToggleDirection={toggleDirection}
        onStepBack={handlePrevStep}
        onStepForward={handleNextStep}
        onStart={handleGoStart}
        onFinish={handleGoFinish}
      />
      <GridRenderer grid={maze} />
    </div>
  );
};

export default VisualizePage;