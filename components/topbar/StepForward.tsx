import { SkipForward } from "lucide-react";
import { useRef } from "react";

interface StepForwardProps {
    isPlaying: boolean;
    onStepForward: () => void;
}

const StepForward: React.FC<StepForwardProps> = ({ isPlaying, onStepForward }) => {
    const holdInterval = useRef<NodeJS.Timeout | null>(null);

    const handleMouseDown = () => {
        onStepForward();
        holdInterval.current = setInterval(() => {
            onStepForward();
        }, 100);
    };

    const handleMouseUp = () => {
        if (holdInterval.current) {
            clearInterval(holdInterval.current);
            holdInterval.current = null;
        }
    };

    return (
        isPlaying ? <div className="h-6 w-8" />
            : <div className="relative group">
                <button
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleMouseDown}
                    onTouchEnd={handleMouseUp}
                    aria-label="Step Forward"
                    className="p-1 hover:bg-accent rounded-md transition-colors"
                >
                    <SkipForward className="h-6 w-6 text-primary" />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
                    Step Forward
                </span>
            </div>
    );
};

export default StepForward;
