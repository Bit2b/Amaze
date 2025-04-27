import { ChevronLast } from "lucide-react";
import { IconButton } from "./icon-button";

interface StepFinishProps {
  isPlaying: boolean;
  onStepFinish: () => void;
}

const StepFinish: React.FC<StepFinishProps> = ({ isPlaying, onStepFinish }) => {
  const handleClick = () => {
    onStepFinish();
  };

  return (
    isPlaying ? <div className="h-7 w-9" />
      : <IconButton onClick={handleClick} tooltip="Step Final">
        <ChevronLast />
      </IconButton>

  );
};

export default StepFinish;
