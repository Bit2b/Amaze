'use client';

import GridRenderer from "@/components/GridRenderer";
import MazeAlgorithmSeeder from "@/components/MazeAlgorithmSeeder";
import { useResultStore } from "@/store/resultStore";

const App: React.FC = () => {
  const maze = useResultStore((set)=>set.mazeResult.maze);
  return (
    <div>
      <MazeAlgorithmSeeder/>
      <GridRenderer grid={maze} />
    </div>
  );
};

export default App;
