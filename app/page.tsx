'use client';

import React, { useEffect, useState } from "react";
import GridRenderer from "../components/GridRenderer";
import kruskalsAlgorithm from "@/algorithms/mazeGeneration/kruskalsAlgorithm";
import Visualizer from "@/components/Visualizer";
import Mazes from "@/components/Mazes";


const App: React.FC = () => {
  const [maze, setMaze] = useState<number[][]>([]);

  useEffect(() => {
    const { maze } = kruskalsAlgorithm(10, 10);
    setMaze(maze);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-secondary-2">
      {/* <GridRenderer grid={maze} /> */}
      <Visualizer />
      {/* <Mazes /> */}
    </div>
  );
};

export default App;
