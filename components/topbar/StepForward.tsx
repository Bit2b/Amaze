import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import { Button } from "../ui/button";
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip";

interface StepForwardProps {
  isPlaying: boolean;
  onStepForward: () => void;
}

const StepForward: React.FC<StepForwardProps> = ({ onStepForward, isPlaying }) => {
  const holdInterval = useRef<NodeJS.Timeout | null>(null);

  const handleMouseDown = () => {
    onStepForward();
    holdInterval.current = setInterval(() => {
      onStepForward();
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
          aria-label="Step Forward"
          variant="ghost"
          size="icon"
        >
          <ChevronRight className="text-primary" />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" className="text-accent-foreground bg-accent">
        Step Forward
      </TooltipContent>
    </Tooltip>
  );
};

export default StepForward;
