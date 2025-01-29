'use client';

import MazeAlgorithmSeeder from "@/components/MazeAlgorithmSeeder";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <MazeAlgorithmSeeder />
      <div className="min-h-screen flex flex-col items-center justify-center text-primary text-center px-6">
        {/* Hero Section */}
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4">
          Amaze
        </h1>
        <p className="text-lg md:text-xl max-w-2xl">
          Generate, Visualize, and Conquer
        </p>
        <div className="">

        </div>
      </div>
    </div>
  );
};

export default App;
