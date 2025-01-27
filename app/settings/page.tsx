'use client';

import { useDimensionsStore } from "@/store/dimensionsStore";
import { Plus, Minus } from "lucide-react"; // Import icons from lucide-react

const App: React.FC = () => {
  const height = useDimensionsStore((state) => state.height);
  const width = useDimensionsStore((state) => state.width);
  const increaseHeight = useDimensionsStore((state) => state.increaseHeight);
  const decreaseHeight = useDimensionsStore((state) => state.decreaseHeight);
  const increaseWidth = useDimensionsStore((state) => state.increaseWidth);
  const decreaseWidth = useDimensionsStore((state) => state.decreaseWidth);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-secondary-2 space-y-4">
      <div className="flex items-center space-x-4">
        <button
          onClick={decreaseWidth}
          className="flex items-center justify-center p-2 bg-btn-primary text-btn-primary-foreground rounded-lg hover:bg-btn-primary-hover transition"
        >
          <Minus className="w-5 h-5" />
        </button>
        <span className="text-lg font-semibold">Width: {width}</span>
        <button
          onClick={increaseWidth}
          className="flex items-center justify-center p-2 bg-btn-primary text-btn-primary-foreground rounded-lg hover:bg-btn-primary-hover transition"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={decreaseHeight}
          className="flex items-center justify-center p-2 bg-btn-primary text-btn-primary-foreground rounded-lg hover:bg-btn-primary-hover transition"
        >
          <Minus className="w-5 h-5" />
        </button>
        <span className="text-lg font-semibold">Height: {height}</span>
        <button
          onClick={increaseHeight}
          className="flex items-center justify-center p-2 bg-btn-primary text-btn-primary-foreground rounded-lg hover:bg-btn-primary-hover transition"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default App;
