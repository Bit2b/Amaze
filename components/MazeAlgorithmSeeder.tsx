import { useEffect } from 'react';
import kruskalsAlgorithm from '@/algorithms/mazeGeneration/kruskalsAlgorithm';
import primsAlgorithm from '@/algorithms/mazeGeneration/primsAlgorithm';
import recursiveBacktracker from '@/algorithms/mazeGeneration/recursiveBacktracker';
import recursiveDivision from '@/algorithms/mazeGeneration/recursiveDivision';
import { MazeAlgorithm } from '@/types';
import { useAlgorithmStore } from '@/store/algorithmStore';
import { useResultStore } from '@/store/resultStore';
import { useDimensionsStore } from '@/store/dimensionsStore';

const MazeAlgorithmSeeder: React.FC = () => {
  const algorithm = useAlgorithmStore((state) => state.currentAlgorithm);
  const setMazeResult = useResultStore((state) => state.setMazeResult);
  const height = useDimensionsStore((state) => state.height);
  const width = useDimensionsStore((state) => state.width);

  useEffect(() => {
    switch (algorithm) {
      case MazeAlgorithm.KRUSKAL:
        setMazeResult(kruskalsAlgorithm(height, width));
        break;

      case MazeAlgorithm.PRIM:
        setMazeResult(primsAlgorithm(height, width));
        break;

      case MazeAlgorithm.RECURSIVE_DIVISION:
        setMazeResult(recursiveDivision(height, width));
        break;

      case MazeAlgorithm.RECURSIVE_BACKTRACKING:
        setMazeResult(recursiveBacktracker(height, width));
        break;

      default:
        setMazeResult(kruskalsAlgorithm(height, width));  // Default algorithm
        break;
    }
  }, [algorithm, height, width, setMazeResult]);

  return null;
};

export default MazeAlgorithmSeeder;
