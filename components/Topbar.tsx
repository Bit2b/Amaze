import { useState } from "react";
import { Download, Play, Waypoints } from "lucide-react";
import MazeAlgorithmSeeder from "./MazeAlgorithmSeeder";

const Topbar = () => {
  const [seederKey, setSeederKey] = useState(0);

  const playHandler = () => {
    setSeederKey(prevKey => prevKey + 1);
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="flex gap-12">
        <div className="relative group">
          <button onClick={playHandler}>
            <Play className="h-6 w-6 text-primary" />
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-all duration-300">
            Regenerate
          </span>
        </div>

        <div className="relative group">
          <button>
            <Waypoints className="h-6 w-6 text-primary" />
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-all duration-300">
            Solve
          </span>
        </div>

        <div className="relative group">
          <button>
            <Download className="h-6 w-6 text-primary" />
          </button>
          <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-all duration-300">
            Download
          </span>
        </div>
      </div>

      {/* Re-mount MazeAlgorithmSeeder every click */}
      <MazeAlgorithmSeeder key={seederKey} />
    </div>
  );
};

export default Topbar;
