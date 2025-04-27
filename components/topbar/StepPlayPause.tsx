import { Play, LucidePause } from "lucide-react";
import type { FC } from "react";
import { IconButton } from "./icon-button";

interface PlayPauseProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
}

const StepPlayPause: FC<PlayPauseProps> = ({ isPlaying, onTogglePlay }) => (
  <IconButton
    onClick={onTogglePlay}
    tooltip={isPlaying ? "Pause" : "Play"}
  >
    {isPlaying ? (
      <LucidePause className="h-5 w-5 text-primary" />
    ) : (
      <Play className="h-5 w-5 text-primary" />
    )}
  </IconButton>
)

export default StepPlayPause;