import { Separator } from "../../../components/ui/separator";
import { Downloader } from "../../../components/topbar/Downloader";
import MazeChanger from "../../../components/topbar/MazeChanger";
import Regenerator from "../../../components/topbar/Regenerator";

const GeneratorTopbar = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="flex gap-4 p-2 rounded-md w-fit bg-primary/10 dark:bg-secondary/40">
        <Regenerator />
        <Separator orientation='vertical' />
        <MazeChanger />
        <Separator orientation='vertical' />
        <Downloader />
      </div>
    </div>
  );
};

export default GeneratorTopbar;
