import { Separator } from "../ui/separator";
import { Downloader } from "./buttons/Downloader";
import GameLevelSelect from "./buttons/GameLevelSelect";
import Regenerator from "./buttons/Regenerator";
import Solver from "./buttons/Solver";

const GameTopbar = () => {
    return (
        <div className="flex justify-center my-8">
            <div className="flex gap-4 p-2 rounded-md w-fit bg-secondary/40">
                <Regenerator />
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
