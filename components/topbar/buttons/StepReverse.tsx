import { Undo, Redo } from "lucide-react";
import type { FC } from "react";

interface PlayPauseProps {
  direction: "forward" | "reversed";
  onToggleDirection: () => void;
}

const StepReverse: FC<PlayPauseProps> = ({ direction, onToggleDirection }) => {
  return (
    <div className="relative group">
      <button
        onClick={onToggleDirection}
        aria-label={direction === "forward" ? "Play Reverse" : "Play Forward"}
        className="p-1 hover:bg-accent rounded-md transition-colors"
      >
        {direction === "reversed" ? (
          <Redo className="h-6 w-6 text-primary" />
        ) : (
          <Undo className="h-6 w-6 text-primary" />
        )}
      </button>
      <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
        {direction === "forward" ? "Play Reverse" : "Play Forward"}
      </span>
    </div>
  );
};

export default StepReverse;
