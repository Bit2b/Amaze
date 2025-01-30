import { useState, useEffect } from "react";
import MazeAlgorithmSeeder from "../MazeAlgorithmSeeder";
import { Play } from "lucide-react";

const Regenerator = () => {
    const [shouldRun, setShouldRun] = useState(false);

    const playHandler = () => {
        setShouldRun(true);
    };

    useEffect(() => {
        if (shouldRun) {
            setShouldRun(false);
        }
    }, [shouldRun]);

    return (
        <div className="relative group">
            <button onClick={playHandler}>
                <Play className="h-6 w-6 text-primary" />
            </button>
            <span className="absolute left-1/2 -translate-x-1/2 top-8 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-all duration-300">
                Regenerate
            </span>
            {shouldRun && <MazeAlgorithmSeeder />}  {/* ✅ Runs once per click */}
        </div>
    );
};

export default Regenerator;
