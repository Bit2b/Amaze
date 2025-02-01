import { Downloader } from "./topbar/Downloader";
import GameLevelSelect from "./topbar/GameLevelSelect";
import Regenerator from "./topbar/Regenerator";
import Solver from "./topbar/Solver";

const GameTopbar = () => {
    return (
        <div className="flex justify-center my-8">
            <div className="flex gap-12">
                <Regenerator />
                <Solver />
                <Downloader />
                <GameLevelSelect />
            </div>
        </div>
    );
};

export default GameTopbar;
