import { Downloader } from "./buttons/Downloader";
import GoBackButton from "./buttons/GoBack";
import StepStart from "./buttons/StepStart";
import StepPlayPause from "./buttons/StepPlayPause";
import StepFinish from "./buttons/StepFinish";
import StepBack from "./buttons/StepBack";
import StepForward from "./buttons/StepForward";
import { Separator } from "../ui/separator";

interface PlayPauseProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onStepBack: () => void;
  onStepForward: () => void;
  onStart: () => void;
  onFinish: () => void;
}

const SolverTopbar: React.FC<PlayPauseProps> = ({ isPlaying, onTogglePlay, onStepBack, onStepForward, onStart, onFinish }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-4 p-2 rounded-md w-fit bg-secondary/40">
        <GoBackButton />
        <Separator orientation='vertical' />
        <StepStart isPlaying={isPlaying} onStepStart={onStart} />
        <StepBack isPlaying={isPlaying} onStepBack={onStepBack} />
        <StepPlayPause isPlaying={isPlaying} onTogglePlay={onTogglePlay} />
        <StepForward isPlaying={isPlaying} onStepForward={onStepForward} />
        <StepFinish isPlaying={isPlaying} onStepFinish={onFinish} />
        <Separator orientation='vertical' />
        <Downloader />
      </div>
    </div>
  );
};

export default SolverTopbar;
