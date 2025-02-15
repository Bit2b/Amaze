'use client';

import GridRenderer from "@/components/GridRenderer";
import Topbar from "@/components/Topbar";
import { useResultStore } from "@/store/resultStore";

const App: React.FC = () => {
  const maze = useResultStore((set) => set.mazeResult.maze);
  return (
    <div>
      <Topbar />
      <GridRenderer grid={maze} />
    </div>
  );
};

export default App;
