import { Undo, Redo } from "lucide-react";
import type { FC } from "react";
import { IconButton } from "./icon-button";

interface PlayPauseProps {
  direction: "forward" | "reversed";
  onToggleDirection: () => void;
}

const StepReverse: FC<PlayPauseProps> = ({ direction, onToggleDirection }) => {
  return (
    <IconButton
      onClick={onToggleDirection}
      tooltip={direction === "forward" ? "Play Reverse" : "Play Forward"}
      className="p-2 hover:bg-accent rounded-md transition-colors"
    >
      {direction === "reversed" ? (
        <Redo className="h-5 w-5 text-primary" />
      ) : (
        <Undo className="h-5 w-5 text-primary" />
      )}
    </IconButton>
  );
};

export default StepReverse;
