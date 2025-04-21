import { ChevronFirst } from "lucide-react";

interface StepStartProps {
    isPlaying: boolean;
    onStepStart: () => void;
}

const StepStart: React.FC<StepStartProps> = ({ isPlaying, onStepStart }) => {
    const handleClick = () => {
        onStepStart();
    };

    return (
        isPlaying ? <div className="h-7 w-9" />
            : <div className="relative group">
                <button
                    onClick={handleClick}
                    aria-label="Step Start"
                    className="p-2 hover:bg-accent rounded-md transition-colors"
                >
                    <ChevronFirst className="h-5 w-5 text-primary" />
                </button>
                <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-2 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
                    Step Start
                </span>
            </div>
    );
};

export default StepStart;
