import type { FC } from "react";
import { Downloader } from "./topbar/Downloader";
import Regenerator from "./topbar/Regenerator";
import StepBack from "./topbar/StepBack";
import StepPlayPause from "./topbar/StepPlayPause";
import StepForward from "./topbar/StepForward";
import StepStart from "./topbar/StepStart";
import StepFinish from "./topbar/StepFinish";

interface PlayPauseProps {
    isPlaying: boolean;
    onTogglePlay: () => void;
    onStepBack: () => void;
    onStepForward: () => void;
    onStart: () => void;
    onFinish: () => void;
}

const VisualizeTopbar: FC<PlayPauseProps> = ({ isPlaying, onTogglePlay, onStepBack, onStepForward, onStart, onFinish }) => (
    <div className="flex justify-center my-8">
        <div className="flex gap-12">
            <Regenerator />
            <StepStart isPlaying={isPlaying} onStepStart={onStart} />
            <StepBack isPlaying={isPlaying} onStepBack={onStepBack} />
            <StepPlayPause isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
            <StepForward isPlaying={isPlaying} onStepForward={onStepForward} />
            <StepFinish isPlaying={isPlaying} onStepFinish={onFinish} />
            <Downloader />
        </div>
    </div>
);

export default VisualizeTopbar;
