import { ChevronFirst } from "lucide-react";
import { IconButton } from "./icon-button";

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
            : <IconButton
                onClick={handleClick}
                tooltip="Step Start"
                className="p-2 hover:bg-accent rounded-md transition-colors"
            >
                <ChevronFirst className="h-5 w-5 text-primary" />
            </IconButton>
    );
};

export default StepStart;
