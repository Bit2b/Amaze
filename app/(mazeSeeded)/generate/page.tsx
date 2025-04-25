'use client';

import GenerateRenderer from "@/components/GenerateRenderer";
import Topbar from "@/app/(mazeSeeded)/generate/GeneratorTopbar";
import { useResultStore } from "@/store/resultStore";

const App: React.FC = () => {
  const maze = useResultStore((set) => set.mazeResult.maze);
  return (
    <div className="flex flex-col h-screen">
      <Topbar />
      <GenerateRenderer grid={maze} />
    </div>
  );
};

export default App;
