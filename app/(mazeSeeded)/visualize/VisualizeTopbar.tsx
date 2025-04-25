import { Downloader } from "../../../components/topbar/Downloader";
import Regenerator from "../../../components/topbar/Regenerator";
import StepBack from "../../../components/topbar/StepBack";
import StepPlayPause from "../../../components/topbar/StepPlayPause";
import StepForward from "../../../components/topbar/StepForward";
import StepStart from "../../../components/topbar/StepStart";
import StepFinish from "../../../components/topbar/StepFinish";
import ShowHideEmptyCell from "../../../components/topbar/ShowHideEmpty";
import StepReverse from "../../../components/topbar/StepReverse";
import { Separator } from "../../../components/ui/separator";

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

const VisualizeTopbar: React.FC<PlayPauseProps> = ({ isPlaying, direction, onTogglePlay, onToggleDirection, onStepBack, onStepForward, onStart, onFinish }) => (
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
