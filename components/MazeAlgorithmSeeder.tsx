'use client'

import { useEffect } from 'react';
import { useAlgorithmStore } from '@/store/algorithmStore';
import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';
import mazeAlgorithmResult from '@/algorithms/mazeAlgorithmResult';

const MazeAlgorithmSeeder: React.FC = () => {
  const algorithm = useAlgorithmStore((state) => state.currentAlgorithm);
  const setMazeResult = useResultStore((state) => state.setMazeResult);
  const height = useDimensionsStore((state) => state.height);
  const width = useDimensionsStore((state) => state.width);

  useEffect(() => {
    setMazeResult(mazeAlgorithmResult(algorithm, height, width));
  }, [algorithm, height, width, setMazeResult]);

  return null;
};

export default MazeAlgorithmSeeder;
