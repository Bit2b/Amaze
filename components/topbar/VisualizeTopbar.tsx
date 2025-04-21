import type { FC } from "react";
import { Downloader } from "./buttons/Downloader";
import Regenerator from "./buttons/Regenerator";
import StepBack from "./buttons/StepBack";
import StepPlayPause from "./buttons/StepPlayPause";
import StepForward from "./buttons/StepForward";
import StepStart from "./buttons/StepStart";
import StepFinish from "./buttons/StepFinish";
import ShowHideEmptyCell from "./buttons/ShowHideEmpty";
import StepReverse from "./buttons/StepReverse";
import { Separator } from "../ui/separator";

interface PlayPauseProps {
    isPlaying: boolean;
    direction: "forward" | "reversed";
    onTogglePlay: () => void;
    onToggleDirection: () => void;
    onStepBack: () => void;
    onStepForward: () => void;
    onStart: () => void;
    onFinish: () => void;
}

const VisualizeTopbar: FC<PlayPauseProps> = ({ isPlaying, direction, onTogglePlay, onToggleDirection, onStepBack, onStepForward, onStart, onFinish }) => (
    <div className="flex justify-center my-8">
        <div className="flex gap-4 p-2 rounded-md w-fit bg-primary/10 dark:bg-secondary/40">
            <Regenerator />
            <Separator orientation='vertical' />
            <StepReverse direction={direction} onToggleDirection={onToggleDirection} />
            <Separator orientation='vertical' />
            <StepStart isPlaying={isPlaying} onStepStart={onStart} />
            <StepBack isPlaying={isPlaying} onStepBack={onStepBack} />
            <StepPlayPause isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
            <StepForward isPlaying={isPlaying} onStepForward={onStepForward} />
            <StepFinish isPlaying={isPlaying} onStepFinish={onFinish} />
            <Separator orientation='vertical' />
            <ShowHideEmptyCell />
            <Separator orientation='vertical' />
            <Downloader />
        </div>
    </div>
);

export default VisualizeTopbar;
