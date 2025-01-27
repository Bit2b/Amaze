'use client';

import { CellEdge } from '@/types';
import { createEmptyGrid, createFullGrid } from '@/utils/gridUtils';
import { addEdge, removeEdge } from '@/utils/wallUtil';
import React, { useEffect, useRef, useState } from 'react';
import GridRenderer from '@/components/GridRenderer';
import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import MazeAlgorithmSeeder from '@/components/MazeAlgorithmSeeder';

const Visualizer = () => {
  const height = useDimensionsStore((set) => set.height);
  const width = useDimensionsStore((set) => set.width);

  const [mazeSteps, setMazeSteps] = useState<CellEdge[]>([]);
  const [isConstructive, setIsConstructive] = useState<Boolean>(false);
  const mazeSteps2 = useResultStore((set) => set.mazeResult.mazeSteps);
  const isConstructive2 = useResultStore((set) => set.mazeResult.isConstructive);

  const [maze, setMaze] = useState<number[][]>(createFullGrid(height, width));

  // Store timeout IDs
  const timeoutIds = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    setMazeSteps(mazeSteps2);
    setIsConstructive(isConstructive2);
    setMaze(createFullGrid(height, width));
  }, [mazeSteps2, isConstructive2]);

  useEffect(() => {
    // Clear all previous timeouts before starting new ones
    timeoutIds.current.forEach(clearTimeout);
    timeoutIds.current = [];

    if (mazeSteps.length === 0) return;

    if (isConstructive) setMaze(createEmptyGrid(height, width));

    mazeSteps.forEach((edge, index) => {
      const timeoutId = setTimeout(() => {
        setMaze((prevMaze) => {
          const newMaze = prevMaze.map((row) => [...row]);
          if (isConstructive) addEdge(newMaze, edge);
          else removeEdge(newMaze, edge);
          return newMaze;
        });
      }, index * 100);
      
      // Store the timeout ID
      timeoutIds.current.push(timeoutId);
    });
  }, [mazeSteps, isConstructive, height, width]); // Include height and width to refresh the grid when dimensions change

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <MazeAlgorithmSeeder />
      <GridRenderer grid={maze} />
    </div>
  );
};

export default Visualizer;
