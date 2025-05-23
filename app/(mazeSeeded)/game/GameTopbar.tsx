import { Separator } from "@/components/ui/separator";
import { Downloader } from "@/components/topbar/Downloader";
import GameLevelSelect from "@/components/topbar/GameLevelSelect";
import Regenerator from "@/components/topbar/Regenerator";
import Solver from "@/components/topbar/Solver";
import ResetGame from "@/components/topbar/ResetGame";
import SeeGameTutorial from "@/components/topbar/SeeGameTutorial";
import Stopwatch from "@/components/topbar/gameStopwatch";
import ShowHideVisitedCell from "@/components/topbar/ShowHideVisited";

const GameTopbar = () => {
    return (
        <div className="flex justify-center my-8">
            <div className="flex gap-2 p-2 rounded-md w-fit bg-primary/10 dark:bg-secondary/40">
                <Regenerator />
                <Separator orientation='vertical' />
                <ResetGame />
                <Separator orientation='vertical' />
                <Solver />
                <Separator orientation='vertical' />
                <Downloader />
                <Separator orientation='vertical' />
                <ShowHideVisitedCell />
                <Separator orientation='vertical' />
                <SeeGameTutorial />
                <Separator orientation='vertical' />
                <GameLevelSelect />
                <Separator orientation='vertical' />
                <Stopwatch />
            </div>
        </div>
    );
};

export default GameTopbar;
