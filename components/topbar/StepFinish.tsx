import { ChevronLast } from "lucide-react";

interface StepFinishProps {
    isPlaying: boolean;
    onStepFinish: () => void;
}

const StepFinish: React.FC<StepFinishProps> = ({ isPlaying, onStepFinish }) => {
    const handleClick = () => {
        onStepFinish();
    };

    return (
        isPlaying ? <div className="h-6 w-8" />
            : <div className="relative group">
                <button
                    onClick={handleClick}
                    aria-label="Step Final"
                    className="p-1 hover:bg-accent rounded-md transition-colors"
                >
                    <ChevronLast className="h-6 w-6 text-primary" />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
                    Step Final
                </span>
            </div>
    );
};

export default StepFinish;
