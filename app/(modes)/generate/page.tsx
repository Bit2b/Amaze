'use client';

import GridRenderer from "@/components/GridRenderer";
import Topbar from "@/components/topbar/GeneratorTopbar";
import { useResultStore } from "@/store/resultStore";

const App: React.FC = () => {
  const maze = useResultStore((set) => set.mazeResult.maze);
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <GridRenderer grid={maze} />
    </div>
  );
};

export default App;
