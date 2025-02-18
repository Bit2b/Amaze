import { SkipBack } from "lucide-react";
import { useRef } from "react";

interface StepBackProps {
    isPlaying: boolean;
    onStepBack: () => void;
}

const StepBack: React.FC<StepBackProps> = ({ onStepBack, isPlaying }) => {
    const holdInterval = useRef<NodeJS.Timeout | null>(null);

    const handleMouseDown = () => {
        onStepBack();
        holdInterval.current = setInterval(() => {
            onStepBack();
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
                    aria-label="Step Back"
                    className="p-1 hover:bg-accent rounded-md transition-colors"
                >
                    <SkipBack className="h-6 w-6 text-primary" />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
                    Step Back
                </span>
            </div>
    );
};

export default StepBack;
