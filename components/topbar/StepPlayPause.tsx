import { Play, LucidePause } from "lucide-react";
import type { FC } from "react";

interface PlayPauseProps {
    isPlaying: boolean;
    onTogglePlay: () => void;
}

const StepPlayPause: FC<PlayPauseProps> = ({ isPlaying, onTogglePlay }) => (
    <div className="relative group">
        <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="p-1 hover:bg-accent rounded-md transition-colors"
        >
            {isPlaying ? (
                <LucidePause className="h-6 w-6 text-primary" />
            ) : (
                <Play className="h-6 w-6 text-primary" />
            )}
        </button>
        <span className="absolute left-1/2 -translate-x-1/2 top-10 opacity-0 group-hover:opacity-100 bg-primary text-primary-foreground text-sm px-2 py-1 rounded-lg shadow-md transition-opacity duration-300 pointer-events-none">
            {isPlaying ? "Pause" : "Play"}
        </span>
    </div>
)

export default StepPlayPause;