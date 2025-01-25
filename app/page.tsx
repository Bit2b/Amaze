'use client';

import React, { use, useEffect, useState } from "react";
import GridRenderer from "../components/GridRenderer";
import kruskalsAlgorithm from "@/algorithms/mazeGeneration/kruskalsAlgorithm";


const App: React.FC = () => {
  const [maze, setMaze] = useState<number[][]>([]);
  
  useEffect(() => {
    const { maze } = kruskalsAlgorithm(10, 10);
    setMaze(maze);
  }, []);
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <GridRenderer grid={maze} />
    </div>
  );
};

export default App;
