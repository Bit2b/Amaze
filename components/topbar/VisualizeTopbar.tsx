import type { FC } from "react";
import { Downloader } from "./buttons/Downloader";
import Regenerator from "./buttons/Regenerator";
import StepBack from "./buttons/StepBack";
import StepPlayPause from "./buttons/StepPlayPause";
import StepForward from "./buttons/StepForward";
import StepStart from "./buttons/StepStart";
import StepFinish from "./buttons/StepFinish";
import ShowHideEmptyCell from "./buttons/ShowHideEmpty";

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
            <ShowHideEmptyCell />
            <Downloader />
        </div>
    </div>
);

export default VisualizeTopbar;
