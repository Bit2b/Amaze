import { Downloader } from "./buttons/Downloader";
import GameLevelSelect from "./buttons/GameLevelSelect";
import Regenerator from "./buttons/Regenerator";
import Solver from "./buttons/Solver";

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
