import { Downloader } from "../../../../components/topbar/Downloader";
import GoBackButton from "../../../../components/topbar/GoBack";
import StepStart from "../../../../components/topbar/StepStart";
import StepPlayPause from "../../../../components/topbar/StepPlayPause";
import StepFinish from "../../../../components/topbar/StepFinish";
import StepBack from "../../../../components/topbar/StepBack";
import StepForward from "../../../../components/topbar/StepForward";
import { Separator } from "../../../../components/ui/separator";

interface PlayPauseProps {
  isPlaying: boolean;
  onTogglePlay: () => void;
  onStepBack: () => void;
  onStepForward: () => void;
  onStart: () => void;
  onFinish: () => void;
}

const SolutionTopbar: React.FC<PlayPauseProps> = ({ isPlaying, onTogglePlay, onStepBack, onStepForward, onStart, onFinish }) => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-4 p-2 rounded-md w-fit bg-primary/10 dark:bg-secondary/40">
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

export default SolutionTopbar;
