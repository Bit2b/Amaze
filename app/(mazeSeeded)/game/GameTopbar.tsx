import { Separator } from "@/components/ui/separator";
import { Downloader } from "@/components/topbar/Downloader";
import GameLevelSelect from "@/components/topbar/GameLevelSelect";
import Regenerator from "@/components/topbar/Regenerator";
import Solver from "@/components/topbar/Solver";
import ResetGame from "@/components/topbar/ResetGame";

const GameTopbar = () => {
    return (
        <div className="flex justify-center my-8">
            <div className="flex gap-4 p-2 rounded-md w-fit bg-primary/10 dark:bg-secondary/40">
                <Regenerator />
                <Separator orientation='vertical' />
                <ResetGame />
                <Separator orientation='vertical' />
                <Solver />
                <Separator orientation='vertical' />
                <Downloader />
                <Separator orientation='vertical' />
                <GameLevelSelect />
            </div>
        </div>
    );
};

export default GameTopbar;
