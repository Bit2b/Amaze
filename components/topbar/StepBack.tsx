import { ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

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
    }, 150);
  };

  const handleMouseUp = () => {
    if (holdInterval.current) {
      clearInterval(holdInterval.current);
      holdInterval.current = null;
    }
  };

  return isPlaying ? (
    <div className="h-7 w-9" />
  ) : (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          aria-label="Step Back"
          variant="ghost"
          size="icon"
          className="cursor-pointer"
        >
          <ChevronLeft className="text-primary" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-accent-foreground bg-accent">
        Step Back
      </TooltipContent>
    </Tooltip>
  );
};

export default StepBack;
