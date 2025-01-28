'use client';

import { createEmptyGrid, createFullGrid } from '@/utils/gridUtils';
import { addEdge, removeEdge } from '@/utils/wallUtil';
import React, { useEffect, useRef } from 'react';
import GridRenderer from '@/components/GridRenderer';
import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import MazeAlgorithmSeeder from '@/components/MazeAlgorithmSeeder';

const Visualizer = () => {
  const { height, width } = useDimensionsStore();
  const { mazeSteps, isConstructive } = useResultStore(state => state.mazeResult);
  const [maze, setMaze] = React.useState<number[][]>(() => createFullGrid(height, width));
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Clear any pending animations
    timeoutIds.current.forEach(clearTimeout);
    timeoutIds.current = [];

    // Initialize grid based on algorithm type
    setMaze(isConstructive ? createEmptyGrid(height, width) : createFullGrid(height, width));

    // Create animation sequence
    mazeSteps.forEach((edge, index) => {
      const timeoutId = setTimeout(() => {
        setMaze(prev => {
          const newMaze = prev.map(row => [...row]);
          isConstructive ? addEdge(newMaze, edge) : removeEdge(newMaze, edge);
          return newMaze;
        });
      }, index * 100);

      timeoutIds.current.push(timeoutId);
    });

    // Cleanup on unmount
    return () => timeoutIds.current.forEach(clearTimeout);
  }, [mazeSteps, isConstructive]);

  return (
    <div className="flex justify-center items-center h-screen">
      <MazeAlgorithmSeeder />
      <GridRenderer grid={maze} />
    </div>
  );
};

export default Visualizer;