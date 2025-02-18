import type { FC } from "react";
import { Downloader } from "./topbar/Downloader";
import Regenerator from "./topbar/Regenerator";
import StepBack from "./topbar/StepBack";
import StepPlayPause from "./topbar/StepPlayPause";
import StepForward from "./topbar/StepForward";

interface PlayPauseProps {
    isPlaying: boolean;
    onTogglePlay: () => void;
    onStepBack: () => void;
    onStepForward: () => void;
}

const VisualizeTopbar: FC<PlayPauseProps> = ({ isPlaying, onTogglePlay, onStepBack, onStepForward }) => (
    <div className="flex justify-center my-8">
        <div className="flex gap-12">
            <Regenerator />
            <StepBack isPlaying={isPlaying} onStepBack={onStepBack} />
            <StepPlayPause isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
            <StepForward isPlaying={isPlaying} onStepForward={onStepForward} />
            <Downloader />
        </div>
    </div>
);

export default VisualizeTopbar;
